const {
    over18MockData,
    resultOver18,
    capitaliseMockData,
    resultCapitalise,
    alphabetiseMockData,
    resultAlphabetiseAscending,
    resultAlphabetiseDescending,
 } = require('./mockData');

const organiseEmployees = require('./index');
const { test, expect } = require('@jest/globals');

test('returns an array when passed an array', () => {
    const expected = [];

    const result = organiseEmployees([]);

    expect(result).toEqual(expected);
});

test('returns a list of employees that only includes people over 18', () => {
    const expected = resultOver18;

    const result = organiseEmployees(over18MockData);

    expect(result).toEqual(expected);
});

test('Returns a list of employees with capitalised names', () => {
    const expected = resultCapitalise;

    const result = organiseEmployees(capitaliseMockData);

    expect(result).toEqual(expected);
});

test('Returns a list of employees in ascending alphabetical order when not passed the secondary argument string "descending"', () => {
    const expected = resultAlphabetiseAscending;

    const result = organiseEmployees(alphabetiseMockData);

    expect(result).toEqual(expected);
});

test('Returns a list of employees in descending alphabetical order when passed the secondary argument string "descending"', () => {
    const expected = resultAlphabetiseDescending;

    const result = organiseEmployees(alphabetiseMockData, "descending")

    expect(result).toEqual(expected);
});
