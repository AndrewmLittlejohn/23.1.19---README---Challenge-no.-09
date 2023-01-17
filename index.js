// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');


let answers; 

const markup = `

## Project Title:



## Table of Contents:



## Installation:



## License:



## Contributing:



## Tests:


## Questions: 

`;

/* 
https://wesbos.com/template-strings-html

and then use fs.write file then go to file and click on it to see if its working. 

*/ 

// TODO: Create an array of questions for user input
//const questions = ['What is your name?', ];
/* #region Main */ 
answers = inquirer
.prompt([
  {
    type: 'input',
    message: 'Project Title?',
    name: 'ProjectTitle:',
  },
  {
    type: 'input',
    message: 'What was your motivation?',
    name: 'Motivation'
  },
  // {
  //   type: 'input',
  //   message: 'Why did you build this project?',
  //   name: 'YourWhy'
  // },
  // {
  //   type: 'input',
  //   message: 'What problem does it solve?',
  //   name: 'ProblemSolved'
  // },
  // {
  //   type: 'input',
  //   message: 'What did you learn?',
  //   name: 'whatLearned'
  // },
  // {
  //   type: 'input',
  //   message: 'Provide Installation steps if needed:',
  //   name: 'Installation:'
  // },
  // {
  //   type: 'input',
  //   message: 'Provide instructions and examples for use:',
  //   name: 'Usage'
  // },
  // {
  //   type: 'list',
  //   message: 'Please select your license type.',
  //   choices: ['MIT License', 'GNU AGPLv3', 'The Unlicense'],
  //   name: 'License Selected'
  // },
  // {
  //   type: 'input',
  //   message: 'List collaborator(s), if any, with link to their GitHub profile(s).',
  //   name: 'Collaborators:'
  // },
  // { 
  //   type: 'input',
  //   message: 'list pertinent badges:',
  //   name: 'badges'
  // },
  // { type: 'input',
  //   message: 'Provide examples of tests for your application',
  //   name: 'Tests'
  // },
  // { 
  //   type: 'input',
  //   message: 'Please list any questions?',
  //   //don't understand this one but it is in the acceptance criteria
  //   name: 'questions',
  // }
])
.then ((response) => {

// console.log(response);

//const filename = `ChallengeInput.md`;

  // answers = JSON.stringify(response, null, '\t')

console.log("My motivation is" + " " + response.Motivation);

console.log(`My motivation is ${response.Motivation}`);});





  // fs.appendFile(filename, markup, (err) => 
  // err ? console.error(err) : console.log('Success'));



  // fs.appendFile(filename, JSON.stringify(response, null, '\t'), (err) => 
  //   err ? console.error(err) : console.log('Success'));

// Table of Contents - generate from inquirer list, so if list ever changes the TOC updates dynamically.

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();





// $$$$$ have this run at the end of/to conclude the inquirer capture stepscome after all of the 

// fs.appendFile('readMeData.txt', `${process.argv[2]}\n`, (err) => 
//   err ? console.error(err) : console.log('Data Logged')
// );
/* #endregion */


