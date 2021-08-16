const inquirer = require("inquirer");
const fs = require("fs");
const  { generateTemplate }= require("./src/page-template")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")

var answers = [];
const mainQuestions = [{
    type: "input",
    message: "Input the name of the Employee.",
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
    validate: string => string.length > 0 ? true : "You must input an Office Number.",
    when: response => response.role === "Manager",
},
{
    type: "input",
    message: "Input the name of the school for the Intern",
    name: "school",
    validate: string => string.length > 0 ? true : "You must input a school.",
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
            //if didnt use, classes. could use 65, and just .role instead of getrole() and it would work.
            // answers.push(response)
            //using the classes and pushing the response to the questions into an empty array called Answers
            if (response.role==="Manager"){
                answers.push(new Manager(response.name, response.id, response.email, response.officeNumber))
            }else if(response.role==="Intern"){
                answers.push(new Intern(response.name, response.id, response.email, response.school))
            }else if(response.role==="Engineer"){
                answers.push(new Engineer(response.name, response.id, response.email, response.github))
            }
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

function writeHTML(answers) {
    fs.writeFile(`./Team.html`, generateTemplate(answers), (err) => err ? console.error(err) : console.log('SUCCESS! HTML created'));
}


//calling the init function
init();

