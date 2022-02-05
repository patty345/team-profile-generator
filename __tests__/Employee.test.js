// const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('employee gets created', () => {
    const employee = new Employee('Mary');
});

test('set the id', () => {
    const testValue = 100;
    const e = new Employee('Test', testValue);
    expect(e.id).toBe(testValue);
});

test('set the email', () => {
    const testValue = 'test@email.com';
    const e = new Employee('Test', 1, testValue);
    expect(e.email).toBe(testValue);
});

test('getRole() return Employee', () => {
    const testValue = 'Employee';
    const e = new Employee('Mary', 1, 'test@email.com');
    expect(e.getRole()).toBe(testValue);
});