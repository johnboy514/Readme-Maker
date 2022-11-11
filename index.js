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
.then((answer) => {
    let htmlContent = 
    '<html>\n\
            <head>\n\
                <meta charset="UTF-8"><link rel="stylesheet" href="style.css">\n\
                <title>Portfolio</title>\n\
            </head>\n\
            <body>\n\
                <header>\n\
                    <h1 class="title">Portfolio</h1>\n\
                </header>\n\
                <h2 id="name">' + answer.name + '</h2>\n\
                <p id="bio" >' + answer.bio + '</p>\n\
                <h2 class="title">Contact Info</h2>\n\
                <ul>\n\
                    <li id="location"><strong>Location:</strong>' + answer.location + '</li>\n\
                    <li id="linkedIn"><strong>LinkedIn:</strong>' + answer.linkedIn + '</li>\n\
                    <li id="github"><strong>Github:</strong>' + answer.gitHub + '</li>\n\
                </ul>\n\
            </body>\n\
    </html>';
    fs.appendFile('index.html', htmlContent, (error) => error ? console.error(error) : console.log("Saved!"));
});
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
