
import { DATA_TEST_ID } from "@phoenix_ui/constants";
import { getClassByViewPort } from '@phoenix_ui/attribute-utils'
import type { ReactBaseComponentAttributes, ReactBaseComponentProperties } from "../react-base-component.types";

export const getProperties = (properties: ReactBaseComponentProperties) => {
  let {
    id,
    size,
    width,
    height,
    margin,
    padding,
    flex,
    dark,
    overrides,
    className,
    dataTestId,
    onClick,
  } = properties;
  let attributes: ReactBaseComponentAttributes = {};
  className += getClassByViewPort({
    size,
    width,
    height,
    margin,
    padding,
    flex,
    dark,
    overrides,
  });

  if (onClick) {
    attributes.onClick = onClick;
  }

  if (id !== "") {
    attributes.id = id;
  }

  if (className !== "") {
    attributes.className = className;
  }

  if (dataTestId !== "") {
    attributes[DATA_TEST_ID] = dataTestId;
  }

  return attributes;
};
