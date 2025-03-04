import { countDays } from "./app";

describe("Length of trip", () => {
  test.each([["2024-09-3", "2024-09-9", 6]])(
    "Returns correct number of days between %s and %s",
    (start, end, expected) => {
      expect(countDays(start, end)).toBe(expected);
    }
  );
});

