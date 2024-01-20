import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/prismic-all-slices";

import Header from "@/components/mfr-old/Header";
import { getLocales } from "@/lib/getLocales";

type Params = { pagePath: string[] };

export const dynamicParams = false;

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const uid = params.pagePath[params.pagePath.length - 1];
  const page = await client
    .getByUID("page", uid, { lang: "es" })
    .catch(() => notFound());
  const settings = await client.getSingle("settings", { lang: "es" });

  return {
    title: page.data.meta_title || settings.data.site_title,
    description: page.data.meta_description || settings.data.meta_description,
    openGraph: {
      title: page.data.meta_title || settings.data.site_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || settings.data.og_image.url || "",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  /*
   * `params.uid` contains an array of each part of the URL separated by a `/`.
   * In this example, the last part is the document's UID.
   */
  const uid = params.pagePath[params.pagePath.length - 1];

  const page = await client
    .getByUID("page", uid, { lang: "es" })
    .catch(() => notFound());

  const locales = await getLocales(page, client);

  return (
    <>
      <Header locales={locales} />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType("page", {
    lang: "es",
    predicates: [prismic.filter.not("my.page.uid", "home")],
  });

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    // GOTCHA: the actual path being returned by prismic contains the language code
    // so it's /es/folder-uid/page-uid. but here we've hardcoded the /es/ part
    // (since we're in the app/es/ folder) and so we need to remove the /es/ part before
    // returning it to generateStaticParams. Otherwise it'll try to generate
    // the page /es/es/folder-uid/page-uid - which will 404
    // this would not be needed if we had a [lang]/[...pagePath] structure
    //TODO see if we can switch to an app/[lang]/[...pagePath] structure now that we have a better understanding of how Next.js and Prismic routing work
    const pagePathWithoutLanguagePart = page.url?.replace("/es", "");
    console.log("page url without /es:", pagePathWithoutLanguagePart);
    console.log(
      "generated pagePath:",
      pagePathWithoutLanguagePart?.split("/").filter(Boolean)
    );
    return {
      pagePath: pagePathWithoutLanguagePart?.split("/").filter(Boolean),
    };
  });
}
