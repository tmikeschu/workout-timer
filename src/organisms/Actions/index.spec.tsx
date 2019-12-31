import React from "react";
import { render } from "@testing-library/react";
import Actions from "./";

describe("Actions", () => {
  it("renders correctly", () => {
    const tree = render(<Actions />).container;
    expect(tree).toMatchSnapshot();
  });
});
