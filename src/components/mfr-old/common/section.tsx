// the main root blok component: section
// it accepts only row bloks as children

// *****************************
// - background: String (single option)
// - width: String (single option)
// - content: Bloks

import * as React from "react";
import { PropsWithChildren } from "react";

// SVGs
import SectionBrush1 from "../svg/section-brush-menu";
import SectionBrush2 from "../svg/section-brush-2";
import SectionBrush2b from "../svg/section-brush-2b";

type Props = {
  width?: "default" | "full" | "narrow";
  background?: "light" | "shaded" | "green" | "red" | "dark muslin";
  decoration_top?: "none" | "brushed1" | "brushed2";
  padding_top?: "default" | "none" | "large" | "small";
  margin_top?: "default" | "none" | "large" | "overlapping";
  decoration_bottom?: "none" | "brushed1" | "brushed2";
  padding_bottom?: "default" | "none" | "large" | "small";
  margin_bottom?: "default" | "none" | "large" | "overlapping";
  overflow_hidden?: boolean;
};

const Section = ({
  width = "default",
  background = "light",
  decoration_top = "none",
  decoration_bottom = "none",
  margin_top = "default",
  padding_top = "default",
  margin_bottom = "default",
  padding_bottom = "default",
  overflow_hidden = true,
  children,
}: PropsWithChildren<Props>) => {
  // main styles
  const bgStyles = {
    light: "bg-themeFill-white",
    shaded: "bg-themeFill-offWhite",
    green: "bg-themeFill-primary",
    red: "bg-themeFill-accent",
    "dark muslin": "bg-muslin",
  };

  const contentWidthStyles = {
    default: "max-w-7xl mx-auto max-w space-y-10",
    full: "",
    narrow: "max-w-5xl mx-auto max-w space-y-10",
  };
  const emptyComponent = () => <></>;

  const brushedSVGsTop = {
    none: emptyComponent,
    brushed1: SectionBrush1,
    brushed2: SectionBrush2,
  };
  const brushedSVGsBottom = {
    none: emptyComponent,
    brushed1: SectionBrush1,
    brushed2: SectionBrush2b,
  };

  // top styles
  const topMarginStyles = {
    default: "mt-10 sm:mt-20",
    none: "",
    large: "mt-10 sm:mt-36",
    overlapping: "-mt-32",
  };
  const topPaddingStyles = {
    default: "pt-10 sm:pt-20",
    none: "",
    large: "pt-10 sm:pt-36",
    small: "pt-4 md:pt-2",
  };

  // bottom styles
  const bottomMarginStyles = {
    default: "mb-10 sm:mb-20",
    none: "",
    large: "mb-36",
    overlapping: "-mb-20",
  };
  const bottomPaddingStyles = {
    default: "pb-10 sm:pb-20",
    none: "",
    large: "pb-20 sm:pb-36",
    larger: "pb-56",
    small: "pb-14 lg:pb-10",
  };

  // const dynamicBrushStyles =
  //   border_color !== undefined
  //     ? brushBorderThemes[border_color]
  //     : "fill-theme-white"

  const topDecorationSpacing = {
    default: "",
    brushed1: "mt-28",
    brushed2: "mt-24",
  };
  const decorationFillColor = {
    light: "fill-theme-white",
    shaded: "fill-theme-offWhite",
    green: "fill-theme-primary",
    red: "fill-theme-accent",
    "dark muslin": "fill-theme-muslin",
  };

  return (
    <section
      className={`SECTION px-4 lg:px-8 2xl:px-0 
        ${overflow_hidden ? "overflow-hidden" : ""}
        ${bgStyles[background]} 
        ${topMarginStyles[margin_top]} 
        ${bottomMarginStyles[margin_bottom]} relative`}
    >
      {brushedSVGsTop[decoration_top] !== undefined &&
        React.createElement(brushedSVGsTop[decoration_top], {
          className: `z-30 ${decorationFillColor[background]}`,
        })}
      <div
        className={`${topPaddingStyles[padding_top]} ${bottomPaddingStyles[padding_bottom]}`}
      >
        <div className={`${contentWidthStyles[width]} relative`}>
          {children}
        </div>
      </div>
      {brushedSVGsBottom[decoration_bottom] !== undefined &&
        React.createElement(brushedSVGsBottom[decoration_bottom], {
          className: `z-30 ${decorationFillColor[background]}`,
        })}
    </section>
  );
};

export default Section;
