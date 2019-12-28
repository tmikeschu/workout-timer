import * as R from "ramda";

const MILLISECONDS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE;
const MILLISECONDS_IN_HOUR =
  MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE * MINUTES_IN_HOUR;

export const secsToMS = R.multiply(MILLISECONDS_IN_SECOND);
export const minsToMS = R.multiply(MILLISECONDS_IN_MINUTE);
export const hoursToMS = R.multiply(MILLISECONDS_IN_HOUR);
export const msToSecs = R.divide(R.__, MILLISECONDS_IN_SECOND);
export const msToMinutes = R.divide(R.__, MILLISECONDS_IN_MINUTE);
export const msToHours = R.divide(R.__, MILLISECONDS_IN_HOUR);

export const padStart = R.curry(
  (maxLength: number, char: string, s: string) => {
    return s.padStart(maxLength, char);
  }
);

export const hoursMinutesSeconds = R.juxt([
  (t: number): number => Math.floor(msToHours(t) % HOURS_IN_DAY),
  (t: number): number => Math.floor(msToMinutes(t) % MINUTES_IN_HOUR),
  (t: number): number => Math.floor(msToSecs(t) % SECONDS_IN_MINUTE)
]);

export const fromHoursMinutesSeconds = ([hours, minutes, seconds]: [
  number,
  number,
  number
]): number => {
  return hoursToMS(hours) + minsToMS(minutes) + secsToMS(seconds);
};

export const speakableTime = (time: number): string => {
  const [hours, minutes, seconds] = hoursMinutesSeconds(time);
  let msg = "";
  if (hours > 0) {
    msg += `${hours} hour${hours === 1 ? "" : "s"}. `;
  }
  if (minutes > 0) {
    msg += `${minutes} minute${minutes === 1 ? "" : "s"}. `;
  }
  if (seconds > 0) {
    msg += `${seconds} second${seconds === 1 ? "" : "s"}`;
  }
  return msg;
};

export const formatTime = R.pipe(
  hoursMinutesSeconds,
  R.map(R.pipe(String, padStart(2, "0"))),
  R.join(":")
);
