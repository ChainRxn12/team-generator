// dependencies
const Employee = require('./employee');

//create engineer class and extends on employee class

class Engineer extends Employee {
    constructor(name = null, id= null, github= null) {
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return this.role
    }
}

//exports the engineer class
module.exports = Engineer;

