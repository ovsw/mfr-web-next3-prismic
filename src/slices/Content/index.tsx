import { Content1 } from "@/devlink";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { linkResolver } from "@/lib/linkResolver";
import NextLink from "next/link";
import { PrismicLink } from "@prismicio/react";

/**
 * Props for `Content`.
 */
export type ContentProps = SliceComponentProps<Content.ContentSlice>;

/**
 * Component for "Content" Slices.
 */
const Content = ({ slice }: ContentProps): JSX.Element => {
  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Content1
        headingText={slice.primary.heading}
        richTextSlot={
          <PrismicRichText
            field={slice.primary.rich_text}
            // linkResolver={linkResolver}
            components={{
              hyperlink: ({ children, text, node, type, key }) => (
                <>
                  <PrismicNextLink
                    field={node.data}
                    className="text-blue-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    a1 {children} - {JSON.stringify(node)}
                  </PrismicNextLink>
                </>
              ),
            }}
          />
        }
      />
    </div>
  );
};

export default Content;
