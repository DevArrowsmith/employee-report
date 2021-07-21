const sundayWorkers = (allWorkers) => {
    const filteredWorkers = allWorkers.filter(person => person.age > 17);

    const alphabetisedWorkers = filteredWorkers.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));
    
    return alphabetisedWorkers;
};

module.exports = sundayWorkers;