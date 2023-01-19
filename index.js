// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');

const filename = `GeneratedReadMe.md`;

let year = new Date();


// TODO: Create an array of questions for user input
const questions = ['Please enter your name, as you would like it to appear for legal purposes', 'Provide the email address you want associated with this project', 'please enter your Github username',
'Project Title?', 'One line description', 'What was your motivation?', 'Why did you build this project?', 'What problem does it solve?', 'What did you learn?', 'Provide Installation steps if needed:'
, 'Provide instructions and examples for use:', 'Please select your license type.', 'List collaborator(s), if any, with link to their GitHub profile(s).', 'Provide examples of tests for your application'];



inquirer
.prompt([
  {
    type: 'input',
    message: questions[0],
    name: 'name',
  },
  {
    type: 'input',
    message: questions[1],
    name: 'email',
  },
  {
    type: 'input',
    message: questions[2],
    name: 'userID', 
  },
  {
    type: 'input',
    message: questions[3],
    name: 'ProjectTitle',
  },
  {
    // ideally the question would only populate if the GNU license is selected
    type: 'input',
    message: questions[4],
    name: 'OneLineDescription',
  },
  {
    type: 'input',
    message: questions[5],
    name: 'Motivation',
  },
  {
    type: 'input',
    message: questions[6],
    name: 'YourWhy',
  },
  {
    type: 'input',
    message: questions[7],
    name: 'ProblemSolved',
  },
  {
    type: 'input',
    message: questions[8],
    name: 'whatLearned',
  },
  {
    type: 'input',
    message: questions[9],
    name: 'Installation',
  },
  {
    type: 'input',
    message: questions[10],
    name: 'Usage',
  },
  {
  type: 'list',
  message: questions[11],
  choices: ['MIT License', 'GNU AGPLv3', 'The Unlicense'],
  name: 'LicenseSelected',
  },
  {
    type: 'input',
    message: questions[12],
    name: 'Collaborators',
  },
  { type: 'input',
    message: questions[13],
    name: 'Tests',
  },
])
.then ((response) => {

  const filename = `ChallengeInput.md`;
  console.log("My motivation is" + " " + response.LicenseSelected);

  function getBadge(){

    var badge;

    let badgeType = response.LicenseSelected;

    switch(badgeType){

      case 'MIT License':
          
        badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
        break;

      case 'GNU AGPLv3':
          
        badge = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`
        break;
      
      case 'The Unlicense':
        
        badge = `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`
        break;
      default: console.log('add manually');
    }
    return badge;
  }

  function getLegalese() {
 
    var msg
    let licenseStuff = response.LicenseSelected
  
     switch(licenseStuff){
  
        case 'MIT License':
            
msg =`Copyright ${year.getFullYear()} ${response.name}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
IN THE SOFTWARE.`;
break;
case 'GNU AGPLv3':
msg = `${response.ProjectTitle} \n
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
along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
break;
case 'The Unlicense':

msg = `This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>`;
break;
default: console.log('add manually');
      }
      return msg;
    }

let markup = `

# ${response.ProjectTitle}

${getBadge()}

## Description:

#### - What was your Motivation? \n
${response.Motivation} \n
#### - Why did you build this project? \n
${response.YourWhy} \n
#### - What problem does it solve? \n
${response.ProblemSolved} \n
#### - What did you learn? \n
${response.whatLearned} \n 

## Table of Contents:

<a href="#description">Description</a> \n
<a href="#installation">Installation</a> \n
<a href="#usage">Usage</a> \n
<a href="#license">License</a> \n
<a href="#contributing">Contributing</a> \n
<a href="#tests">Tests</a> \n
<a href="#questions">Questions</a> \n

## Installation:

${response.Installation} 

## Usage:

${response.Usage}

## License:

${response.LicenseSelected}
${getLegalese()} 

## Contributing:

${response.Collaborators}

## Tests:

${response.Tests}

## Questions: 

  
[Please contact me via email](mailto:${response.email}) with any questions \n

[GitHub Profile](https://github.com/${response.UserId})

`;

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

  fs.appendFile(filename, markup, (err) => 
  err ? console.error(err) : console.log('Success'))

});


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();




/* #endregion */



