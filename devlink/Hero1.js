import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Hero1.module.css";

export function Hero1({
  as: _Component = _Builtin.Block,
  heading1Text = "Medium length hero heading goes here",
  textSlot1,
  mainImage = "https://uploads-ssl.webflow.com/65916926ab58e12a95c6371c/65916926ab58e12a95c6376f_placeholder-image.svg",
  mainImageSlot,
  buttonGroupSlot,
}) {
  return (
    <_Component className={_utils.cx(_styles, "section_header1")} tag="header">
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-section-large")}
            tag="div"
          >
            <_Builtin.Grid
              className={_utils.cx(_styles, "header1_component")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "header1_content")}
                tag="div"
              >
                <_Builtin.Heading tag="h1">{heading1Text}</_Builtin.Heading>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-small")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-size-medium")}
                  tag="div"
                >
                  {textSlot1 ?? (
                    <_Builtin.Paragraph>
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                      }
                    </_Builtin.Paragraph>
                  )}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-medium")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "button-group")}
                  tag="div"
                >
                  {buttonGroupSlot ?? (
                    <>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "button")}
                        button={true}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Button"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "button", "is-secondary")}
                        button={true}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Button"}
                      </_Builtin.Link>
                    </>
                  )}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "header1_image-wrapper")}
                tag="div"
              >
                {mainImageSlot ?? (
                  <_Builtin.Image
                    className={_utils.cx(_styles, "header1_image")}
                    loading="eager"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/65916926ab58e12a95c6371c/65916926ab58e12a95c6376f_placeholder-image.svg"
                  />
                )}
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
