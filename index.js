const fs = require('fs');
const util = require('util');
const axios = require('axios');
const inquirer = require('inquirer');
const markdownData = require('./utils/generateMarkdown');

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
            message: 'What license does your project use?'
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

function writeToFile(fileName, data) {
    console.log(fileName, data);
    fs.writeFile(fileName, data, "utf8", function(err) {
        if (err) {
            throw err;
            console.log("ERROR!!!")
        }
    });
}

async function init() {
    console.log('INIT FUNCTION!!!!');

    const answers = await getUserAnswers();
    console.log(answers);

    markdownData(answers);

    writeToFile("test.md", markdownData(answers));
}

init();