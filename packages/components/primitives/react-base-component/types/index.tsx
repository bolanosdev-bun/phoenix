import { SyntheticEvent } from "react";

import type { TextSizeType } from "@phoenix_ui/types/texts";
import type { AllMargins, AllPaddings } from "@phoenix_ui/types/spacing";
import type { AllHeights, AllWidths } from "@phoenix_ui/types/sizing";
import type { ResponsiveOverrides, DarkOverrides } from "@phoenix_ui/types/utilities";
import type { FlexType, ColorPropertyType, OpacityType } from "@phoenix_ui/types/attributes";
import { DATA_TEST_ID } from "@phoenix_ui/constants";

export interface ReactBaseComponentAttributes {
  className?: string;
  onClick?: (event: SyntheticEvent) => void;
  id?: string;
  [DATA_TEST_ID]?: string;
}

export interface ReactBaseComponentProperties {
  id?: string;
  dataTestId?: string;

  children?: React.ReactNode;
  className?: string;

  size?: TextSizeType;
  colors?: ColorPropertyType;
  opacity?: OpacityType;

  width?: AllWidths;
  height?: AllHeights;
  margin?: AllMargins;
  padding?: AllPaddings;

  flex?: FlexType;
  dark?: DarkOverrides;
  overrides?: ResponsiveOverrides;
  onClick?: (event: SyntheticEvent) => void;
}
