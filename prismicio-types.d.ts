// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

interface IconDocumentData {}

/**
 * icon document from Prismic
 *
 * - **API ID**: `icon`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type IconDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<IconDocumentData>, "icon", Lang>;

type PageDocumentDataSlicesSlice =
  | HomeHeroSlice
  | ContentSlice
  | FeatureSlice
  | HeroHeadingSlice
  | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Fallback Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Fallback Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Fallback OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes = IconDocument | PageDocument | SettingsDocument;

/**
 * Primary content in *Content → Primary*
 */
export interface ContentSliceDefaultPrimary {
  /**
   * Heading field in *Content → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Rich Text field in *Content → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content.primary.rich_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  rich_text: prismic.RichTextField;

  /**
   * Main Image field in *Content → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content.primary.main_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  main_image: prismic.ImageField<never>;
}

/**
 * Default variation for Content Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContentSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Content*
 */
type ContentSliceVariation = ContentSliceDefault;

/**
 * Content Shared Slice
 *
 * - **API ID**: `content`
 * - **Description**: Content
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentSlice = prismic.SharedSlice<
  "content",
  ContentSliceVariation
>;

/**
 * Primary content in *Feature → Primary*
 */
export interface FeatureSliceDefaultPrimary {
  /**
   * Eyebrow Text field in *Feature → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.eyebrow_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrow_text: prismic.KeyTextField;

  /**
   * Heading Text field in *Feature → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.heading_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading_text: prismic.KeyTextField;

  /**
   * Paragraph Text field in *Feature → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.paragraph_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph_text: prismic.RichTextField;

  /**
   * Main Image field in *Feature → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.main_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  main_image: prismic.ImageField<never>;

  /**
   * Main Image Aspect Ratio field in *Feature → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Square (1/1)
   * - **API ID Path**: feature.primary.main_image_ar
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  main_image_ar: prismic.SelectField<
    "Square (1/1)" | "Landscape (3:2)" | "Portrait (2:3)",
    "filled"
  >;

  /**
   * Button 1 Text field in *Feature → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.button_1_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_1_text: prismic.KeyTextField;

  /**
   * Button 1 Link field in *Feature → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.button_1_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_1_link: prismic.LinkField;

  /**
   * Button 2 Text field in *Feature → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.button_2_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_2_text: prismic.KeyTextField;

  /**
   * Button 2 Link field in *Feature → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.button_2_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_2_link: prismic.LinkField;
}

/**
 * Default variation for Feature Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeatureSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeatureSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Feature → Primary*
 */
export interface FeatureSliceFeature192Primary {
  /**
   * Eyebrow Text field in *Feature → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.eyebrow_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrow_text: prismic.KeyTextField;

  /**
   * Heading Text field in *Feature → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.heading_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading_text: prismic.KeyTextField;

  /**
   * Paragraph Text field in *Feature → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.paragraph_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph_text: prismic.RichTextField;

  /**
   * Main Image field in *Feature → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.main_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  main_image: prismic.ImageField<never>;

  /**
   * Main Image Aspect Ratio field in *Feature → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Square (1/1)
   * - **API ID Path**: feature.primary.main_image_ar
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  main_image_ar: prismic.SelectField<
    "Square (1/1)" | "Landscape (3:2)" | "Portrait (2:3)",
    "filled"
  >;

  /**
   * Button 1 Text field in *Feature → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.button_1_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_1_text: prismic.KeyTextField;

  /**
   * Button 1 Link field in *Feature → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.button_1_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_1_link: prismic.LinkField;

  /**
   * Button 2 Text field in *Feature → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.button_2_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_2_text: prismic.KeyTextField;

  /**
   * Button 2 Link field in *Feature → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.button_2_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_2_link: prismic.LinkField;
}

/**
 * Feature 192 variation for Feature Slice
 *
 * - **API ID**: `feature192`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeatureSliceFeature192 = prismic.SharedSliceVariation<
  "feature192",
  Simplify<FeatureSliceFeature192Primary>,
  never
>;

/**
 * Slice variation for *Feature*
 */
type FeatureSliceVariation = FeatureSliceDefault | FeatureSliceFeature192;

/**
 * Feature Shared Slice
 *
 * - **API ID**: `feature`
 * - **Description**: Feature
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeatureSlice = prismic.SharedSlice<
  "feature",
  FeatureSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroHeadingSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_heading.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_heading.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Main Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_heading.primary.mainImage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  mainImage: prismic.ImageField<never>;

  /**
   * Call to Action 1 Text field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_heading.primary.cta1Text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta1Text: prismic.KeyTextField;

  /**
   * Call to Action 1 Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_heading.primary.cta1Link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta1Link: prismic.LinkField;

  /**
   * Call to Action 2 Text field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_heading.primary.cta2Text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta2Text: prismic.KeyTextField;

  /**
   * Call to Action 2 Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_heading.primary.cta2Link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta2Link: prismic.LinkField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroHeadingSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroHeadingSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroHeadingSliceHero5Primary {
  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_heading.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_heading.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Main Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_heading.primary.mainImage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  mainImage: prismic.ImageField<never>;

  /**
   * Call to Action 1 Text field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_heading.primary.cta1Text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta1Text: prismic.KeyTextField;

  /**
   * Call to Action 1 Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_heading.primary.cta1Link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta1Link: prismic.LinkField;

  /**
   * Call to Action 2 Text field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_heading.primary.cta2Text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta2Text: prismic.KeyTextField;

  /**
   * Call to Action 2 Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_heading.primary.cta2Link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta2Link: prismic.LinkField;
}

/**
 * Hero 5 variation for Hero Slice
 *
 * - **API ID**: `hero5`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroHeadingSliceHero5 = prismic.SharedSliceVariation<
  "hero5",
  Simplify<HeroHeadingSliceHero5Primary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroHeadingSliceVariation =
  | HeroHeadingSliceDefault
  | HeroHeadingSliceHero5;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero_heading`
 * - **Description**: HeroHeading
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroHeadingSlice = prismic.SharedSlice<
  "hero_heading",
  HeroHeadingSliceVariation
>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Primary content in *HomeHero → Primary*
 */
export interface HomeHeroSliceDefaultPrimary {
  /**
   * Heading field in *HomeHero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Paragraph field in *HomeHero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_hero.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * Main Image field in *HomeHero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *HomeHero → Items*
 */
export interface HomeHeroSliceDefaultItem {
  /**
   * Button Text field in *HomeHero → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_hero.items[].button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Type field in *HomeHero → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: primary
   * - **API ID Path**: home_hero.items[].button_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  button_type: prismic.SelectField<
    "primary" | "accent" | "light-primary" | "light-accent" | "dark",
    "filled"
  >;

  /**
   * Button Link field in *HomeHero → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: home_hero.items[].button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button Icon field in *HomeHero → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: home_hero.items[].button_icon
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_icon: prismic.ContentRelationshipField<"icon">;
}

/**
 * Default variation for HomeHero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeHeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HomeHeroSliceDefaultPrimary>,
  Simplify<HomeHeroSliceDefaultItem>
>;

/**
 * Slice variation for *HomeHero*
 */
type HomeHeroSliceVariation = HomeHeroSliceDefault;

/**
 * HomeHero Shared Slice
 *
 * - **API ID**: `home_hero`
 * - **Description**: HomeHero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeHeroSlice = prismic.SharedSlice<
  "home_hero",
  HomeHeroSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      IconDocument,
      IconDocumentData,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      ContentSlice,
      ContentSliceDefaultPrimary,
      ContentSliceVariation,
      ContentSliceDefault,
      FeatureSlice,
      FeatureSliceDefaultPrimary,
      FeatureSliceFeature192Primary,
      FeatureSliceVariation,
      FeatureSliceDefault,
      FeatureSliceFeature192,
      HeroHeadingSlice,
      HeroHeadingSliceDefaultPrimary,
      HeroHeadingSliceHero5Primary,
      HeroHeadingSliceVariation,
      HeroHeadingSliceDefault,
      HeroHeadingSliceHero5,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      HomeHeroSlice,
      HomeHeroSliceDefaultPrimary,
      HomeHeroSliceDefaultItem,
      HomeHeroSliceVariation,
      HomeHeroSliceDefault,
    };
  }
}
