import { PrismicNextLink } from "@prismicio/next";

// TODO Update locale labels
const localeLabels = {
  "en-us": "EN",
  es: "ES",
};

export default function Header({ locales = [] }) {
  return (
    <header>
      <nav>
        <span aria-hidden={true}>🌐</span>
        <ul className="flex flex-wrap gap-3">
          {locales.map((locale) => {
            // the below line is needed because the default locale in prismic does not affect the URL stored in the CMS DB
            // so instead of locale.url being `/en-us/page-1` it's `/page-1`
            // but if we don't add the default language URL segment, next-intl won't change the locale via links.
            // so we have to add it manually
            const defaultLocalePrefix = locale.lang == "es" ? `/es` : "";
            return (
              <li key={locale.lang} className="first:font-semibold">
                <PrismicNextLink
                  href={`${defaultLocalePrefix}${locale.url}`}
                  locale={locale.lang}
                  aria-label={`Change language to ${locale.lang_name}`}
                >
                  {/* {console.log(locale.url)} */}
                  {localeLabels[locale.lang] || locale.lang}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
