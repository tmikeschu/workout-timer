import * as React from "react";
import { styled } from "theme";
import Button from "atoms/Button";
import { AppMachineContext } from "contexts/machine";
import { createUUID } from "utils";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: space-between;
`;

const Actions: React.FC<{}> = () => {
  const [current, send] = React.useContext(AppMachineContext);
  const addAnnouncement = (): void => {
    const draft = [...current.context.announcementTimes];
    draft.push({ time: 0, interval: false, id: createUUID() });
    send({
      type: "SET_ANNOUNCEMENT_TIMES",
      payload: { announcementTimes: draft }
    });
  };
  const fresh = current.context.initialTime === current.context.currentTime;
  const start = (): void => {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance("Let's go"));
    send("START");
  };

  return (
    <Container>
      <Button disabled={current.matches("running")} onClick={start}>
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
        onClick={addAnnouncement}
        disabled={!fresh || current.matches("running")}
      >
        Add Announcement
      </Button>
    </Container>
  );
};

export default Actions;
