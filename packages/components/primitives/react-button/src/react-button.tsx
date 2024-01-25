'use client';
import React from 'react'
import classnames from 'classnames'
import {
  getTextColorAttribute,
  getBackgroundColorAttribute,
  getActionColorAttribute,
} from '@phoenix_ui/attribute-utils'
import { ReactBaseComponent } from '@phoenix_ui/react-base-component'

import type { ButtonAttributes, ButtonProperties } from './react-button.types'
import './react-button.css'

export const Button: React.FC<ButtonProperties> = (properties) => {
  
  const classNames = classnames(
    'button',
    properties.scale ?? 'medium',
    properties.rounded,
    properties?.colors?.text != null &&
      getTextColorAttribute(properties.colors.text),
    properties.colors?.background != null &&
      getBackgroundColorAttribute(properties.colors.background),
    getActionColorAttribute(properties.action || 'primary'),
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
