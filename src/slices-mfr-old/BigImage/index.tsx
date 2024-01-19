import Section from "@/components/mfr-old/common/section";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import BigImageContent from "@/components/mfr-old/common/BigImageContent";

/**
 * Props for `BigImage`.
 */
export type BigImageProps = SliceComponentProps<Content.BigImageSlice>;

/**
 * Component for "BigImage" Slices.
 */
const BigImage = ({ slice }: BigImageProps): JSX.Element => {
  // type Variation =
  //   | "default"
  //   | "shadedBackground"
  //   | "greenBackground"
  //   | "redBackground"
  //   | "darkBackground";
  // type Background = "light" | "shaded" | "green" | "red" | "dark muslin";

  // const backgroundVariations: Record<Variation, Background> = {
  const backgroundVariations = {
    default: "light",
    bgShaded: "shaded",
    shadedReversed: "shaded",
    greenBackground: "green",
    redBackground: "red",
    darkBackground: "dark muslin",
  };

  const is_reversed = slice.variation.includes("reversed");
  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Section
        //@ts-ignore
        background={backgroundVariations[slice.variation]}
        decoration_top="brushed1"
      >
        {/* {slice.variation} */}

        <BigImageContent
          slice={slice}
          //@ts-ignore
          is_reversed={is_reversed}
        />
      </Section>
    </div>
  );
};

export default BigImage;
