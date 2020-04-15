const fs = require('fs');
const util = require('util');
const axios = require('axios');
const inquirer = require('inquirer');
const markdownData = require('./utils/generateMarkdown.js');

async function getUserAnswers() {
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
        }
    ]);
}

function writeToFile(fileName, data) {}

function init() {

}

init();
getUserAnswers();
console.log(getUserAnswers);