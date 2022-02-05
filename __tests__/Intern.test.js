const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates the intern', () => {
    const intern = new Intern('Todd');
});

test('creates school', () => {
    const testValue = 'Rice';
    const e = new Intern('test', 1, 'testintern@email.com', testValue);
    expect(e.school).toBe(testValue);

});

test('get school', () => {
    const testValue = 'Rice';
    const e = new Intern('test', 1, 'testintern@email.com', testValue);
    expect(e.getSchool()).toBe(testValue);
});

test('get the role', () => {
    const testValue ='Intern';
    const e = new Intern('test', 1, 'testintern@email.com', 'Rice');
    expect(e.getRole()).toBe(testValue);
});