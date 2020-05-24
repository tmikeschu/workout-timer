import * as React from "react";
import { styled } from "theme";
import { IAnnouncementConfig } from "types";
import { AppMachineContext } from "contexts/machine";
import NumberInput from "atoms/NumberInput";

const Container = styled.div`
  background-color: ${({ theme }): string => theme.background};
  color: ${({ theme }): string => theme.body};
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.25);
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
    top: -0.625rem;
    left: 1rem;
    background-color: ${({ theme }): string => theme.background};
    padding: 0 0.25rem;
  }

  input,
  select {
    width: 100%;
    background-color: ${({ theme }): string => theme.background};
    color: ${({ theme }): string => theme.body};
    padding: 0.5rem;
    font-size: 1.5rem;
    border: 2px solid ${({ theme }): string => theme.primary};
  }
`;

interface Props {
  config: IAnnouncementConfig;
}

const AnnouncementConfig: React.FC<Props> = ({ config }) => {
  const [current, send] = React.useContext(AppMachineContext);

  const changeNotifications = (id: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const draft = [...current.context.announcementTimes];
    const i = draft.findIndex((config) => id === config.id);
    if (i != null) {
      switch (e.target.type as "checkbox" | "number" | "text") {
        case "checkbox": {
          draft[i].interval = e.target.checked;
          break;
        }
        case "text": {
          draft[i].message = e.target.value;
          break;
        }
      }
      send({
        type: "SET_ANNOUNCEMENT_TIMES",
        payload: { announcementTimes: draft },
      });
    }
  };

  const selectNumber = (id: string) => (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const draft = [...current.context.announcementTimes];
    const i = draft.findIndex((config) => id === config.id);
    draft[i].time = Number(e.target.value);
    send({
      type: "SET_ANNOUNCEMENT_TIMES",
      payload: { announcementTimes: draft },
    });
  };

  return (
    <Container data-testid="AnnouncementConfig">
      <TextInput>
        <label htmlFor={`seconds:${config.id}`}>Seconds</label>
        <NumberInput
          data-testid="AnnouncementConfig__time"
          disabled={current.matches("running")}
          value={config.time}
          onChange={selectNumber(config.id)}
          range={[1, 60]}
        />
      </TextInput>

      <TextInput>
        <label htmlFor={`message:${config.id}`}>Message</label>
        <input
          data-testid="AnnouncementConfig__message"
          disabled={current.matches("running")}
          placeholder="Woohoo!"
          id={`interval:${config.id}`}
          type="text"
          value={config.message || ""}
          onChange={changeNotifications(config.id)}
        />
      </TextInput>

      <Checkbox>
        <label htmlFor={`interval:${config.id}`}>Interval:</label>
        <input
          data-testid="AnnouncementConfig__interval"
          disabled={current.matches("running")}
          id={`interval:${config.id}`}
          type="checkbox"
          checked={Boolean(config.interval)}
          onChange={changeNotifications(config.id)}
        />
      </Checkbox>
    </Container>
  );
};

export default AnnouncementConfig;
