const Employee= require("./Employee")

class Intern extends Employee{
    constructor(name, id, email, school){
    super(name, id, email)
    this.school= school;
    }
    getSchool(){
        console.log(`School: ${this.school}`)
        return this.school
    }
    getRole(){
        console.log("Role is intern")
        return 'Intern'
    }
}
module.exports=Intern;
// const person2 = new Intern("James",2,"b@yahoo.com","@janetiqa")

// person2.getName()
// person2.getId()
// person2.getEmail()
// person2.getSchool()
// person2.getRole()