// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');
let answers; 
const filename = `ChallengeInput.md`;

/* 
https://wesbos.com/template-strings-html

and then use fs.write file then go to file and click on it to see if its working. 
*/ 
let year = new Date();




// TODO: Create an array of questions for user input
//const questions = ['What is your name?', ];
/* #region Main */ 
inquirer
.prompt([
  {
    type: 'input',
    message: 'Please enter your name, as you would like it to appear for legal purposes',
    name: 'name',
  },
  {
    type: 'input',
    message: 'Provide the email address you want associated with this project',
    name: 'email',
  },
  {
    type: 'input',
    message: 'please enter your Github username',
    name: 'userID', 
  },
  {
    type: 'input',
    message: 'Project Title?',
    name: 'ProjectTitle',
  },
  {
    // ideally the question would only populate if the GNU license is selected
    type: 'input',
    message: 'One line description',
    name: 'OneLineDescription',
  },
  {
    type: 'input',
    message: 'What was your motivation?',
    name: 'Motivation',
  },
  {
    type: 'input',
    message: 'Why did you build this project?',
    name: 'YourWhy',
  },
  {
    type: 'input',
    message: 'What problem does it solve?',
    name: 'ProblemSolved',
  },
  {
    type: 'input',
    message: 'What did you learn?',
    name: 'whatLearned',
  },
  {
    type: 'input',
    message: 'Provide Installation steps if needed:',
    name: 'Installation:',
  },
  {
    type: 'input',
    message: 'Provide instructions and examples for use:',
    name: 'Usage',
  },
  {
  type: 'list',
  message: 'Please select your license type.',
  choices: ['MIT License', 'GNU AGPLv3', 'The Unlicense'],
  name: 'LicenseSelected',
  },
  {
    type: 'input',
    message: 'List collaborator(s), if any, with link to their GitHub profile(s).',
    name: 'Collaborators',
  },
  { 
    type: 'input',
    message: 'list pertinent badges:',
    name: 'badges',
  },
  { type: 'input',
    message: 'Provide examples of tests for your application',
    name: 'Tests',
  },
])
.then ((response) => {

  const filename = `ChallengeInput.md`;
  console.log("My motivation is" + " " + response.LicenseSelected);

  let licenseStuff = response.LicenseSelected
  switch(licenseStuff){

    case 'MIT License':
        console.log(`Copyright ${year.getFullYear()} ${response.name}

        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
        to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
        and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
        IN THE SOFTWARE.`);
        break;
    case 'GNU AGPLv3':
        console.log(`${response.ProjectTitle} + "," + ${response.OneLineDescription} \n
        ${response.OneLineDescription} \n
        Copyright (C) ${year.getFullYear()} ${response.name}
    
        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU Affero General Public License as
        published by the Free Software Foundation, either version 3 of the
        License, or (at your option) any later version.
    
        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Affero General Public License for more details.
    
        You should have received a copy of the GNU Affero General Public License
        along with this program.  If not, see <https://www.gnu.org/licenses/>.`);
        break;
    case 'The Unlicense':
        console.log('The Unlicense legal stuff');
        break;
    default: console.log('add manually');
    }

  let markup = `

  # ${response.ProjectTitle}

  ## Description:

  - What was your Motivation? \n
  ${response.Motivation}
  - Why did you build this project? \n
  ${response.YourWhy}
  - What problem does it solve? \n
  ${response.ProblemSolved}
  - What did you learn? \n
  ${response.whatLearned}
  ## Table of Contents:


  ## Installation:

  ${response.Installation}

  ## License:

  ${response.LicenseSelected}

  ## Contributing:

  ${response.Collaborators}

  ## Badges:

  ${response.badges}
  
  ## Tests:

  ${response.Tests}

  ## Questions: 

  [Please contact me via email](${response.email}) with any questions \n
  [GitHub Profile](https://github.com/${response.userID})

  `;

  fs.appendFile(filename, markup, (err) => 
  err ? console.error(err) : console.log('Success'))

});



  
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



