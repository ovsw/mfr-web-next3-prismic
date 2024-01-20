import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

// devlink stuff
import "@/app/tailwind.css";
import "@/devlink/global.css";
import { DevLinkProvider } from "@/devlink";

import Footer from "@/components/mfr-old/Footer";

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
        <DevLinkProvider>
          {children}
          <Footer />
        </DevLinkProvider>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
