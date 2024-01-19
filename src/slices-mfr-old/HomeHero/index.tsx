import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import HeroTemplate from "@/components/mfr-old/common/hero-template";

// import RichTextRenderer from "../richTextRenderer"
// import { blockIterator } from "../../utils/blockIterator"
/**
 * Props for `HomeHero`.
 */
export type HomeHeroProps = SliceComponentProps<Content.HomeHeroSlice>;

/**
 * Component for "HomeHero" Slices.
 */
const HomeHero = ({ slice }: HomeHeroProps): JSX.Element => {
  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <HeroTemplate
        background_image={slice.primary.image}
        border_color="light"
        height="tall"
        background_color="light"
      >
        {slice.primary.heading && (
          <h1 className="text-left text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl max-w-sm md:max-w-none ">
            <span
              className="block text-white
           max-w-[7em] sm:max-w-[7em] lg:max-w-md xl:max-w-xl
           "
            >
              {slice.primary.heading}
            </span>
            {/* <span className="block text-green-200">customer support</span> */}
          </h1>
        )}
        {slice.primary.paragraph && (
          <div
            className="mt-6 text-left text-stone-200 lg:leading-relaxed
          text-md lg:text-xl
          max-w-[40%] lg:max-w[50%] 2xl:max-w-lg 
          hidden md:block
        "
          >
            <PrismicRichText field={slice.primary.paragraph} />
          </div>
        )}
        {/* BUTTONS */}
        {/* {buttons.length > 0 && (
          <div className="mt-10 max-w-sm sm:max-w-none sm:flex">
            <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-5">
              {blockIterator(buttons)}
            </div>
          </div>
        )} */}

        {/* END BUTTONS */}
      </HeroTemplate>
    </div>
  );
};

export default HomeHero;
