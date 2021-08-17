const Employee = require("../lib/Employee")
const obj = new Employee("jeff", 2, "j@yahoo.com");
describe("Employee", () => {
    it('Should return name of Employee', () => {

        expect(obj.name).toEqual("jeff")
    });
})
describe("Employee", () => {
    it('Should return ID of employee', () => {

        expect(obj.id).toEqual(2)
    });
})

describe("Employee", () => {
    it('Should return email of employee', () => {
        expect(obj.email).toEqual("j@yahoo.com")
    });
})

describe("Employee", () => {
    it('Should return role of employee', () => {

        expect(obj.getRole()).toEqual('Employee')
    });
})
describe("Employee", () => {
    it('Calling this getName function should return the name of Employee', () => {

        expect(obj.getName()).toEqual('jeff')
    });
})
describe("Employee", () => {
    it('Calling this getId function should return the ID of Employee', () => {

        expect(obj.getId()).toEqual(2)
    });
})
describe("Employee", () => {
    it('Calling this getEmail function should return the email of Employee', () => {

        expect(obj.getEmail()).toEqual("j@yahoo.com")
    });
})
