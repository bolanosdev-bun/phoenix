import { describe, test, expect } from "bun:test";
import { getClassByViewPort } from "../src/attribute-utils";
import type { ClassByResponsiveProps } from '../types'

describe("react-base-component.props.opacity", () => {
  test(`:opacity-value`, () => {
    const opacity = "opacity-100";
    const properties: ClassByResponsiveProps = { opacity };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(opacity);
  });
});
