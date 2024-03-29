import { describe, test, expect } from "bun:test";
import type { FlexDirectionType } from "@phoenix_ui/types/attributes";
import { getClassByViewPort } from "../../src/attribute-utils";
import type { ClassByResponsiveProps } from '../../types'


describe("react-base-component.props.override.flex", () => {
  test(`flex:directiion and md:flex:direction`, () => {
    const direction: FlexDirectionType = "flex-row";
    const md_direction: FlexDirectionType = "flex-col";
    const properties: ClassByResponsiveProps = {
      flex: { direction },
      overrides: {
        medium: {
          flex: {
            direction: md_direction,
          },
        },
      },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`${direction} md:${md_direction}`);
  });

  test(`flex:directiion and lg:flex:direction`, () => {
    const direction: FlexDirectionType = "flex-row";
    const lg_direction: FlexDirectionType = "flex-col";
    const properties: ClassByResponsiveProps = {
      flex: { direction },
      overrides: {
        large: {
          flex: {
            direction: lg_direction,
          },
        },
      },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`${direction} lg:${lg_direction}`);
  });

  test(`flex:directiion and (md|lg):flex:direction`, () => {
    const direction: FlexDirectionType = "flex-row";
    const md_direction: FlexDirectionType = "flex-row-reverse";
    const lg_direction: FlexDirectionType = "flex-col";
    const properties: ClassByResponsiveProps = {
      flex: { direction },
      overrides: {
        medium: {
          flex: { direction: md_direction },
        },
        large: {
          flex: { direction: lg_direction },
        },
      },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(
      `${direction} md:${md_direction} lg:${lg_direction}`,
    );
  });
});
