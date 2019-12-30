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

export const toHoursMinutesSeconds = R.juxt([
  R.pipe(msToHours, R.modulo(R.__, HOURS_IN_DAY), Math.floor),
  R.pipe(msToMinutes, R.modulo(R.__, MINUTES_IN_HOUR), Math.floor),
  R.pipe(msToSecs, R.modulo(R.__, SECONDS_IN_MINUTE), Math.floor)
]);

function call<T, U>(fn: (t: T) => U, t: T): U {
  return fn(t);
}

export const fromHoursMinutesSeconds = R.pipe(
  R.zipWith<(n: number) => number, number, number>(call, [
    hoursToMS,
    minsToMS,
    secsToMS
  ]),
  R.sum
);

export const speakableTime = R.pipe(
  toHoursMinutesSeconds,
  R.zip(["hour", "minute", "second"]),
  R.map(
    R.ifElse(
      R.pipe(R.last, R.gt(R.__, 0)),
      ([label, time]) => `${time} ${label}${time === 1 ? "" : "s"}`,
      R.always("")
    )
  ),
  R.join(". "),
  s => s.concat(".")
);

export const formatTime = R.pipe(
  toHoursMinutesSeconds,
  R.map(R.pipe(String, padStart(2, "0"))),
  R.join(":")
);

export function createUUID(): string {
  let dt = new Date().getTime();
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
    c
  ) {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}
