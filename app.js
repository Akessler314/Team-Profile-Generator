// Dependencies 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


//-------------------------------------------------------------------------------------------------------------------------

//empty array that can store the team members in, Name ID and Email are in every array becase each array becasue that information is prevalent to every employee 
const teamArray = [];

// questions for different teams members:

// Manager: 
const managerQuestions = [

    {
        type: 'input',
        name: 'managerName',
        message: 'Please enter the name of the manager of this team, or your name if you are the manager of this team. '
    },

    {
        type: 'input',
        name: 'managerID',
        message: 'What is this managers ID number, enter your ID number if you are the manager of this team'
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is this managers Email adress, enter your email adress if you are the manager of this team'
    },

    {
        type: 'input',
        name: 'Office',
        message: 'What is this managers office number? if you are the manager of this team, enter your office number'
    },
]

//Engineer: 
const engineerQuestions = [

    {
        type: 'input',
        name: 'engiName',
        message: 'Enter the name if this engineer'
    },

    {
        type: 'input',
        name: 'engiID',
        message: 'Enter the ID number for this engineer'
    },

    {
        type: 'input',
        name: 'engiEmail',
        message: 'Enter the email adress for this engineer'
    },

    {
        type: 'input',
        name: 'engiGH',
        message: 'Enter this engineers GitHub user name'
    },
]

//Intern:
const internQuestions = [

    {
        type: 'input',
        name: 'internName',
        message: 'Enter the name if this intern'
    },

    {
        type: 'input',
        name: 'internID',
        message: 'Enter the ID number for this intern',
    },

    {
        type: 'input',
        name: 'internEmail',
        message: 'Enter the email adress for this intern'
    },

    {
        type: 'input',
        name: 'School',
        message: 'What school does this interen attend, if this intern is not currently attending a school enter "N/A" ',
    },
]






















// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
