import * as React from "react";
import { useMachine } from "@xstate/react";
import Machine from "./machine";
import { styled, ThemeSwitch } from "./theme";
import {
  secsToMS,
  speakableTime,
  hoursMinutesSeconds,
  fromHoursMinutesSeconds
} from "./utils";

const Container = styled.div`
  background-color: ${({ theme }): string => theme.background};
  color: ${({ theme }): string => theme.body};
  min-height: 100vh;
  -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */
  width: 100vw;
  max-width: 414px;
  margin: 0 auto;

  &:after {
    width: 100vw;
    height: 100vh;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }): string => theme.body};
    filter: brightness(0.75);
    z-index: -1;
  }
`;

const Header = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  h2 {
    width: 100%;
  }
`;

const Checkbox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  &:last-of-type {
    margin-bottom: 0;
  }

  input {
    transform: scale(2);
  }
`;

const TextInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  &:last-of-type {
    margin-bottom: 0;
  }

  label {
    position: absolute;
    top: -0.8rem;
    left: 1rem;
    background-color: ${({ theme }): string => theme.background};
    padding: 2px;
  }

  input {
    width: 100%;
    background-color: ${({ theme }): string => theme.background};
    color: ${({ theme }): string => theme.body};
    padding: 0.5rem;
    font-size: 1.5rem;
    border: 2px solid ${({ theme }): string => theme.primary};
  }
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
    filter: brightness(1);
    cursor: default;
  }
`;

const Time = styled.h2`
  font-size: 5rem;
  text-align: center;
  margin: 1rem 0;
  display: flex;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: space-between;
`;

const NotificationConfig = styled.div`
  background-color: ${({ theme }): string => theme.background};
  color: ${({ theme }): string => theme.body};
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

  & > div {
    label {
      font-size: 1rem;
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

  const hms = hoursMinutesSeconds(current.context.currentTime);

  const changeHours = (e: React.FocusEvent<HTMLInputElement>): void => {
    const hours = Number(e.target.innerText);
    const time = fromHoursMinutesSeconds([hours, hms[1], hms[2]]);
    send({ type: "SET_TIME", payload: { time } });
  };

  const changeMinutes = (e: React.FocusEvent<HTMLInputElement>): void => {
    const minutes = Number(e.target.innerText);
    const time = fromHoursMinutesSeconds([hms[0], minutes, hms[2]]);
    send({ type: "SET_TIME", payload: { time } });
  };

  const changeSeconds = (e: React.FocusEvent<HTMLInputElement>): void => {
    const seconds = Number(e.target.innerText);
    const time = fromHoursMinutesSeconds([hms[0], hms[1], seconds]);
    send({ type: "SET_TIME", payload: { time } });
  };

  const [hours, minutes, seconds] = hms.map(time =>
    String(time).padStart(2, "0")
  );

  return (
    <Container>
      <Header>
        <h1>Workout Timer</h1>
        <ThemeSwitch />
        <Time>
          <div
            contentEditable={true}
            onBlur={changeHours}
            dangerouslySetInnerHTML={{ __html: hours }}
          />
          :
          <div
            contentEditable={true}
            onBlur={changeMinutes}
            dangerouslySetInnerHTML={{ __html: minutes }}
          />
          :
          <div
            contentEditable={true}
            onBlur={changeSeconds}
            dangerouslySetInnerHTML={{ __html: seconds }}
          />
        </Time>
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
            <TextInput>
              <label htmlFor={`seconds:${i}`}>Seconds</label>
              <input
                disabled={current.matches("running")}
                type="number"
                value={config.time}
                onChange={changeNotifications(i)}
              />
            </TextInput>

            <TextInput>
              <label htmlFor={`message:${i}`}>Message</label>
              <input
                disabled={current.matches("running")}
                placeholder="Woohoo!"
                id={`interval:${i}`}
                type="text"
                value={config.message || ""}
                onChange={changeNotifications(i)}
              />
            </TextInput>

            <Checkbox>
              <label htmlFor={`interval:${i}`}>Interval:</label>
              <input
                disabled={current.matches("running")}
                id={`interval:${i}`}
                type="checkbox"
                checked={config.interval}
                onChange={changeNotifications(i)}
              />
            </Checkbox>
          </NotificationConfig>
        ))}
      </Actions>
    </Container>
  );
};

export default App;
