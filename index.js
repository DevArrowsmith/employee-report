const orgainseEmployees = (allEmployees, order) => {
    const employeesOver18 = allEmployees.filter(person => person.age > 17);

    const upperCaseEmployees = employeesOver18.map(employee =>  {
        let newEmployee = {...employee, name: employee.name.toUpperCase()};
        return newEmployee;
    });

    const alphabetisedEmployees = order === "descending" 
    ? upperCaseEmployees.sort((a, b) => a.name.charCodeAt(0) + b.name.charCodeAt(0))
    : upperCaseEmployees.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));
    
    return alphabetisedEmployees;
};

module.exports = orgainseEmployees;
