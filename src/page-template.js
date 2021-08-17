// const roleCheck = require("../index")

//this function makes sure the github of the engineer is able to be a clickable link, and have text saying either Office Number:, school:, or github: .
function roleCheck(answer) {
//using answer.getRole instead of answers.role because I am using the class constructors, (lines 71-77 in index.js)
    var potentialEmployee = ``;
    var icon =``;
if (answer.getRole() === "Manager") {
    // let manager = new Manager(response.name, response.id, response.email, response.officeNumber)
     potentialEmployee=`Office Number: ${answer.officeNumber}`;
     icon =`<i class="bi bi-person-lines-fill"></i>`;
}
else if (answer.getRole() === "Intern") {
    // let intern = new Intern(response.name, response.id, response.email, response.school)
    potentialEmployee=`School: ${answer.school}`;
    icon =` <i class="bi bi-book-fill"></i>`;
}
else if (answer.getRole() === "Engineer") {
    // let engineer = new Engineer(response.name, response.id, response.email, response.github)
     potentialEmployee = `Github: <a href="https://github.com/${answer.github}" target="_blank" style="color:black">${answer.github}</a> `
     icon =`<i class="bi bi-github"></i>`;
}
    return potentialEmployee + icon;
}


function generateTemplate (answers) {

    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
        <link rel="stylesheet" href="./dist/style.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <h1 class="jumbotron text-center">Team Roster</h1>
        </div>
    </div>

    <div class="container">
        <div class="row">
        <div class="col-12 flex justify-content-center">
        ${generateCard(answers)}
        </div>
    </div>

</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
        crossorigin="anonymous"></script>
    <script src="/index.js"></script>
</body>

</html>
    `
};

function generateCard(answers){
    var htmlCard = ``;
    for(let i =0; i <answers.length; i ++){
   htmlCard+= `
    <div class="card ml-3">
        <h2 class="card-header text-center">${answers[i].name}</h2>
        <h4 class="card-text text-center">${answers[i].getRole()}</h4>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${answers[i].id}</li>
            <li class="list-group-item">Email: <a href ="mailto:${answers[i].email}" style="color:black">${answers[i].email}</a></li>
            <li class="list-group-item">${roleCheck(answers[i])}</li>
        </ul>
    </div>
    `
}
return htmlCard;
};

// can not exports two functions seperately(it defaults to the last item exported), so exporting them as objects, and importing them as deconstructed obj.
module.exports= {generateTemplate, generateCard};
