import * as React from "react";
import { render } from "react-dom";
import { useMachine } from "@xstate/react";
import Machine from "./machine";
import { ThemeProvider } from "./theme";

const App: React.FC<{}> = () => {
  const [current, send] = useMachine(Machine);

  const changeNotifications = (i: number) => (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const draft = [...current.context.notificationTimes];
    switch (e.target.type) {
      case "checkbox": {
        draft[i].interval = e.target.checked;
        break;
      }
      case "number": {
        draft[i].time = Number(e.target.value);
        break;
      }
    }
    send({
      type: "SET_NOTIFICATION_TIMES",
      payload: { notificationTimes: draft }
    });
  };

  const addNotification = (): void => {
    const draft = [...current.context.notificationTimes];
    draft.push({ time: 0, interval: false });
    send({
      type: "SET_NOTIFICATION_TIMES",
      payload: { notificationTimes: draft }
    });
  };

  return (
    <div>
      <h2>{current.context.currentTime}</h2>
      {current.matches("running") ? (
        <button
          onClick={(): void => {
            send("STOP");
          }}
        >
          Stop
        </button>
      ) : (
        <div>
          <button
            onClick={(): void => {
              send("START");
            }}
          >
            Start
          </button>
          <button
            onClick={(): void => {
              send("RESET");
            }}
          >
            Reset
          </button>
        </div>
      )}
      <button onClick={addNotification} disabled={current.matches("running")}>
        Add Notification
      </button>
      {current.context.notificationTimes.map((config, i) => (
        <div key={`${i}`}>
          <input
            disabled={current.matches("running")}
            type="number"
            value={config.time}
            onChange={changeNotifications(i)}
          />
          <label htmlFor={`interval:${i}`}>Interval</label>
          <input
            disabled={current.matches("running")}
            id={`interval:${i}`}
            type="checkbox"
            checked={config.interval}
            onChange={changeNotifications(i)}
          />
        </div>
      ))}
    </div>
  );
};

const rootElement = document.getElementById("root");
render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  rootElement
);
