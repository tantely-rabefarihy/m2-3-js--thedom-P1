// We import (require) the function that we want to test.
const repeat = require("../fundamentals-3.7");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 7", () => {
  expect(repeat(["foo", 3])).toBe("foofoofoo");
  expect(repeat(["hey", 4])).toBe("heyheyheyhey");
  expect(repeat(["lol", 2])).toBe("lollol");
  expect(repeat(["dev", 3])).toBe("devdevdev");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
