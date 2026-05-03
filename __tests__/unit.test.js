// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber Test1 (T)', () => {
  expect(isPhoneNumber("(123)-456-7890")).toBe(true);
});

test('isPhoneNumber Test2 (T)', () => {
  expect(isPhoneNumber("456-7890")).toBe(true);
});

test('isPhoneNumber Test3 (F)', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});

test('isPhoneNumber Test4 (F)', () => {
  expect(isPhoneNumber("abc-def-ghij")).toBe(false);
});

test('isEmail Test1 (T)', () => {
  expect(isEmail("javascript@java.net")).toBe(true);
});

test('isEmail Test2 (T)', () => {
  expect(isEmail("good@gmail.com")).toBe(true);
});

test('isEmail Test3 (F)', () => {
  expect(isEmail("hello@world")).toBe(false);
});

test('isEmail Test4 (F)', () => {
  expect(isEmail("wrong@email.long")).toBe(false);
});

test('isStrongPassword Test1 (T)', () => {
  expect(isStrongPassword("GoodPassword1")).toBe(true);
});

test('isStrongPassword Test2 (T)', () => {
  expect(isStrongPassword("ThisWorks2")).toBe(true);
});

test('isStrongPassword Test3 (F)', () => {
  expect(isStrongPassword("5hi_there")).toBe(false);
});

test('isStrongPassword Test4 (F)', () => {
  expect(isStrongPassword("verylongpasswords")).toBe(false);
});

test('isDate Test1 (T)', () => {
  expect(isDate("8/18/2008")).toBe(true);
});

test('isDate Test2 (T)', () => {
  expect(isDate("10/11/2012")).toBe(true);
});

test('isDate Test3 (F)', () => {
  expect(isDate("01/02/200")).toBe(false);
});

test('isDate Test4 (F)', () => {
  expect(isDate("01012000")).toBe(false);
});

test('isHexColor Test1 (T)', () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
});

test('isHexColor Test2 (T)', () => {
  expect(isHexColor("000")).toBe(true);
});

test('isHexColor Test3 (F)', () => {
  expect(isHexColor("G99")).toBe(false);
});

test('isHexColor Test4 (F)', () => {
  expect(isHexColor("#11")).toBe(false);
});