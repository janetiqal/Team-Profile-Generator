const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole() {
        console.log("Role is manager")
        return 'Manager';
    }
    getOfficeNumber() {
        console.log(`Office Number: ${this.officeNumber}`)
        return this.officeNumber
    }
}
module.exports = Manager;
