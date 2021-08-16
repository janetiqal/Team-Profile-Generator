

const cards =function generateCard(answers){
    //concatting the strings together of all the potential cards from the answers array.
    var htmlCard = ``;
    for(let i =0; i <answers.length; i ++){
   htmlCard+= `<div class="col-12 flex justify-content-center">
    <div class="card ml-3" style="width: 18rem;">
        <h2 class="card-header text-center">${answers[i].name}</h2>
        <h6 class="card-text text-center">${answers[i].role}</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${answers[i].id}</li>
            <li class="list-group-item"><a href ="mailto:"${answers[i].email}">${answers[i].email}</li>
            <li class="list-group-item">${answers[i].officeNumber || answers[i].github || answers[i].school}</li>
        </ul>
    </div>
    `
}
return htmlCard;
};

module.exports = cards;