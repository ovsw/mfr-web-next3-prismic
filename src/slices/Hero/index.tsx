import { Hero1, Hero5 } from "@/devlink";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeroHeading`.
 */
export type HeroHeadingProps = SliceComponentProps<Content.HeroHeadingSlice>;

/**
 * Component for "HeroHeading" Slices.
 */
const HeroHeading = ({ slice }: HeroHeadingProps): JSX.Element => {
  const defaultImgSizes =
    "(max-width: 991px) 100vw, (max-width: 1400px) 50vw, 25vw";

  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && (
        <Hero1
          heading1Text={slice.primary.heading}
          textSlot1={<PrismicRichText field={slice.primary.text} />}
          mainImageSlot={
            <PrismicNextImage
              field={slice.primary.mainImage}
              // imgixParams={{ sat: -100 }}
              sizes={defaultImgSizes}
              style={{
                objectFit: "cover",
                maxHeight: "35rem",
                // width: "100%",
                // height: "auto",
              }}
            />
          }
        />
      )}
      {slice.variation === "hero5" && (
        <Hero5
          headingText={slice.primary.heading}
          paragraphSlot={<PrismicRichText field={slice.primary.text} />}
          mainImageSlot={
            <PrismicNextImage
              field={slice.primary.mainImage}
              fill
              sizes={`100vw`}
              style={{
                objectFit: "cover",
              }}
            />
          }
        />
      )}
    </div>
  );
};

export default HeroHeading;
