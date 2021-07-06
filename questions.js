//require inquirer
const inquirer = require('inquirer');
//require fs
const fs = require('fs');

//require team files
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

//create array for roles
const managers = [];
const engineers = [];
const interns = [];

//confirm new team member
const compileTeamMember = () => {
    inquirer
        .prompt ([
            {
                type: 'confirm',
                name: 'compileTeamMember',
                message: 'Would you like to add another team member?',
            },
        ])
        .then((answers) => {
            if(answers.compileTeamMember === true) {
                question1();
            } else {
                console.log(managers, engineers, interns);
                module.exports = managers;
                module.exports = engineers;
                module.exports = interns;
                deleteHtml();
                topHtmlFile();
                managerGenerator();
                engineerGenerator();
                internGenerator();
                bottomHtmlFile();
                return answers;
            }
        });
};

//question1 
const question1 = () => {
    inquirer
        .prompt ([
            {
                type: 'list',
                name: 'role',
                message: 'What is employees role?',
                choices: ['Manager', 'Engineer', 'Intern'],
            },
        ])
        .then((answers) => {
            if (answers.role === 'Manager') {
                managerQuestions();
            } else if (answers.role === 'Engineer') {
                engineerQuestions();
            } else if (answers.role === 'Intern') {
                internQuestions();
            }
        });
};

question1();

//engineer questions
const engineerQuestions = () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is engineers name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is engineers id number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is engineers email?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is engineers github username?',
            },
        ])
        .then((answers) => {
            const newEngineer = new Engineer (
                answers.name,
                answers.id,
                answers.email,
                answers.github
            );
            engineers.push(newEngineer);
            compileTeamMember();
        });
};

//intern questions
const internQuestions = () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is the interns name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the interns id number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the interns email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school did the intern attend?',
            },
        ])
        .then((answers) => {
            const newIntern = new Intern (
                answers.name,
                answers.id,
                answers.email,
                answers.school,
            );
            interns.push(newIntern);
            compileTeamMember();
        });
};

//manager questions
const managerQuestions = () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is the managers name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the managers id number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the managers email?',
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is the managers office number?',
            },
        ])
        .then((answers) => {
            const newManager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.office,
            );
            managers.push(newManager);
            compileTeamMember();
        });
};

//delete html file in none
const deleteHtml = () => {
    fs.unlinkSync('./index.html');
};

//append top html
const topHtmlFile = () => {
    fs.appendFileSync('index.html', generateHTML());
};

//append manager
const managerGenerator = () => {
    managers.forEach((manager => {
        fs.appendFileSync('index.html', generateMgr(manager));
    }));
};

//append engineer
const engineerGenerator = () => {
    engineers.forEach((engineer => {
        fs.appendFileSync('index.html', generateEng(engineer));
    }));
};

//append intern
const internGenerator = () => {
    interns.forEach((intern => {
        fs.appendFileSync('index.html', generateIntern(intern));
    }));
};

//append html bottom
const bottomHtmlFile = () => {
    fs.appendFileSync('index.html', generateBtm);
};

const generateHTML = () => {
   return ` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css">
    <title>Team Generator</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">Team Generator</h1>
            </div>
        </div>
    </div>`
}    

//add intern card html
const generateIntern = (intern) => {
    return `<div class="container mb-3 card-custom shadow-lg border-primary rounded">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            <h2 class="intern">Intern</h2>
        </div>
    </div>    
            <div class="employee">
                <p>Name:${intern.name}</p>
                <p>Email:${intern.email}</p>
                <p>Id:${intern.id}</p>
                <p>Role:${intern.role}</p>
                <p>School:${intern.school}</p>
            </div>
</div>`
}

//add engineer card html
const generateEng = (engineer) => {
    return `<div class="container mb-3 card-custom shadow-lg border-primary rounded">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            <h2 class="engineer">Engineer</h2>     
        </div>
    </div>
            <div class="employee">
                <p>Name: ${engineer.name}</p>
                <p>Email: ${engineer.email}</p>
                <p>Id: ${engineer.id}</p>
                <p>Role: ${engineer.role}</p>
                <p>Github: ${engineer.github}</p>
            </div>
</div>`
}

 //add manager card html
const generateMgr = (manager) => {
    return `<div class="container mb-3 card-custom shadow-lg border-primary rounded">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            <h2 class="manager">Manager</h2>
        </div>
    </div>
            <div class="employee">
                <p>Name: ${manager.name}</p>
                <p>Email: ${manager.email}</p>
                <p>Id: ${manager.id}</p>
                <p>Role: ${manager.role}</p>
                <p>Office Number: ${manager.office}</p>
        </div>
</div>`
}

//add bottom of html doc
const generateBtm = () => {
    return `</body>
    </html>`

}
    
