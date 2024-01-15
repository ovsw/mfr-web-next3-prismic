import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Content1.module.css";

export function Content1({
  as: _Component = _Builtin.Block,
  headingText = "Short heading goes here",
  richTextSlot,
  imageSlot,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_content1")}
      tag="section"
    >
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
              className={_utils.cx(_styles, "content1_component")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "content1_content-wrapper")}
                id={_utils.cx(
                  _styles,
                  "w-node-_15173e1d-4153-335a-0a46-04dc48de5dee-48de5de9"
                )}
                tag="div"
              >
                <_Builtin.Heading
                  id={_utils.cx(
                    _styles,
                    "w-node-_15173e1d-4153-335a-0a46-04dc48de5def-48de5de9"
                  )}
                  tag="h2"
                >
                  {headingText}
                </_Builtin.Heading>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-small-2")}
                  tag="div"
                />
                <_Builtin.Block tag="div">
                  {richTextSlot ?? (
                    <_Builtin.RichText
                      className={_utils.cx(_styles, "text-rich-text")}
                      tag="div"
                    >
                      <_Builtin.Paragraph>
                        {
                          "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse."
                        }
                      </_Builtin.Paragraph>
                      <_Builtin.Paragraph>
                        {
                          "Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus."
                        }
                      </_Builtin.Paragraph>
                      <_Builtin.Paragraph>
                        {
                          "Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam."
                        }
                      </_Builtin.Paragraph>
                    </_Builtin.RichText>
                  )}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "content1_image-wrapper")}
                tag="div"
              >
                {imageSlot ?? (
                  <_Builtin.Image
                    className={_utils.cx(_styles, "content1_image")}
                    loading="lazy"
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
