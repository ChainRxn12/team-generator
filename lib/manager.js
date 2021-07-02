//dependencies
const Employee = require('./employee');

//create manager class, extends from employee class
class Manager extends Employee {
    constructor(name= null, id= null, email= null, officeNumber= null) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return this.role
    }
}

//exports the manager class
module.exports = Manager; 