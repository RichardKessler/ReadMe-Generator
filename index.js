const fs = require('fs');
const util = require('util');
const axios = require('axios');
const inquirer = require('inquirer');
const markdownData = require('./utils/generateMarkdown');

//A Function that prompts the user for inputs that will be entered into the README file
function getUserAnswers() {
    return inquirer.prompt([{
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            name: 'description',
            message: 'Describe your project.'
        },
        {
            name: 'installation',
            message: 'How do you install your project?'
        },
        {
            name: 'usage',
            message: 'How do you use your project?'
        },
        {
            name: 'license',
            message: 'What license does your project use?',
            choices: ['MIT', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'Apache 2.0', 'MPL 2.0', 'BSL 1.0', 'No License']
        },
        {
            name: 'contributers',
            message: 'Can others contribute to your project and if so how?'
        },
        {
            name: 'testing',
            message: 'What tests did you perform on your project?'
        },
        {
            name: 'github',
            message: "What is your GitHub username?"
        },
    ]);
}

//Function to make the README file
function writeToFile(fileName, data) {
    console.log(fileName, data);
    fs.writeFile(fileName, data, "utf8", (err) => {
        if (err) {
            throw err;
            console.log("ERROR!!!")
        }
    });
}

//Async function that waits for the user inputed answers and writes those answers to the README file
async function init() {
    console.log('INIT FUNCTION!!!!');

    const answers = await getUserAnswers();
    console.log(answers);

    markdownData(answers);

    writeToFile("test.md", markdownData(answers));
}

// Calls the init function to start the process
init();