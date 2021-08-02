const { employees, alphabetisedEmployees } = require('./mockData');
const organiseEmployees = require('./index');
const { test, expect } = require('@jest/globals');

let organisedEmployees;

beforeEach(() => {
    organisedEmployees = organiseEmployees(employees);
});

test('returns an array', () => {
    const isArray = true;
    
    const result = Array.isArray(organisedEmployees);

    expect(result).toEqual(isArray);
});

test('returns a list of employees that only includes people over 18', () => {
    const emptyArray = [];

    const employeesUnder18 = organisedEmployees.filter(employee => employee.age < 18);

    expect(employeesUnder18).toEqual(emptyArray);
});

test('Returns a list of employees in alphabetical order', () => {
    const alphabetisedEmployees = [...organisedEmployees].sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));

    expect(alphabetisedEmployees).toEqual(organisedEmployees);
});

test('Returns a list of employees with capitalised names', () => {
    const checkIfUppercase = employees => {
        return !employees.map(employee => employee.name.toUpperCase() === employee.name).includes(false);
    };

    expect(checkIfUppercase(organisedEmployees)).toBe(true);
});
