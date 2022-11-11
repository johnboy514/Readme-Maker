// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return`

# ${answers.title}

## Description

${answers.description}

## Table of COntents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installations

${answers.installations}

## Usage

${answers.usage}

## Credits

${answers.credits}

## License

${answers.license}

## Features

${answers.features}

## How to Contribute

${answers.contribute}

## Tests

${answers.tests}

## Questions

My Github: [${answers.github}](https://github.com/${answers.gitHub})<br>
Email me at: ${answers.email} for any questions
`;
}

module.exports = generateMarkdown;
