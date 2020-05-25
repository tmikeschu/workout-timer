import React from "react";
import { render } from "test";
import Actions from "./";

describe("Actions", () => {
  it("renders correctly", () => {
    const tree = render(<Actions />).container;
    expect(tree).toMatchSnapshot();
  });

  it("shows announcement buttons", () => {
    const tree = render(<Actions />);
    tree.getByTestId("show-more").click();

    expect(tree.container).toMatchSnapshot();
  });
});
