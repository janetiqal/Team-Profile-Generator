const Intern = require("../lib/Intern")
const obj = new Intern("jeff", 2, "j@yahoo.com", "Loyola");


describe("Intern", () => {
    it('Should return the role of the Intern', () => {

        expect(obj.getRole()).toEqual("Intern");
    });
})
describe("Intern", () => {
    it('Should return the school of the Intern', () => {

        expect(obj.getSchool()).toEqual("Loyola");
    });
})