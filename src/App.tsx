import * as React from "react";
import { styled } from "./theme";
import Header from "organisms/Header";
import Actions from "organisms/Actions";
import AnnouncementConfig from "molecules/AnnouncementConfig";
import { AppMachineContext } from "contexts/machine";
import Button from "atoms/Button";
import { version } from "../package.json";

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

const Announcements = styled.div`
  padding: 0 1rem;
`;

const Refresh = styled(Button)`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  background-color: ${({ theme }): string => theme.success};
`;

const Version = styled.p`
  width: 100%;
  text-align: center;
`;

declare let isUpdateAvailable: Promise<boolean>;

const App: React.FC<{}> = () => {
  const [current] = React.useContext(AppMachineContext);
  const [updateAvailable, setUpdateAvailable] = React.useState(false);

  React.useEffect(() => {
    isUpdateAvailable.then(isAvailable => {
      setUpdateAvailable(isAvailable);
    });
  }, []);

  const refresh = (): void => {
    window.location.reload();
  };

  return (
    <Container data-testid="App">
      <Header />
      <Actions />
      <Announcements>
        {current.context.announcementTimes.map(config => (
          <AnnouncementConfig key={config.id} config={config} />
        ))}
      </Announcements>

      {updateAvailable && (
        <Refresh onClick={refresh}>Refresh for update</Refresh>
      )}
      <Version>Version: {version}</Version>
    </Container>
  );
};

export default App;
