import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

// devlink stuff
import "../../../devlink/global.css";
import { DevLinkProvider } from "@/devlink";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="https://prismic.io/favicon.ico"
        />
      </head>
      <body>
        <DevLinkProvider>{children}</DevLinkProvider>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
