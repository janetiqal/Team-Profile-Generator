const Manager= require("../lib/Manager")
const obj = new Manager("jeff", 2,"j@yahoo.com",3 );


describe("Manager", ()=>{
    it ('Should return the role of the Manager', ()=>{

        expect(obj.getRole()).toEqual("Manager");
    });
})
describe("Manager", ()=>{
    it ('Should return the office number of the Manager', ()=>{


        expect(obj.getOfficeNumber()).toEqual(3);
    });
})