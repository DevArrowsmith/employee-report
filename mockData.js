const over18MockData = [
    { name: 'ANGELO', age: 16 },
    { name: 'ANGELO', age: 23 },
    { name: 'ANGELO', age: 17 },
    { name: 'ANGELO', age: 45 }
];

const resultOver18 = [
    { name: 'ANGELO', age: 23 },
    { name: 'ANGELO', age: 45 }
]

const capitaliseMockData = [
    { name: 'Angelo', age: 23 },
    { name: 'Angelo', age: 45 },
    { name: 'Angelo', age: 31 }
]

const resultCapitalise = [
    { name: 'ANGELO', age: 23 },
    { name: 'ANGELO', age: 45 },
    { name: 'ANGELO', age: 31 }
]

const alphabetiseMockData = [
    { name: 'SEPP', age: 18 },
    { name: 'ANGELO', age: 23},
    { name: 'MIKE', age: 51 }
];

const resultAlphabetiseAscending = [
    { name: 'ANGELO', age: 23},
    { name: 'MIKE', age: 51 },
    { name: 'SEPP', age: 18 }
];

const resultAlphabetiseDescending = [
    { name: 'SEPP', age: 18 },
    { name: 'MIKE', age: 51 },
    { name: 'ANGELO', age: 23}
];

module.exports = { over18MockData, resultOver18, capitaliseMockData, resultCapitalise, alphabetiseMockData, resultAlphabetiseAscending, resultAlphabetiseDescending };
