import * as R from "ramda";

export const secsToMS = (seconds: number): number => seconds * 1000;

export const minsToMS = (minutes: number): number => secsToMS(minutes * 60);

export const padStart = R.curry(
  (maxLength: number, char: string, s: string) => {
    return s.padStart(maxLength, char);
  }
);

export const hoursMinutesSeconds = R.juxt([
  (t: number): number => Math.floor((t / (1000 * 60 * 60)) % 24),
  (t: number): number => Math.floor((t / (1000 * 60)) % 60),
  (t: number): number => Math.floor((t / 1000) % 60)
]);

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
