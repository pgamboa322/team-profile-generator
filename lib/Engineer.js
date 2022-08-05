const Employee = require("./Employee");

// creating constructor for Engineer that refernces orgin class of employee


class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;