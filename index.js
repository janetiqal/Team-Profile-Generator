const inquirer = require("inquirer");
// credit to https://github.com/ckoliber/inquirer-loop for helping me find a way to loop through the questions
//follows this format:inquirer.registerPrompt(name, prompt)
//"loop" is the name and prompt is the prompt obj itself
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const emailValidator = require("email-validator");
const fs = require("fs");
// const Choices = require("inquirer/lib/objects/choices");

var responseArray= [];
const questionsForTheLooping= [{
        type: "input",
        message: "Input the name of the Employee",
        name: "name",
        validate: string => string.length > 0 ? true: "You must include a name."
    
    },
    {
        type: "input",
        message: "Input the ID of the Employee",
        name: "id"
    
    },
    {
        type: "input",
        message: "Input the email of the Employee",
        name: "email",
        validate: string => string.includes("@")  ? true: "You must include a valid email."
    },
    {
        type:"list",
        message:"Input the Role of the Employee",
        name:"role",
        choices:["Manager", "Intern", "Engineer"]
    },
    {
        type:"input",
        message:"Input the office number of the Manager",
        name:"officeNumber",
        when:response => response.role === "Manager",
    },
    {
        type:"input",
        message:"Input the name of the school of the Intern",
        name:"school",
        when:response => response.role === "Intern",
    
    },
    {
        type:"input",
        message:"Input the github of the Engineer",
        name:"github",
        when:response => response.role === "Engineer",
        //github usernames are min. 4 characters long
        validate: string => string.length >= 4 ? true: "Your github username can not be less than 4 characters."
    }]

const mainQuestions = [{
    type: "input",
    message: "Input the name of the Employee",
    name: "name",
    validate: string => string.length > 0 ? true: "You must include a name."

},
{
    type: "input",
    message: "Input the ID of the Employee",
    name: "id"
},
{
    type: "input",
    message: "Input the email of the Employee",
    name: "email",
    validate: string => string.includes("@")  ? true: "You must include a valid email."
},
{
    type:"list",
    message:"Input the Role of the Employee",
    name:"role",
    choices:["Manager", "Intern", "Engineer"],
},
{
    type:"input",
    message:"Input the office number of the Manager",
    name:"officeNumber",
    when:response => response.role === "Manager",
},
{
    type:"input",
    message:"Input the name of the school of the Intern",
    name:"school",
    when:response => response.role === "Intern",

},
{
    type:"input",
    message:"Input the github of the Engineer",
    name:"github",
    when:response => response.role === "Engineer",
    //github usernames are min. 4 characters long
    validate: string => string.length >= 4 ? true: "Your github username can not be less than 4 characters."
},
{
    type:"loop",
    message: "Do you want to add more Employees to this team?",
    name:"moreQuestions",
    //an array filled w the necessary questions to add more team members
    questions: questionsForTheLooping
}]

function init(){
inquirer.prompt(mainQuestions)
.then((response)=>{
    console.log("Hi", response)
    responseArray.push(response)
    console.log("responseArray:",responseArray);
    console.log(JSON.stringify(responseArray[0].moreQuestions[0].name))
}
)
.catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}


init();