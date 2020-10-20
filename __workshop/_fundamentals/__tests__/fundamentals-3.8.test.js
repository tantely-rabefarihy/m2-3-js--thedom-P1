// We import (require) the function that we want to test.
const reverseIt = require("../fundamentals-3.8");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 8", () => {
  expect(reverseIt("abcdefgh")).toBe("hgfedcba");
  expect(reverseIt("hello")).toBe("olleh");
  expect(reverseIt("dev")).toBe("ved");
  expect(reverseIt("soap")).toBe("paos");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
