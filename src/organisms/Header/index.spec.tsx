import React from "react";
import { render } from "test";
import Header from "./";

describe("snapshot", () => {
  it("is correct", () => {
    const tree = render(<Header />).container;
    expect(tree).toMatchSnapshot();
  });
});
