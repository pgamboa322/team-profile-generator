const Employee = require("./Employee");

// creating constructor for Manager that refernces orgin class of employee

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;