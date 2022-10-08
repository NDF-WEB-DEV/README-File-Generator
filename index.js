// TODO: Include packages needed for this application
const fs = require('fs');  // file system from node.js
const inquirer = require('inquirer');  // inquirer npm package
const generateMarkdown = require('./utils/generateMarkdown.js');  //utility file

//This file invokes the markdown file
const requireFile = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// const questionsUserInputs = process.argv[2];

// inquirer Questionaire array object starts
inquirer 
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Enter a project description?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What is your project name?',
            name: 'project_name',
        },
        {
            type: 'list',
            choices: ['Apache','GNU-v3','MIT','BSD 2-Clause','BSD 3-Clause','Boost','Creative Commons','IBM','none'],
            message: 'What kind of license should your project have?',
            name: 'license',
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What command should be run to run tests?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'How should I report any issues?',
            name: 'issues',
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributiong to the repo?',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'Should I add any credits?',
            name: 'credits',
        }
    ])
    .then((data) => {  //like a fetch call uses then to ...
        console.log(data);  //print the data on console
        //write the file using the fs.write file function 
        //First parameter is the path and name of the file to be produce
        //The second parameter connects the ultility file to the data produced by answers
        fs.writeFile('README.md', generateMarkdown(data), err =>    
        err ? console.error(err) : console.log("Generating README.md file...") // Error catch : if no errors then message file is beign produced. 
    )

        // TODO: Create a function to initialize app
        function init() {}

        // Function call to initialize app
        init();
    })