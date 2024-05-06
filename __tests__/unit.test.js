// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('correct phone number', () =>{
  expect(isPhoneNumber('123-456-7890')).toBe(true)
})

test('correct phone number', () =>{
  expect(isPhoneNumber('(123)-456-7890')).toBe(true)
})

test('incorrect phone number', () =>{
  expect(isPhoneNumber('(123)567890')).toBe(false)
})

test('incorrect phone number', () =>{
  expect(isPhoneNumber('123567890')).toBe(false)
})

test('valid password', () =>{
  expect(isStrongPassword('Password123')).toBe(true)
})


test('valid password', () =>{
  expect(isStrongPassword('Strong123')).toBe(true)
})


test('invalid password', () =>{
  expect(isStrongPassword('StrongPassassword123')).toBe(false)
})

test('invalid password', () =>{
  expect(isStrongPassword('123Password')).toBe(false)
})

test('valid date', () => {
  expect(isDate('07/24/2004')).toBe(true)
})

test('valid date', () => {
  expect(isDate('7/2/2004')).toBe(true)
})

test('invalid date', () => {
  expect(isDate('722004')).toBe(false)
})

test('invalid date', () => {
  expect(isDate('07-24-2004')).toBe(false)
})

test('valid correct email', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('valid correct email', () => {
  expect(isEmail('test2@email.com')).toBe(true);
});

test('invalid incorrect email', () => {
  expect(isEmail('test@.com')).toBe(false);
});

test('invalid  email', () => {
  expect(isEmail('test@gmail')).toBe(false);
});

test('valid hex', () => {
  expect(isHexColor('#123')).toBe(true);
})

test('valid hex', () => {
  expect(isHexColor('#111111')).toBe(true);
})

test('invalid hex', () => {
  expect(isHexColor('#12g')).toBe(false);
})

test('invalid hex', () => {
  expect(isHexColor('1234')).toBe(false);
})