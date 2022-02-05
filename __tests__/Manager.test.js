const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('create the manager', () => {
    const manager = new Manager('Oscar');
});

test('set the office number', () => {
    const testValue = 100;
    const e = new Manager('test', 1, 'testmanager@email.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('getting the office number', () => {
    const testValue = 100;
    const e = new Manager('test', 1, 'testmanager@email.com', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

test('getting the role to return manager', () => {
    const testValue = 'Manager';
    const e = new Manager('test', 1, 'testmanager@email.com', 100);
    expect(e.getRole()).toBe(testValue);
});