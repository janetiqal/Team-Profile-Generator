const Employee= require("./Employee")

class Manager extends Employee{
    constructor(name, id, email,officeNumber){
    super(name, id, email)
    this.officeNumber= officeNumber;
    }
    getRole(){
        console.log("Role is manager")
        return 'Manager';
    }
    getOfficeNumber(){
        console.log(`Office Number: ${this.officeNumber}`)
        return this.officeNumber
    }
}
module.exports=Manager;
// const person2 = new Manager("James",2,"b@yahoo.com","@janetiqa")
// person2.getName()
// person2.getId()
// person2.getEmail()
// person2.getOfficeNumber()
// person2.getRole()