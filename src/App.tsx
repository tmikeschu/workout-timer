import * as React from "react";
import { styled } from "./theme";
import Header from "organisms/Header";
import AnnouncementConfig from "molecules/AnnouncementConfig";
import Button from "atoms/Button";
import { AppMachineContext } from "contexts/machine";
import { createUUID } from "utils";

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

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: space-between;
`;

const Announcements = styled.div`
  padding: 0 1rem;
`;

const App: React.FC<{}> = () => {
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
      <Header />

      <Actions>
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
      </Actions>
      <Announcements>
        {current.context.announcementTimes.map(config => (
          <AnnouncementConfig key={config.id} config={config} />
        ))}
      </Announcements>
    </Container>
  );
};

export default App;
