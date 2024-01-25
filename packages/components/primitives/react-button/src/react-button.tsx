'use client';
import type React from 'react'
import classnames from 'classnames'
import {
  getTextColorAttribute,
  getBackgroundColorAttribute,
  getActionColorAttribute,
} from '@phoenix_ui/attribute-utils'
import { ReactBaseComponent } from '@phoenix_ui/react-base-component'

import type { ButtonAttributes, ButtonProperties } from '../types/react-button.types'
import './react-button.css'

const Button: React.FC<ButtonProperties> = (properties) => {
  console.log("f: my button")
  const classNames = classnames(
    'button',
    properties.scale ?? 'medium',
    properties.rounded,
    properties?.colors?.text != null &&
      getTextColorAttribute(properties.colors.text),
    properties.colors?.background != null &&
      getBackgroundColorAttribute(properties.colors.background),
    properties.action != null && getActionColorAttribute(properties.action),
    properties.isFullWidth ?? false ? 'w-full' : '',
    properties.className,
  )

  const attributes: ButtonAttributes = {}

  if (properties.disabled ?? false) {
    attributes.disabled = true
  }

  return ReactBaseComponent({
    component: 'button',
    className: classNames,
    attributes,
    properties,
  })
}

Button.displayName = 'Button'
export { Button }
