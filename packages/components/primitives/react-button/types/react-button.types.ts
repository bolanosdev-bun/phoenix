import type {
  ScaleType,
  RoundingType,
  ActionType,
} from '@phoenix_ui/types/attributes'

import type {
  ReactBaseComponentProperties,
  ReactBaseComponentAttributes,
} from '@phoenix_ui/react-base-component/types'

export interface ButtonAttributes extends ReactBaseComponentAttributes {
  disabled?: boolean
}

export interface ButtonProperties extends ReactBaseComponentProperties {
  action?: ActionType
  scale?: ScaleType
  rounded?: RoundingType
  isFullWidth?: boolean
  disabled?: boolean
}
