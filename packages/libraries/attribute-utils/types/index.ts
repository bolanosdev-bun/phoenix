import {
    FlexType,
    OpacityType,    
    ColorPropertyType
} from "@phoenix_ui/types/attributes";
import { AllMargins, AllPaddings } from "@phoenix_ui/types/spacing";
import { AllWidths, AllHeights } from "@phoenix_ui/types/sizing";
import { TextSizeType, TextAlignmentType } from "@phoenix_ui/types/texts";
import { ResponsiveOverrides, DarkOverrides } from "@phoenix_ui/types/utilities";

export type ActionMap = {
    neutral: ColorPropertyType;
    primary: ColorPropertyType;
    secondary: ColorPropertyType;
    success: ColorPropertyType;
    danger: ColorPropertyType;
    warning: ColorPropertyType;
    info: ColorPropertyType;
    light: ColorPropertyType;
    dark: ColorPropertyType;
  };

  export type ClassByResponsiveProps = {
    size?: TextSizeType;
    width?: AllWidths;
    height?: AllHeights;
    margin?: AllMargins;
    padding?: AllPaddings;
    colors?: ColorPropertyType;
    opacity?: OpacityType;
    align?: TextAlignmentType;
    flex?: FlexType;
    dark?: DarkOverrides;
    overrides?: ResponsiveOverrides | undefined;
  };