import { NextResponse, NextRequest } from "next/server";
import { routes, repositoryName } from "@/prismicio";
import config from "../../../../slicemachine.config.json";
import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";
import { revalidatePath } from "next/cache";

export const GET = async () => {
  return NextResponse.json(
    { message: "Hello, Next.js Version 13!" },
    { status: 200 }
  );
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  // console.log("SECRET:", process.env.PRISMIC_WEBHOOK_SECRET);
  // Do something
  // console.log("CHECK", "START");

  // check if this is a Prismic webhook request via secret
  if (body.type === "api-update" && body.documents.length > 0) {
    // Check for secret to confirm this is a valid request
    if (body.secret !== process.env.PRISMIC_WEBHOOK_SECRET) {
      return NextResponse.json(
        { message: "Invalid Prismic ISR Webhook token" },
        { status: 401 }
      );
    }

    // create prismic client:
    // (1) from scratch:
    // const client = createClient();

    // or (2): if you have a `createClient()` function defined
    // elsewhere in your app, use that instead
    //  For example, this is the default createClient function, customized to use the slicemachine.config.json
    // @param repositoryName, routes = imported from prismic config (prismicio.ts in root of project)
    // routes are very important, to let the client figure out the paths for your pages - we need to know the path for each document so we can revalidate it
    // if not using routes, or have more complicated links to resolve use linkResolver instead (see below)
    const client = prismic.createClient(repositoryName, { routes, ...config });

    // Get a list of URLs for any new, updated, or deleted documents
    const documents = await client.getAllByIDs(body.documents);

    //  get list of page paths for any new, updated, or deleted documents:
    // (1): with optioonal link resolver, if we don't pass a "routes" object to the client above (option 1 when creating client)
    // const pagePaths = documents.map((doc) => prismicH.asLink(doc, linkResolver));
    // or (2): without link resolver (if we already pass a "routes" object to the client)
    const pagePaths = documents.map((doc) => prismicH.asLink(doc));

    // console.log("pagePaths", pagePaths);

    // Revalidate the pagePaths for those documents
    // console.log("CHECK", "B4 AWAIT PROMISE.ALL");
    await Promise.all(
      pagePaths.map(async (pagePath) => {
        // console.log("CHECK", "IN PROMISE.ALL");
        if (pagePath) {
          // console.log(
          //   "CHECK",
          //   "IN PROMISE.ALL, PAGEPATH PRESENT, REVALIDATING"
          // );
          revalidatePath(pagePath);
        }
      })
    ).then((values) => {
      // console.log("CHECK", "IN PROMISE.ALL, B4 ERROR RETURN");
      // // If there was no path to revalidate, tell the requester
      // return NextResponse.json({
      //   revalidated: false,
      //   now: Date.now(),
      //   message: "Missing a path to revalidate",
      // });

      // console.log("CHECK", "AFTER ALL PROMISES COMPLETED", values);
      // @ts-ignore
      // console.log("CHECK", "PROMISE.BODY", values.body);
      // If all paths were revalidated, tell the requester
      return NextResponse.json(
        { revalidated: true, now: Date.now() },
        { status: 200 }
      );
    });

    // console.log("CHECK", "FINAL 200 RETURN");
    // If all paths were revalidated, tell the requester
    return NextResponse.json(
      { revalidated: true, now: Date.now() },
      { status: 200 }
    );
  }
  // // // If the request's body is unknown, tell the requester
  // console.log("CHECK", "FINAL ERROR RETURN");
  // return NextResponse.json({ message: "Invalid body" }, { status: 401 });
};
