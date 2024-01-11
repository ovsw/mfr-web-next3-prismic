import { Feature1, Feature192 } from "@/devlink";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Feature`.
 */
export type FeatureProps = SliceComponentProps<Content.FeatureSlice>;

/**
 * Component for "Feature" Slices.
 */
const Feature = ({ slice }: FeatureProps): JSX.Element => {
  const defaultImgSizes: string = "(max-width: 767px) 100vw, 50vw";
  const defaultImgStyles: React.CSSProperties = {
    height: "auto",
  };

  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && (
        <Feature1
          eyebrowText={slice.primary.eyebrow_text}
          headingText={slice.primary.heading_text}
          textSlot={<PrismicRichText field={slice.primary.paragraph_text} />}
          imageSlot={
            <PrismicNextImage
              field={slice.primary.main_image}
              // imgixParams={{ sat: -100 }}
              sizes={defaultImgSizes}
              style={defaultImgStyles}
            />
          }
        />
      )}

      {slice.variation === "feature192" && (
        <Feature192
          eyebrowText={slice.primary.eyebrow_text}
          headingText={slice.primary.heading_text}
          textSlot={<PrismicRichText field={slice.primary.paragraph_text} />}
          imageSlot={
            <PrismicNextImage
              field={slice.primary.main_image}
              // imgixParams={{ sat: -100 }}
              sizes={defaultImgSizes}
              style={defaultImgStyles}
            />
          }
        />
      )}
    </div>
  );
};

export default Feature;
