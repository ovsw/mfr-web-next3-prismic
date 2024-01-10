import * as React from "react";
import * as Types from "./types";

declare function Feature1(props: {
  as?: React.ElementType;
  eyebrowText?: React.ReactNode;
  headingText?: React.ReactNode;
  textSlot?: Types.Devlink.Slot;
  buttonGroupSlot?: Types.Devlink.Slot;
  imageSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
