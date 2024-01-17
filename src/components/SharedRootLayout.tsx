import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

// devlink stuff
import "@/app/tailwind.css";
import "@/devlink/global.css";
import { DevLinkProvider } from "@/devlink";

export default async function SharedRootLayout({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  return (
    <html lang={lang} className="background-red">
      <body>
        <DevLinkProvider>{children}</DevLinkProvider>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
