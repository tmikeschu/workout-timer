import * as React from "react";

import Button from "atoms/Button";
import TextInput from "atoms/TextInput";
import { useAppMachine } from "contexts/machine";
import { styled } from "theme";
import { IAnnouncementConfig } from "types";
import { createUUID, etv } from "utils";

const LOCAL_STORAGE_KEY = "@timerConfigs";
type SavedConfig = {
  time: number;
  announcements: IAnnouncementConfig[];
};

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
  margin-top: 0;

  li {
    text-align: center;
    font-size: 1.5rem;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 1rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const ShowMore = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.body};
  text-decoration: underline;
  cursor: pointer;
  margin: 1rem auto;
`;

const SaveConfig = styled.div`
  > button {
    width: calc(50% - 0.5rem);
    margin-right: 1rem;
    margin-top: 1rem;
    background-color: ${({ theme }) => theme.success};

    &:last-of-type {
      margin-right: 0rem;
      background-color: ${({ theme }) => theme.primaryAlt};
      color: ${({ theme }) => theme.background};
    }
  }
`;

const Actions: React.FC = () => {
  const [current, send] = useAppMachine();
  const [configName, setConfigName] = React.useState("");
  const [showSaveConfig, setShowSaveConfig] = React.useState(false);
  const [showLoadConfig, setShowLoadConfig] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);

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
    const configs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "{}");
    const config = {
      ...configs,
      [configName]: {
        announcements: current.context.announcementTimes,
        time: current.context.initialTime,
      },
    } as Record<string, SavedConfig>;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(config));
    setShowSaveConfig(false);
  };

  const savedConfigs: Record<string, SavedConfig> = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY) || "{}"
  );

  return (
    <Container>
      <Button
        disabled={current.matches("running")}
        onClick={() => send("START")}
      >
        {fresh ? "Start" : "Resume"}
      </Button>
      <Button
        disabled={!current.matches("running")}
        onClick={() => send("STOP")}
      >
        Pause
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
            data-testid="add-announcement"
            onClick={addAnnouncement}
            disabled={!fresh || current.matches("running")}
          >
            Add announcement
          </Button>

          <Button
            onClick={() => setShowSaveConfig(true)}
            disabled={current.context.announcementTimes.length === 0}
            data-testid="save-announcements"
          >
            Save announcements
          </Button>

          {showSaveConfig ? (
            <SaveConfig>
              <TextInput value={configName} onChange={etv(setConfigName)} />
              <Button onClick={saveAnnouncements} disabled={configName === ""}>
                Save
              </Button>
              <Button onClick={() => setShowSaveConfig(false)}>Cancel</Button>
            </SaveConfig>
          ) : null}

          <Button
            data-testid="load-announcements"
            onClick={() => setShowLoadConfig((b) => !b)}
            disabled={(() => {
              try {
                return Object.keys(savedConfigs).length === 0;
              } catch (_) {
                return true;
              }
            })()}
          >
            Load announcements
          </Button>

          {showLoadConfig ? (
            <ConfigOptions>
              {Object.entries(savedConfigs).map(
                ([key, value]: [string, SavedConfig]) => (
                  <li
                    key={key}
                    role="button"
                    onClick={() => {
                      send({
                        type: "SET_ANNOUNCEMENT_TIMES",
                        payload: {
                          announcementTimes: value.announcements,
                        },
                      });
                      send({
                        type: "SET_TIME",
                        payload: {
                          time: value.time,
                        },
                      });
                      setShowLoadConfig(false);
                      setConfigName(key);
                    }}
                  >
                    {key}
                  </li>
                )
              )}
            </ConfigOptions>
          ) : null}

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
        </div>
      ) : null}
    </Container>
  );
};

export default Actions;
