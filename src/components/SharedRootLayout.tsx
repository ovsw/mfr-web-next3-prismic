import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

// devlink stuff
import "@/app/tailwind.css";
import "@/devlink/global.css";
import { DevLinkProvider } from "@/devlink";

// import Header from "@/components/mfr-old/Header";
import Footer from "@/components/mfr-old/Footer";

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
        <h1 className="text-3xl font-bold underline text-red-500">
          Hello, Next.js!
        </h1>
        {/* <Header /> */}
        <DevLinkProvider>{children}</DevLinkProvider>
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
