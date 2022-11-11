// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);

inquirer
.createPromptModule([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "bio",
        message: "What is your bio?"
    },
    {
        type: "input",
        name: "location",
        message: "What is your location?"
    },
    {
        type: "input",
        name: "linkedIn",
        message: "What is your linkedIn?"
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is your Github?"
    },
])

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
