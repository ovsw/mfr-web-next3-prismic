import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

// devlink stuff
import "@/devlink/global.css";
import { DevLinkProvider } from "@/devlink";
import Head from "next/head";

export default async function SharedRootLayout({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  return (
    <html lang={lang}>
      <body>
        <DevLinkProvider>{children}</DevLinkProvider>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
