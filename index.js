const orgainseEmployees = (allEmployees) => {
    const employeesOver18 = allEmployees.filter(person => person.age > 17);

    const alphabetisedEmployees = employeesOver18.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));

    const upperCaseEmployees = alphabetisedEmployees.map(employee =>  {
        let newEmployee = {...employee, name: employee.name.toUpperCase()};
        return newEmployee;
    });
    
    return upperCaseEmployees;
};

module.exports = orgainseEmployees;


