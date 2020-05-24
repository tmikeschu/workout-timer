import * as React from "react";
import { styled, ThemeSwitch } from "theme";
import { toHoursMinutesSeconds, fromHoursMinutesSeconds } from "utils";
import { useAppMachine } from "contexts/machine";
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
  font-size: 2rem;
  select {
    font-size: 4rem;
  }
  text-align: center;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & > input {
    padding: 0;
    max-width: 25%;
  }
`;

const Header: React.FC = () => {
  const [current, send] = useAppMachine();

  const hms = toHoursMinutesSeconds(current.context.currentTime);

  const changeHours = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const hours = Number(e.target.value);
    const time = fromHoursMinutesSeconds([hours, hms[1], hms[2]]);
    send({ type: "SET_TIME", payload: { time } });
  };

  const changeMinutes = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const minutes = Number(e.target.value);
    const time = fromHoursMinutesSeconds([hms[0], minutes, hms[2]]);
    send({ type: "SET_TIME", payload: { time } });
  };

  const changeSeconds = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const seconds = Number(e.target.value);
    const time = fromHoursMinutesSeconds([hms[0], hms[1], seconds]);
    console.log(time);
    send({ type: "SET_TIME", payload: { time } });
  };

  const [hours, minutes, seconds] = hms;

  return (
    <Container data-testid="Header">
      <h1>Workout Timer</h1>
      <ThemeSwitch />
      <Time>
        <NumberInput
          range={[0, 24]}
          data-testid="Header__hours"
          onChange={changeHours}
          value={hours}
          display={(n: number): string => String(n).padStart(2, "0")}
        />
        <span>:</span>
        <NumberInput
          range={[0, 59]}
          data-testid="Header__minutes"
          onChange={changeMinutes}
          value={minutes}
          display={(n: number): string => String(n).padStart(2, "0")}
        />
        <span>:</span>
        <NumberInput
          range={[0, 59]}
          data-testid="Header__seconds"
          onChange={changeSeconds}
          value={seconds}
          display={(n: number): string => String(n).padStart(2, "0")}
        />
      </Time>
    </Container>
  );
};

export default Header;
