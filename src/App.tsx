import * as React from "react";
import { styled } from "./theme";
import Header from "organisms/Header";
import Actions from "organisms/Actions";
import AnnouncementConfig from "molecules/AnnouncementConfig";
import { AppMachineContext } from "contexts/machine";

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

const App: React.FC<{}> = () => {
  const [current] = React.useContext(AppMachineContext);

  return (
    <Container>
      <Header />
      <Actions />
      <Announcements>
        {current.context.announcementTimes.map(config => (
          <AnnouncementConfig key={config.id} config={config} />
        ))}
      </Announcements>
    </Container>
  );
};

export default App;
