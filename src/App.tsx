import * as React from "react";

import Button from "atoms/Button";
import { useAppMachine } from "contexts/machine";
import AnnouncementConfig from "molecules/AnnouncementConfig";
import Actions from "organisms/Actions";
import Header from "organisms/Header";

import { version } from "../package.json";

import * as serviceWorker from "./serviceWorker";
import { styled } from "./theme";

const Container = styled.div`
  background-color: ${({ theme }): string => theme.background};
  color: ${({ theme }): string => theme.body};
  min-height: 100vh;
  -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */
  width: 100vw;
  max-width: 414px;
  margin: 0 auto;
  padding-bottom: 1rem;

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

const Announcements = styled.div`
  padding: 0 1rem;
`;

const Refresh = styled(Button)`
  position: absolute;
  bottom: 1rem;
  background-color: ${({ theme }): string => theme.success};
`;

const Version = styled.p`
  width: 100%;
  text-align: center;
`;

const App: React.FC = () => {
  const [current] = useAppMachine();
  const [updateAvailable, setUpdateAvailable] = React.useState(false);
  const [
    waitingWorker,
    setWaitingWorker,
  ] = React.useState<ServiceWorker | null>(null);

  const onSWUpdate = (registration: ServiceWorkerRegistration): void => {
    setUpdateAvailable(true);
    setWaitingWorker(registration.waiting);
  };

  React.useEffect(() => {
    serviceWorker.register({ onUpdate: onSWUpdate });
  }, []);

  const reload = (): void => {
    waitingWorker?.postMessage({ type: "SKIP_WAITING" });
    setUpdateAvailable(false);
    window.location.reload(true);
  };

  return (
    <Container data-testid="App">
      <Header />
      <Actions />
      <Announcements>
        {current.context.announcementTimes.map((config) => (
          <AnnouncementConfig key={config.id} config={config} />
        ))}
      </Announcements>

      <Refresh
        id="updateVersionButton"
        onClick={reload}
        hidden={!updateAvailable}
      >
        Refresh for update
      </Refresh>
      <Version>Version: {version}</Version>
    </Container>
  );
};

export default App;
