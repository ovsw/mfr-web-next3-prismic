import { components as defaultComponents } from "@/slices";
import { components as mfrOldComponents } from "@/slices-mfr-old";

export const components = {
  ...defaultComponents,
  ...mfrOldComponents,
};
