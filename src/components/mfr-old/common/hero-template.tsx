import SectionBrush1 from "@/components/mfr-old/svg/section-brush-1";
import { PrismicNextImage } from "@prismicio/next";
// import SectionBrush2 from "../svg/section-brush-2"
import { PropsWithChildren } from "react";

type Props = {
  background_image: {};
  border_color: "light" | "shaded" | "green" | "red";
  height: "short" | "default" | "tall" | "empty";
  background_color: "light" | "shaded" | "green" | "red" | "muslin";
};

const HeroTemplate = ({
  background_image,
  border_color,
  height,
  background_color,
  children,
}: PropsWithChildren<Props>) => {
  // console.log("background_image", background_image)

  const brushBorderThemes = {
    light: "fill-theme-white",
    shaded: "fill-theme-offWhite",
    green: "fill-theme-primary",
    red: "fill-theme-accent",
  };

  const heightStyles = {
    short: "max-h-[40vh]",
    default: "max-h-[50vh]",
    tall: "max-h-[35vh] md:max-h-[60vh]",
    empty: "max-h-[30vh] md:max-h-[60vh]",
  };
  // const dynamicBrushStyles =
  //   border_color !== undefined
  //     ? brushBorderThemes[border_color]
  //     : "fill-theme-white"

  const sidesBgStyles = {
    light: "bg-white",
    shaded: "bg-themeFill-offWhite",
    green: "bg-primary",
    red: "bg-themeFill-accent",
    muslin: "bg-muslin",
  };

  return (
    <div className={`Hero bgs-[#1e212b] ${sidesBgStyles[background_color]}`}>
      <div className=" max-w-[1600px] mx-auto ">
        <div className="relative bg-primary-500 z-0">
          {/* IMAGE */}
          <div className="absolute inset-0 ">
            <PrismicNextImage
              field={background_image}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                zIndex: 0,
              }}
            />
            {/* OVERLAY */}
            {/* <div className="absolute inset-0  mix-blend-multiply bg-gray-300 z-10" /> */}
            {/* <div className="absolute inset-0  mix-blend-multiply bg-gradient-to-r from-gray-900 via-gray-500 to-transparent sm:from-transparent sm:via-transparent sm:to-transparent z-10"  /> */}
          </div>
          {/* END IMAGE */}
          <div className="max-w-7xl mx-auto ">
            <div className="relative sm:overflow-hidden">
              <div
                className={`relative  text-white ${heightStyles[height]} flex items-center h-screen`}
              >
                <div className="pl-12 4xl:pl-0 pt-12 2xl:pt-0 relative z-30">
                  {children}
                </div>
              </div>
            </div>
          </div>

          <SectionBrush1
            className={`absolute -bottom-20 z-10 ${brushBorderThemes[border_color]}`}
          />
          <div
            className={`bGBar ${sidesBgStyles[border_color]} full-width  absolute left-0 right-0 -bottom-[20px] h-[80px] z-[-1]`}
            //
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroTemplate;
