import * as React from "react";
import { render } from "@testing-library/react";
import NumberInput from "./";

describe("NumberInput", () => {
  it("renders correctly", () => {
    const tree = render(<NumberInput />).container;
    expect(tree).toMatchSnapshot();
  });
});
