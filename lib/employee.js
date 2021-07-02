//create employee class 

class Employee {
    constructor(name= null , id= null , email= null) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return this.role
    }

}

// export employee class
module.exports = Employee;