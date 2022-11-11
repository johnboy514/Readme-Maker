// global constants
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const generateReadMe = require("./utils/generateMarkdown")

// Questions
function questions(){
inquirer
.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your projects name?"
    },
    {
        type: "input",
        name: "description",
        message: "What is a description of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the purpose of your project?"
    },
    {
        type: "input",
        name: "credits",
        message: "List your credits:"
    },
    {
        type: "list",
        name: "license",
        message: "Choose the used licences for this project:",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open",
            "None"
        ]
    },
    {
        type: "input",
        name: "features",
        message: "What are your projects features?"
    },
    {
        type: "input",
        name: "contribute",
        message: "How did you contribute to your project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here:"
    },
    {
        type: "input",
        name: "email",
        message: "what is your email?"
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is your gitHub username?"
    },
])
.then((answers) => {
    const createReadme = generateReadMe(answers);
    const fileName = "./generatedREADME.md";
    fs.appendFile(fileName, createReadme, (error) => error ? console.error(error) : console.log("Saved!"));
});
}

function init() {
    questions();
}

init();
