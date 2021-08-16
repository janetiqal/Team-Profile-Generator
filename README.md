# Team-Profile-Generator
Homework 8: Team Profile Generator 
## Purpose
To get more familiary with writing tests using Jest and using the Inquirer package to collect information from the user all while using and creating constructor functions with many different classes.
## Description
I was asked to build a command-line application that takes in information about employees on a software engineering team, that generates an HTML webpage that displays summaries for each person, and to write unit tests for every part of the code and ensure that it passes each test. Every employee has a name, email, ID but the manager has a office number, the engineer has a github, the intern has a school name.

I started by first creating the Employee parent class and creating constructor functions to get the information I needed based on the employee type. I then created my tests, and checked each test when I created the seperate employee classess that extended the parent class. 

I set up a function to run the inquirer prompts, and pushed the responses to those questions into an empty array that was created globally. I checked each role and generate new employees using the class constructors and pushed those responses into the empty array. I looped over that array and created cards based on the array length. If the user decideds to stop adding employees to the team, the html file is written. I also created a function to determine each role and to make it clear whether an employee has a github, school name, or office number.
## Demo Video

## Screen Shot

## Usage
Open the integrated terminal and run npm i, then run node index.js to begin prompts in the console. 
## Tests
This project includes 13 tests, that should all pass when the tests folder is opened in the terminal and npm test is run.
## Created By Janet Iqal
