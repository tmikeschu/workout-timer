import * as React from "react";
import { styled, ThemeSwitch } from "theme";
import { toHoursMinutesSeconds, fromHoursMinutesSeconds } from "utils";
import { AppMachineContext } from "contexts/machine";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  h2 {
    width: 100%;
  }
`;

const Time = styled.h2`
  font-size: 5rem;
  text-align: center;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
`;

const Header: React.FC<{}> = () => {
  const [current, send] = React.useContext(AppMachineContext);

  const hms = toHoursMinutesSeconds(current.context.currentTime);

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
    </Container>
  );
};

export default Header;
