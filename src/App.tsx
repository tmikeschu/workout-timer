import * as React from "react";
import { useMachine } from "@xstate/react";
import Machine from "./machine";
import { styled } from "./theme";
import { secsToMS, formatTime, speakableTime } from "./utils";

const Header = styled.div`
  padding: 1rem;
`;

const Button = styled.button`
  background-color: ${({ theme }): string => theme.primary};
  color: ${({ theme }): string => theme.primaryAlt};
  border: none;
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 414px;

  &:first-of-type {
    margin-left: 0;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover,
  &:focus {
    filter: brightness(0.75);
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const Time = styled.h2`
  font-size: 3rem;
  text-align: center;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: space-between;
`;

const NotificationConfig = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 1.5rem;
  width: 100%;
  max-width: 414px;
  margin-bottom: 1rem;
  overflow: hidden;
  &:last-of-type {
    margin-bottom: 0;
  }

  label {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    input {
      font-size: 1.5rem;
      flex: 1;
    }
  }
`;

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
  const fresh = current.context.initialTime === current.context.currentTime;

  return (
    <div>
      <Header>
        <h1>Workout Timer</h1>
        <Time>{formatTime(current.context.currentTime)}</Time>
      </Header>

      <Actions>
        <Button
          disabled={current.matches("running")}
          onClick={(): void => {
            send("START");
          }}
        >
          Start
        </Button>
        <Button
          disabled={!current.matches("running")}
          onClick={(): void => {
            send("STOP");
          }}
        >
          Stop
        </Button>

        <Button
          disabled={fresh || current.matches("running")}
          onClick={(): void => {
            send("RESET");
          }}
        >
          Reset
        </Button>
        <Button
          onClick={addNotification}
          disabled={!fresh || current.matches("running")}
        >
          Add Notification
        </Button>
        {current.context.notificationTimes.map((config, i) => (
          <NotificationConfig key={`${i}`}>
            <label htmlFor={`seconds:${i}`}>
              Seconds:{" "}
              <input
                disabled={current.matches("running")}
                type="number"
                value={config.time}
                onChange={changeNotifications(i)}
              />
            </label>
            <label htmlFor={`interval:${i}`}>
              Interval:{" "}
              <input
                disabled={current.matches("running")}
                id={`interval:${i}`}
                type="checkbox"
                checked={config.interval}
                onChange={changeNotifications(i)}
              />
            </label>
            <label htmlFor={`message:${i}`}>
              Message:{" "}
              <input
                disabled={current.matches("running")}
                id={`interval:${i}`}
                type="text"
                value={config.message || ""}
                onChange={changeNotifications(i)}
              />
            </label>
          </NotificationConfig>
        ))}
      </Actions>
    </div>
  );
};

export default App;
