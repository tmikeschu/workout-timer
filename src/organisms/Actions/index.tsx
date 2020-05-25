import * as React from "react";
import { styled } from "theme";
import Button from "atoms/Button";
import { useAppMachine } from "contexts/machine";
import { createUUID, etv } from "utils";
import TextInput from "atoms/TextInput";
import { IAnnouncementConfig } from "types";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: space-between;
`;

const ConfigOptions = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;

  li {
    text-align: center;
    font-size: 1.5rem;
    text-decoration: underline;
    cursor: pointer;
    margin: 1rem auto;
  }
`;

const ShowMore = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.primaryAlt};
  text-decoration: underline;
  cursor: pointer;
  margin: 1rem auto;
`;

const Actions: React.FC = () => {
  const [current, send] = useAppMachine();
  const [configName, setConfigName] = React.useState("");
  const [showSaveConfig, setShowSaveConfig] = React.useState(false);
  const addAnnouncement = (): void => {
    const draft = [...current.context.announcementTimes];
    draft.push({ time: 0, interval: false, id: createUUID() });
    send({
      type: "SET_ANNOUNCEMENT_TIMES",
      payload: { announcementTimes: draft },
    });
  };
  const fresh = current.context.initialTime === current.context.currentTime;

  const saveAnnouncements = (): void => {
    const configs = JSON.parse(localStorage.getItem("timerConfigs") || "{}");
    const config = JSON.stringify({
      ...configs,
      [configName]: current.context.announcementTimes,
    });
    localStorage.setItem("timerConfigs", config);
    setShowSaveConfig(false);
  };

  const [showLoadConfig, setShowLoadConfig] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);

  return (
    <Container>
      <Button
        disabled={current.matches("running")}
        onClick={() => send("START")}
      >
        Start
      </Button>
      <Button
        disabled={!current.matches("running")}
        onClick={() => send("STOP")}
      >
        Stop
      </Button>

      <Button
        disabled={fresh || current.matches("running")}
        onClick={() => send("RESET")}
      >
        Reset
      </Button>

      <ShowMore
        role="button"
        onClick={() => setShowMore((b) => !b)}
        data-testid="show-more"
      >
        {showMore ? "Hide" : "More"}
      </ShowMore>

      {showMore ? (
        <div>
          <Button
            data-testid="Actions__addAnnouncement"
            onClick={addAnnouncement}
            disabled={!fresh || current.matches("running")}
          >
            Add announcement
          </Button>

          <Button
            onClick={() => setShowSaveConfig(true)}
            disabled={current.context.announcementTimes.length === 0}
          >
            Save announcements
          </Button>

          <Button
            onClick={() => setShowLoadConfig((b) => !b)}
            disabled={(() => {
              try {
                return (
                  Object.keys(
                    JSON.parse(localStorage.getItem("timerConfigs") || "{}")
                  ).length === 0
                );
              } catch (_) {
                return true;
              }
            })()}
          >
            Load announcements
          </Button>

          <Button
            onClick={() =>
              send({
                type: "SET_ANNOUNCEMENT_TIMES",
                payload: {
                  announcementTimes: [],
                },
              })
            }
            disabled={current.context.announcementTimes.length === 0}
          >
            Clear announcements
          </Button>

          {showLoadConfig ? (
            <ConfigOptions>
              {Object.entries(
                JSON.parse(localStorage.getItem("timerConfigs") || "{}")
              ).map(([key, value]) => (
                <li
                  key={key}
                  role="button"
                  onClick={() => {
                    send({
                      type: "SET_ANNOUNCEMENT_TIMES",
                      payload: {
                        announcementTimes: value as IAnnouncementConfig[],
                      },
                    });
                    setShowLoadConfig(false);
                  }}
                >
                  {key}
                </li>
              ))}
            </ConfigOptions>
          ) : null}

          {showSaveConfig ? (
            <>
              <TextInput value={configName} onChange={etv(setConfigName)} />
              <div>
                <Button
                  onClick={saveAnnouncements}
                  disabled={current.context.announcementTimes.length === 0}
                >
                  Save
                </Button>
                <Button onClick={() => setShowSaveConfig(false)}>Cancel</Button>
              </div>
            </>
          ) : null}
        </div>
      ) : null}
    </Container>
  );
};

export default Actions;
