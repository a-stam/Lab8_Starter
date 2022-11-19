// unit.test.js

const functions = require("../code-to-unit-test/unit-test-me.js");

// TODO - Part 2
test("is 111-111-1111 a phone number", () => {
  expect(functions.isPhoneNumber('111-111-1111')).toBe(true);
});

test("is test_address@ucsd.edu a phone number", () => {
  expect(functions.isEmail("test_address@ucsd.edu")).toBe(true);
});

test("is A23Rfs_4 a strong password", () => {
  expect(functions.isStrongPassword("A23Rfs_4")).toBe(true);
});

test("is 01/01/2001 a date", () => {
  expect(functions.isDate("01/01/2001")).toBe(true);
});

test("is #ffffff a hex color", () => {
  expect(functions.isHexColor("#abc123")).toBe(true);
});
