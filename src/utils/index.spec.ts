import {
  minsToMS,
  secsToMS,
  hoursToMS,
  msToSecs,
  msToMinutes,
  msToHours,
  padStart,
  toHoursMinutesSeconds,
  fromHoursMinutesSeconds,
  speakableTime,
  formatTime
} from "./";

describe("minsToMs", () => {
  it("converts minutes to milliseconds", () => {
    const actual = minsToMS(6);
    const expected = 360000;
    expect(actual).toEqual(expected);
  });
});

describe("secsToMs", () => {
  it("converts seconds to milliseconds", () => {
    const actual = secsToMS(6);
    const expected = 6000;
    expect(actual).toEqual(expected);
  });
});

describe("hoursToMs", () => {
  it("converts hours to milliseconds", () => {
    const actual = hoursToMS(1);
    const expected = 3600000;
    expect(actual).toEqual(expected);
  });
});

describe("msToSecs", () => {
  it("converts milliseconds to seconds", () => {
    const actual = msToSecs(1000);
    const expected = 1;
    expect(actual).toEqual(expected);
  });
});

describe("msToMins", () => {
  it("converts milliseconds to minutes", () => {
    const actual = msToMinutes(60000);
    const expected = 1;
    expect(actual).toEqual(expected);
  });
});

describe("msToHours", () => {
  it("converts milliseconds to hours", () => {
    const actual = msToHours(3600000);
    const expected = 1;
    expect(actual).toEqual(expected);
  });
});

describe("the conversions are isomorphic", () => {
  it("for seconds", () => {
    const actual = secsToMS(msToSecs(3600000));
    const expected = 3600000;
    expect(actual).toEqual(expected);
  });

  it("for minutes", () => {
    const actual = minsToMS(msToMinutes(3600000));
    const expected = 3600000;
    expect(actual).toEqual(expected);
  });

  it("for hours", () => {
    const actual = hoursToMS(msToHours(3600000));
    const expected = 3600000;
    expect(actual).toEqual(expected);
  });
});

describe("padStart", () => {
  it("wraps String.prototype.padStart", () => {
    const actual = padStart(2, "0", "1");
    const expected = "01";
    expect(actual).toEqual(expected);
  });
});

describe("hoursMinutesSeconds", () => {
  it("returns a 3-tuple of hours, minutes, and seconds", () => {
    const actual = toHoursMinutesSeconds(4006000);
    const expected = [1, 6, 46];
    expect(actual).toEqual(expected);
  });
});

describe("fromHoursMinutesSeconds", () => {
  it("takes a 3-tuple of hours, minutes, and seconds and returns milliseconds", () => {
    const actual = fromHoursMinutesSeconds([1, 6, 46]);
    const expected = 4006000;
    expect(actual).toEqual(expected);
  });
});

describe("the hoursMinutesSeconds functions", () => {
  it("are isomorphic", () => {
    const actual = fromHoursMinutesSeconds(toHoursMinutesSeconds(4006000));
    const expected = 4006000;
    expect(actual).toEqual(expected);
  });
});

describe("speakableTime", () => {
  it("formats hours, minutes, and seconds", () => {
    const actual = speakableTime(4006000);
    const expected = "1 hour. 6 minutes. 46 seconds.";
    expect(actual).toEqual(expected);
  });

  it("formats minutes and seconds", () => {
    const actual = speakableTime(306000);
    const expected = "5 minutes. 6 seconds.";
    expect(actual).toEqual(expected);
  });

  it("formats minutes", () => {
    const actual = speakableTime(300000);
    const expected = "5 minutes.";
    expect(actual).toEqual(expected);
  });

  it("formats seconds", () => {
    const actual = speakableTime(6000);
    const expected = "6 seconds.";
    expect(actual).toEqual(expected);
  });
});

describe("formatTime", () => {
  it("returns padded and colon separated hours, minutes, and seconds", () => {
    const actual = formatTime(4006000);
    const expected = "01:06:46";
    expect(actual).toEqual(expected);
  });
});
