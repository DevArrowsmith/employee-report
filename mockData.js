const employees = [
    { name: 'Max', age: 17 },
    { name: 'Sepp', age: 18 },
    { name: 'Angelo', age: 23},
    { name: 'Nina', age: 15 },
    { name: 'Mike', age: 51 },
];

const filteredEmployees = [
    { name: 'Sepp', age: 18 },
    { name: 'Angelo', age: 23},
    { name: 'Mike', age: 51 },
];

const alphabetisedEmployees = [
    { name: 'Angelo', age: 23},
    { name: 'Mike', age: 51 },
    { name: 'Sepp', age: 18 },
];

module.exports = { employees, filteredEmployees, alphabetisedEmployees };