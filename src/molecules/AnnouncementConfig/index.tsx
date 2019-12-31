import * as React from "react";
import PropTypes, { InferProps } from "prop-types";
import { styled } from "theme";
import { IAnnouncementConfig } from "types";
import { AppMachineContext } from "contexts/machine";

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

  input {
    width: 100%;
    background-color: ${({ theme }): string => theme.background};
    color: ${({ theme }): string => theme.body};
    padding: 0.5rem;
    font-size: 1.5rem;
    border: 2px solid ${({ theme }): string => theme.primary};
  }
`;

const propTypes = {
  config: PropTypes.shape({
    id: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    message: PropTypes.string,
    interval: PropTypes.bool.isRequired
  }).isRequired
};

interface Props extends InferProps<typeof propTypes> {
  config: IAnnouncementConfig;
}

const AnnouncementConfig: React.FC<Props> = ({ config }) => {
  const [current, send] = React.useContext(AppMachineContext);

  const changeNotifications = (id: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const draft = [...current.context.announcementTimes];
    const i = draft.findIndex(config => id === config.id);
    if (i) {
      switch (e.target.type as "checkbox" | "number" | "text") {
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
        type: "SET_ANNOUNCEMENT_TIMES",
        payload: { announcementTimes: draft }
      });
    }
  };

  return (
    <Container>
      <TextInput>
        <label htmlFor={`seconds:${config.id}`}>Seconds</label>
        <input
          disabled={current.matches("running")}
          type="number"
          value={config.time}
          onChange={changeNotifications(config.id)}
        />
      </TextInput>

      <TextInput>
        <label htmlFor={`message:${config.id}`}>Message</label>
        <input
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

AnnouncementConfig.propTypes = propTypes;

export default AnnouncementConfig;