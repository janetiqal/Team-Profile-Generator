const roleCheck = require("../index")


function generateTemplate (answers, response) {

    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link rel="stylesheet" href="/dist/style.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <h1 class="jumbotron text-center">TEAM Roster</h1>
        </div>
    </div>

    <div class="container">
        <div class="row">
        <div class="col-12 flex justify-content-center">
        ${generateCard(answers, response)}
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

function generateCard(answers, response){
    // roleCheck(response);
    var htmlCard = ``;
    for(let i =0; i <answers.length; i ++){
   htmlCard+= `
    <div class="card ml-3" style="width: 18rem;">
        <h2 class="card-header text-center">${answers[i].name}</h2>
        <h6 class="card-text text-center">${answers[i].role}</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${answers[i].id}</li>
            <li class="list-group-item"><a href ="mailto:"${answers[i].email}">${answers[i].email}</a></li>
            <li class="list-group-item">${roleCheck(response)}</li>
        </ul>
    </div>
    `
}
return htmlCard;
};




module.exports = generateCard;
module.exports= generateTemplate;