const Engineer= require("../lib/Engineer")
const obj = new Engineer("jeff", 2,"j@yahoo.com", "jgithub");

describe("Engineer", ()=>{
    it ('Should return github of the Engineer', ()=>{

        expect(obj.getGithub()).toEqual("jgithub");
    });
})
describe("Engineer", ()=>{
    it ('Should return the role of the Engineer', ()=>{

        expect(obj.getRole()).toEqual("Engineer");
    });
})