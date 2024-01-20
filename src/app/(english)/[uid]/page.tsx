import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/prismic-all-slices";

import Header from "@/components/mfr-old/Header";
import { getLocales } from "@/lib/getLocales";

type Params = { uid: string };

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
  const page = await client
    .getByUID("page", params.uid, { lang: "en-us" })
    .catch(() => notFound());
  const settings = await client.getSingle("settings", { lang: "en-us" });

  return {
    title: prismic.asText(page.data.title) || settings.data.site_title,
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
  const page = await client
    .getByUID("page", params.uid, { lang: "en-us" })
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
    lang: "en-us",
    predicates: [prismic.filter.not("my.page.uid", "home")],
  });

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    return { uid: page.uid };
  });
}
