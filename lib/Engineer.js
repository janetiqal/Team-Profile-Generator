const Employee= require("./Employee")

class Engineer extends Employee{
    constructor(name, id, email, github){
    super(name, id, email)
    this.github= github;
    }
    getGithub(){
        console.log(`Github: ${this.github}`)
        return this.github;
    }
    getRole(){
        console.log("engineer")
        return 'Engineer';
    }
}
module.exports= Engineer;
// const person2 = new Engineer("James",2,"b@yahoo.com","@janetiqa")
// person2.getName()
// person2.getId()
// person2.getEmail()
// person2.getGithub()
// person2.getRole()