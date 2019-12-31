import React from "react";
import { render } from "@testing-library/react";
import Button from "./";

describe("Button", () => {
  it("has correct snapshot", () => {
    const tree = render(<Button />).container;
    expect(tree).toMatchSnapshot();
  });
});
