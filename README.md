# Team-Profile-Generator

## Purpose
To get more familiary with writing tests using Jest and using the Inquirer package to collect information from the user all while using and creating constructor functions with different classes.

## Table of Contents
- [Purpose](#purpose)
- [Description](#description)
- [Technologies](#technologies)
- [Demo](#demo)
- [Link](#link-to-app)
- [ScreenShot](#screenshot)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#contributing)
- [Questions](#questions)


## Description
I built a command-line application that takes in information about employees on a software engineering team, that generates an HTML webpage that displays summaries for each person. I wrote unit tests for every part of the code and ensure that it passes each test. Every employee has a name, email, ID but the manager has a office number, the engineer has a github, and the intern has a school name.

I started by first creating the Employee parent class and creating constructor functions to get the information I needed based on the employee type. I ran each test when I created the seperate employee classess that extended the parent class. 

I set up a function to run the inquirer prompts, and pushed the responses to those questions into an empty array that was created globally. I checked each role and generated new employees using the class constructors and pushed those responses into the empty array. I looped over that array and created cards based on the array length. If the user decided to stop adding employees to the team, the html file is written. I also created a function to determine each role and to make it clear whether an employee has a github, school name, or office number.

## Technologies
- Node.js
- Inquirer package
- Object Oriented Programming concepts were used to build this app
- Jest is used for testing
- Bootstrap

## Demo Video
Full video link to demo [here](https://drive.google.com/file/d/1QhFxxcTE3r5BN_iM7odVntN6QSaHYRvM/view?usp=sharing) </br>
![Demo](./images/demo.gif)

## Link to App
Link to deployed app on github pages, [here](https://janetiqal.github.io/Team-Profile-Generator/Team.html).

## Screen Shot
<img width="450" alt="Screen Shot of Team.html page" src="https://user-images.githubusercontent.com/84414488/129618329-8a775736-b7fd-470f-a7fc-90ed31a5c54e.png">

## Usage
Open the integrated terminal and run npm i, then run node index.js to begin prompts in the console. 
## Tests
This project includes 13 tests, that should all pass when the tests folder is opened in the terminal and npm test is run.
## Credits
Npm packages inquirer and jest were used. Bootstrap was used for a basic design.
## Created By Janet Iqal
