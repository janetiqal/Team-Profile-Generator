const inquirer = require("inquirer");
// credit to https://github.com/ckoliber/inquirer-loop for helping me find a way to loop through the questions
//follows this format:inquirer.registerPrompt(name, prompt)
//"loop" is the name and prompt is the prompt obj itself
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
// const emailValidator = require("email-validator");
const fs = require("fs");
const generateTemplate = require("./src/page-template")
const cards = require("./src/page-template")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")

var answers = [];
const mainQuestions = [{
    type: "input",
    message: "Input the name of the Employee",
    name: "name",
    validate: string => string.length > 0 ? true : "You must include a name."

},
{
    type: "input",
    message: "Input the ID of the Employee",
    name: "id",
    validate: string => string.length > 0 ? true : "You must include an ID."

},
{
    type: "input",
    message: "Input the email of the Employee",
    name: "email",
    validate: string => string.includes("@") ? true : "You must include a valid email."
},
{
    type: "list",
    message: "Input the Role of the Employee",
    name: "role",
    choices: ["Manager", "Intern", "Engineer"],
},
{
    type: "input",
    message: "Input the office number of the Manager",
    name: "officeNumber",
    when: response => response.role === "Manager",
},
{
    type: "input",
    message: "Input the name of the school for the Intern",
    name: "school",
    when: response => response.role === "Intern",

},
{
    type: "input",
    message: "Input the github username of the Engineer",
    name: "github",
    when: response => response.role === "Engineer",
    //github usernames are min. 4 characters long
    validate: string => string.length >= 4 ? true : "Your github username can not be less than 4 characters."
}
]

function init() {
    inquirer.prompt(mainQuestions)
        .then((response) => {
            //pushing the response to the questions into an empty array called Answers
            answers.push(response)
            inquirer.prompt([
                {
                    type: "list",
                    message: "Do you want to add more Employees to this team?",
                    name: "continue",
                    choices: ["Yes", "No"]
                }])
                .then((check) => {
                    //calling the init function only if the user wants to continue w adding more employees to team
                    if (check.continue === "Yes") {
                        init();
                    }
                    if(check.continue === "No"){
                        roleCheck(response)
                        writeHTML(answers)
                        console.log("final",answers)
                    }
                })
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
    }

    // do this for each instance of employee and keep pushin in the array. 
    function roleCheck(response) {
        var potentialEmployee = ``;
    if (response.role === "Manager") {
        // let manager = new Manager(response.name, response.id, response.email, response.officeNumber)
         potentialEmployee = `Office Number: ${response.officeNumber}`
        // answers.push(manager)
        // fs.appendFileSync(`./Team2.html`, cards(answers), (err) => err ? console.error(err) : console.log('SUCCESS! HTML created'));
        // console.log("manager", response)
    }
    if (response.role === "Intern") {
        // let intern = new Intern(response.name, response.id, response.email, response.school)
        // answers.push(intern)
     potentialEmployee = `School: ${response.school}`
        // fs.appendFileSync(`./Team2.html`, cards(answers), (err) => err ? console.error(err) : console.log('SUCCESS! HTML created'));
        // console.log("intern", response)
    }
    if (response.role === "Engineer") {
        // let engineer = new Engineer(response.name, response.id, response.email, response.github)
         potentialEmployee = `Github: <a href="https://github.com/${response.github}" target="_blank"> ${response.github}</a>`
        // answers.push(engineer)
        // fs.appendFileSync(`./Team2.html`, cards(answers), (err) => err ? console.error(err) : console.log('SUCCESS! HTML created'));

        // console.log("engineer", response)
    }
        // document.getElementById("employeeType").innerHTML= potentialEmployee;
        console.log("potential employee", potentialEmployee)
        return potentialEmployee;
}

function writeHTML(answers) {
    fs.writeFile(`./Team2.html`, generateTemplate(answers), (err) => err ? console.error(err) : console.log('SUCCESS! HTML created'));
}


//calling the init function
init();
module.exports = roleCheck;
//to do:
//figure out how to append the html file with just the htmlCard not the entire function from card-template.js
//possibly loop over the roles and create a result that says `Office Number : ${response}` etc.. for each role 