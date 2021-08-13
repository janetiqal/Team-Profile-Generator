class Employee{
    constructor(name, id, email){
        this.name= name;
        this.id= id;
        this.email= email;
    }
    getName(){
        console.log(`Employee name is ${this.name}`);
        return this.name;
    }
    getId(){
        console.log(`Employee ID is ${this.id}`);
        return this.id;
    }
    getEmail(){
        console.log(`Employee email is ${this.email}`);
        return this.email;
    }
    getRole(){
        // console.log("Role is employee")
        return 'Employee';
    }
}
// const person = new Employee("Ben", 3, "j@yahoo.com")
// person.getEmail();
// person.getRole();
// person.getName();
// person.getId();
module.exports=Employee;