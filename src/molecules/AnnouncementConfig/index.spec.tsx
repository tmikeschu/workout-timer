import React from "react";
import { render } from "test";
import AnnouncementConfig from "./";

describe("snapshot", () => {
  it("is correct", () => {
    const tree = render(
      <AnnouncementConfig
        config={{ id: "aoeu1234", time: 6000, message: "", interval: false }}
      />
    ).container;
    expect(tree).toMatchSnapshot();
  });
});
