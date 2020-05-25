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

  it("shows save options", () => {
    const tree = render(<Actions />);
    tree.getByTestId("show-more").click();
    tree.getByTestId("add-announcement").click();
    tree.getByTestId("save-announcements").click();

    expect(tree.container).toMatchSnapshot();
  });

  it("shows load options", () => {
    const tree = render(
      <Actions />,
      {},
      {
        localStorage: {
          "@timerConfigs": JSON.stringify({
            nice: {
              time: 1000,
              announcements: [
                {
                  message: "hello",
                  id: "aoeu",
                  time: 1,
                  interval: false,
                },
              ],
            },
          }),
        },
      }
    );
    tree.getByTestId("show-more").click();
    tree.getByTestId("load-announcements").click();

    expect(tree.container).toMatchSnapshot();
  });
});
