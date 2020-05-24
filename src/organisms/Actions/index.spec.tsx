import React from "react";
import { render } from "test";
import Actions from "./";

describe("Actions", () => {
  it("renders correctly", () => {
    const tree = render(<Actions />).container;
    expect(tree).toMatchSnapshot();
  });
});
