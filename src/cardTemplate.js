

return `<div class="card ml-3" style="width: 18rem;">
    <h2 class="card-header text-center">{{ name }}</h2>
    <h6 class="card-text text-center">{{ role }}</h6>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: {{id}}</li>
        <li class="list-group-item">Email: <a href="mailto:{{ email }}">{{ email }}</a></li>
        <li class="list-group-item">Office Number: {{ officeNumber}}</li>
    </ul>
</div>
`

{/* <div class="col-12 flex justify-content-center">
<div class="card ml-3" style="width: 18rem;">
    <h2 class="card-header text-center">${answers[i].name[i]}</h2>
    <h6 class="card-text text-center">${answers[i].role[i]}</h6>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${answers[i].id[i]}</li>
        <li class="list-group-item">${answers[i].email[i]}</li>
        <li class="list-group-item">${answers[i].officeNumber || answers.github || answers.school}</li>
    </ul>
</div> */}

