import { PrismicNextLink } from "@prismicio/next";

// TODO Update locale labels
const localeLabels = {
  "en-us": "EN",
  es: "ES",
};

export default function Header({ locales = [] }) {
  return (
    <nav>
      {/* <span aria-hidden={true}>🌐</span> */}
      <span className="flex flex-wrap gap-3 min-w-20">
        {locales.map((locale) => {
          return (
            <span key={locale.lang} className="first:font-bold">
              <PrismicNextLink
                href={locale.url}
                locale={locale.lang}
                aria-label={`Change language to ${locale.lang_name}`}
              >
                {localeLabels[locale.lang] || locale.lang}
              </PrismicNextLink>
            </span>
          );
        })}
      </span>
    </nav>
  );
}
