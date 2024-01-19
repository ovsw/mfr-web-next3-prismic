// a two column row with a big image on one side

// *********************************
// bloks: "content"
// asset: "image"
// bool: "is_reversed"

import * as React from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

// lightbox stuff
import { PrismicNextImage } from "@prismicio/next";

type Props = {
  slice: Content.BigImageSlice;
  bgValue?: "light" | "dark";
  is_reversed?: boolean;
  extra_padding?: boolean;
  badge_image?: boolean;
};

const Row = ({
  slice,
  bgValue = "dark",
  is_reversed = false,
  extra_padding = false,
  badge_image = false,
}: Props) => {
  const alternateContentWrapperStyles = is_reversed
    ? "lg:ml-auto lg:mr-0"
    : "lg:mr-auto lg:ml-0";
  const alternateContentColumnStyles = is_reversed
    ? "lg:col-start-2 lg:pl-8"
    : "lg:pr-8";

  const alternateImageStyles = is_reversed ? "lg:left-0" : "lg:right-0";

  const paddingStyles = extra_padding
    ? "sm:pt-12 pb-14 px-4 sm:pt-14 sm:px-6"
    : "px-5";

  return (
    <div className="relative">
      {/* CONTENT */}
      <div
        className={`relative 
      ${paddingStyles}
      lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2 min-h-[400px]`}
      >
        <div className={`${alternateContentColumnStyles}`}>
          <div
            className={`text-base max-w-prose mx-auto lg:max-w-lg ${alternateContentWrapperStyles} space-y-12`}
          >
            <h2>
              {slice.primary.eyebrow && (
                <span className={`eyebrow leading-none inline-block -ml-px`}>
                  {slice.primary.eyebrow}
                </span>
              )}
              {""}
              <span className="block sm:mb-10  md:pt-0 md:mb-10  text-[46px] leading-none md:text-[61px] font-bold text-theme-primary">
                {slice.primary.heading}
              </span>
            </h2>
            <PrismicRichText field={slice.primary.rich_text} />
          </div>
        </div>
      </div>
      {/* END CONTENT */}

      {/* IMAGE */}
      <div
        className={` ${
          !badge_image && "pt-20"
        } lg:pt-0 lg:absolute  lg:top-0 h-full ${alternateImageStyles} lg:w-1/2 `}
      >
        <PrismicNextImage
          className="rounded-2xl"
          field={slice.primary.image}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      {/* END IMAGE */}
    </div>
  );
};

export default Row;
