const sundayWorkers = (allWorkers) => {
    const filteredWorkers = allWorkers.filter(person => person.age > 17);

    const alphabetisedWorkers = filteredWorkers.sort();
    console.log(alphabetisedWorkers);
    
    return alphabetisedWorkers;
};

module.exports = sundayWorkers;