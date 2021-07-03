//require inquirer
const inquirer = require('inquirer');
//require fs
const fs = require('fs');

// const writeFileAsync = 

inquirer
    .prompt([
        {
            type: 'confirm',
            name: 'runApp',
            message: 'Do you want to create a team?',
        },

        {
            type: 'confirm',
            name: 'newEmployee',
            message: 'Do you need an new Employee?',
        },
        {
            type: 'list',
            name: 'exployeeType',
            message: 'What role will the new Employee have?',
            choices: ["Manager" , "Engineer", "Intern"],
        },
        {
            type: 'input',
            name: 'employeeName',
            message: 'What is the Employees name?',
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'What is the Employees email address?',
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the Employees ID number?',
        },
        {
            type: 'input',
            name: 'engineerGit',
            message: 'What is the Engineers Github username?',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the Engineers Github handle?',
        },
        {
            type: 'input',
            name: 'mgrOffice',
            message: 'What is the Managers office number?',
        },

    ])

    // loremipsum lorem ipsum