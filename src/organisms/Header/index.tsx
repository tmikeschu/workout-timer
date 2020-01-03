import * as React from "react";
import { styled, ThemeSwitch } from "theme";
import { toHoursMinutesSeconds, fromHoursMinutesSeconds } from "utils";
import { AppMachineContext } from "contexts/machine";
import NumberInput from "atoms/NumberInput";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Time = styled.div`
  width: 100%;
  font-size: 4rem;
  text-align: center;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  & > input {
    max-width: 25%;
  }
`;

const Header: React.FC<{}> = () => {
  const [current, send] = React.useContext(AppMachineContext);

  const hms = toHoursMinutesSeconds(current.context.currentTime);

  const changeHours = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const hours = Number(e.target.value);
    const time = fromHoursMinutesSeconds([hours, hms[1], hms[2]]);
    send({ type: "SET_TIME", payload: { time } });
  };

  const changeMinutes = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const minutes = Number(e.target.value);
    const time = fromHoursMinutesSeconds([hms[0], minutes, hms[2]]);
    send({ type: "SET_TIME", payload: { time } });
  };

  const changeSeconds = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const seconds = Number(e.target.value);
    const time = fromHoursMinutesSeconds([hms[0], hms[1], seconds]);
    send({ type: "SET_TIME", payload: { time } });
  };

  const [hours, minutes, seconds] = hms.map(time =>
    String(time).padStart(2, "0")
  );

  return (
    <Container data-testid="Header">
      <h1>Workout Timer</h1>
      <ThemeSwitch />
      <Time>
        <NumberInput
          max={24}
          min={0}
          maxLength={2}
          data-testid="Header__hours"
          onChange={changeHours}
          value={hours}
        />
        <span>:</span>
        <NumberInput
          max={59}
          min={0}
          data-testid="Header__minutes"
          onChange={changeMinutes}
          value={minutes}
        />
        <span>:</span>
        <NumberInput
          max={59}
          min={0}
          data-testid="Header__seconds"
          onChange={changeSeconds}
          value={seconds}
        />
      </Time>
    </Container>
  );
};

export default Header;
