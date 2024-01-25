import { describe, test, expect } from "bun:test";
import { getClassByViewPort } from "../src/attribute-utils";
import type { ClassByResponsiveProps } from '../types'

describe("react-base-component.props.text-align", () => {
  test(`:text-alignment`, () => {
    const align = "text-left";
    const properties: ClassByResponsiveProps = { align };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(align);
  });
});
