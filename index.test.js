const { employees, alphabetisedEmployees } = require('./mockData');
const sundayWorkers = require('./index');
const { test, expect } = require('@jest/globals');

test('returns an array', () => {
    const isArray = true;

    const result = Array.isArray(sundayWorkers(employees));

    expect(result).toEqual(isArray);
});

test('returns a list of employees that only includes people over 18', () => {
    const expected = [];

    const result = sundayWorkers(employees).filter(employee => employee.age < 18);

    expect(result).toEqual(expected);
});

test('Returns a list of employees in alphabetical order', () => {
    const expected = alphabetisedEmployees;

    const result = sundayWorkers(employees);

    expect(result).toEqual(expected);
});