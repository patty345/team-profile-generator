const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('engineer gets created', () => {
    const engineer = new Engineer('Tim');
});

test('set the github account', () => {
    const testValue = 'GitHub Account';
    const e = new Engineer('test', 1, 'testengineer@email.com', testValue);
    expect(e.github).toBe(testValue);
});

test('get the github account', () => {
    const testValue = 'GitHub Account';
    const e = new Engineer('test', 1, 'testengineer@email.com', testValue);
    expect(e.getGitHub()).toBe(testValue);
});

test('get role returns Engineer', () => {
    const testValue = 'Engineer';
    const e = new Engineer('test', 1, 'testengineer@email.com', 'GitHub Account');
    expect(e.getRole()).toBe(testValue);
});