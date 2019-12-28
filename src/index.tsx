import * as React from "react";
import { render } from "react-dom";
import { useMachine } from "@xstate/react";
import Machine from "./machine";
import { ThemeProvider } from "./theme";
import { secsToMS, formatTime, speakableTime } from "./utils";

const App: React.FC<{}> = () => {
  const [current, send] = useMachine(Machine, {
    services: {
      plantNotifications: context => (): (() => void) => {
        const startedAt = new Date().getTime();
        const getTime = (): number => {
          const now = new Date().getTime();
          // HACK not sure why but without the - 1000 the announcement occurs at
          // the right time but announces a second less than the desired time
          return context.initialTime - (now - startedAt - 1000);
        };

        const timeouts = context.notificationTimes.map(config => {
          const timingFn = config.interval ? setInterval : setTimeout;
          const id = timingFn(() => {
            const speakable = new SpeechSynthesisUtterance(
              config.message || speakableTime(getTime())
            );
            window.speechSynthesis.speak(speakable);
          }, secsToMS(config.time));
          return { ...config, id };
        });

        return (): void => {
          timeouts.forEach(config => {
            const clearTimingFn = config.interval
              ? clearInterval
              : clearTimeout;
            clearTimingFn(config.id);
          });
        };
      }
    }
  });

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
      case "text": {
        draft[i].message = e.target.value;
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
      <h2>{formatTime(current.context.currentTime)}</h2>
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

          <label htmlFor={`message:${i}`}>Message</label>
          <input
            disabled={current.matches("running")}
            id={`interval:${i}`}
            type="text"
            value={config.message || ""}
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
