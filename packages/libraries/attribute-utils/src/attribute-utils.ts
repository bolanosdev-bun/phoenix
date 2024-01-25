import type {
  FlexType,
  TextColorType,
  BackgroundColorType,
  ActionType
} from '@phoenix_ui/types/attributes'

import type { AllWidths, AllHeights } from '@phoenix_ui/types/sizing'

import type { ActionMap, ClassByResponsiveProps } from '../types'

const actions: ActionMap = {
  neutral: {
    text: { color: 'text-white' },
    background: { color: 'bg-slate', weight: '500' }
  },
  primary: {
    text: { color: 'text-white' },
    background: { color: 'bg-blue', weight: '500' }
  },
  secondary: {
    text: { color: 'text-white' },
    background: { color: 'bg-neutral', weight: '500' }
  },
  success: {
    text: { color: 'text-white' },
    background: { color: 'bg-emerald', weight: '500' }
  },
  danger: {
    text: { color: 'text-black' },
    background: { color: 'bg-red', weight: '500' }
  },
  warning: {
    text: { color: 'text-white' },
    background: { color: 'bg-yellow', weight: '500' }
  },
  info: {
    text: { color: 'text-white' },
    background: { color: 'bg-teal', weight: '500' }
  },
  light: {
    text: { color: 'text-black' },
    background: { color: 'bg-white' }
  },
  dark: {
    text: { color: 'text-white' },
    background: { color: 'bg-black' }
  }
}

export const getActionColorAttribute = (action: ActionType): string => {
  const defaultAction = actions[action]
  const textAttribute = getTextColorAttribute(defaultAction.text)
  const backgroundAttribute = getBackgroundColorAttribute(defaultAction.background)

  return `${textAttribute} ${backgroundAttribute}`
}

export const getTextColorAttribute = (
  { color = 'text-white', weight = '400' }: TextColorType |
  undefined = { color: 'text-white', weight: '400' }): string => {
  if (color === 'text-white' || color === 'text-black') return color
  return color + '-' + weight
}

export const getBackgroundColorAttribute = (
  { color = 'bg-slate', weight = '400' }: BackgroundColorType |
  undefined = { color: 'bg-slate', weight: '400' }): string => {
  if (color === 'bg-white' || color === 'bg-black') return color
  return color + '-' + weight
}

export const getResponsiveClassName = (
  parentNames: string[],
  propertyName: string,
  className: string
): string => {
  // eslint-disable-next-line
  if (parentNames.find?.((it) => it === 'medium')) {
    return ` md:${className}`
  }
  // eslint-disable-next-line
  if (parentNames.find?.((it) => it === 'large')) {
    return ` lg:${className}`
  }
  return ` ${className}`
}

export const getDarkClassName = (
  parentNames: string[],
  propertyName: string,
  className: string
): string => {
  if (parentNames.includes('dark') || propertyName === 'dark') {
    return `dark:${className}`
  }
  return `${className}`
}

export const recusiveClassSearch = (
  activeProperty: ClassByResponsiveProps,
  propertyName: string,
  parentNames: string[]
): string => {
  if (activeProperty === undefined) {
    return ''
  }

  if (typeof activeProperty === 'string') {
    return getResponsiveClassName(parentNames, propertyName, activeProperty)
  }

  if ((activeProperty as TextColorType | BackgroundColorType).color !== undefined) {
    const isTextColor = propertyName === 'text'
    const isBackgroundColor = propertyName === 'background'

    if (isTextColor) {
      const colorClass = getTextColorAttribute(activeProperty as TextColorType)
      const darkColorClass = getDarkClassName(
        parentNames,
        propertyName,
        colorClass
      )
      return getResponsiveClassName(parentNames, propertyName, darkColorClass)
    }

    if (isBackgroundColor) {
      const colorClass = getBackgroundColorAttribute(
        activeProperty as BackgroundColorType
      )
      const darkColorClass = getDarkClassName(
        parentNames,
        propertyName,
        colorClass
      )
      return getResponsiveClassName(parentNames, propertyName, darkColorClass)
    }
  }

  if (propertyName === 'width') {
    return getResponsiveClassName(parentNames, propertyName, `w-${(activeProperty as AllWidths).value}`)
  }

  if (propertyName === 'height') {
    return getResponsiveClassName(parentNames, propertyName, `h-${(activeProperty as AllHeights).value}`)
  }

  if ((activeProperty as FlexType).basis !== undefined) {
    const basisClass = `basis-${(activeProperty as FlexType).basis}`
    return getResponsiveClassName(parentNames, propertyName, basisClass)
  }

  let classes = ''
  Object.entries(activeProperty)
    .forEach(([childPropertyName, property]) => {
      classes += recusiveClassSearch(
        activeProperty[childPropertyName] as ClassByResponsiveProps,
        childPropertyName,
        [propertyName, ...parentNames]
      )
    })

  return classes
}

export const getClassByViewPort = (properties: ClassByResponsiveProps): string => {
  let classes = ''

  Object.entries(properties)
    .forEach(([propertyName, property]) => {
      if (property !== undefined) {
        classes += recusiveClassSearch(property as ClassByResponsiveProps, propertyName, [''])
      }
    })

  return classes
}
