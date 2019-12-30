import React from "react";
import { render } from "@testing-library/react";
import Header from "./";

describe("snapshot", () => {
  it("is correct", () => {
    const tree = render(<Header />);
    expect(tree).toMatchSnapshot();
  });
});
