// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');
const Engineer = require('./library/Engineer.js');
const Intern = require('./library/Intern.js');
const Manager = require('./library/manager.js');
const path = require("path");
//const generateMarkdown = require('./utils/generateMarkdown.js');
//const markdown=  require('./utils/generateMarkdown.js');

const { writeFile } = require('fs').promises;

//array of employees pushed 

//push manager 
// create 3 classes, manager, intern, engineer
// create instnaces based on responses
var workplace= [];//

//while (questions.goon != 'Finish')
const manquestions = () =>{
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter your name',
    },
    {
      type: 'input',
      name: 'ID',
      message: 'Please enter your employee ID',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email',
    },
    {
      type: 'input',
      name: 'officenum',
      message: 'Please enter your office number',
    },
  ])
 /* .then(
    answers=> 
    {//console.log(answer);
      const {name, ID, email, officenum} = answers;
    const newManager= new Manager(name, ID, email, officenum);
    workplace.push(newManager);
    console.log(workplace);
  }
  )*/
  .then((answers) => writeFile('index.html', makeman(answers)))
.then(() => console.log('manager written'))
.catch((err) => console.error(err));

};

//manquestions();
const keepon = () =>{
  return inquirer.prompt([
    {
      type: 'list',
      name: 'goon',
      message: 'Would you like to add team members?',
      choices: ['Engineer', 'Intern', 'Finish',]
    },    
  ])
}

const engquestions = () =>{
    return inquirer.prompt ([
    {
      type: 'input',
      name: 'engineer',
      message: 'Add engineer Name',
    },
    {
      type: 'input',
      name: 'eid',
      message: 'Add engineer employee ID',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Add your email',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Add your github username',
    },
    {
      type: 'list',
      name: 'goon',
      message: 'Would you like to add team members?',
      choices: ['Engineer', 'Intern', 'Finish'],
  }
])
.then(
  answers=> 
  {//console.log(answer);
    const {name, ID, email, github} = answers;
  const newEngineer= new Engineer(name, ID, email, github);
  workplace.push(newEngineer);
  console.log(workplace);}
)
.then((answers) => appendFile('index.html', makeEng(answers)))
.then(() => console.log('Engineer written'))
.catch((err) => console.error(err));
};


const intQuestions= () =>{
  inquirer.prompt ([
    {
      type: 'input',
      name: 'intern',
      message: 'Add Intern Name',
    },
    {
      type: 'input',
      name: 'iid',
      message: 'Add Intern employeed ID',
    },
    {
      type: 'input',
      name: 'iemail',
      message: 'Add Intern email',
    },
    {
      type: 'input',
      name: 'school',
      message: 'Add Intern School Name',
    },
    {
      type: 'list',
      name: 'goon',
      message: 'Would you like to add team members?',
      choices: ['Engineer', 'Intern', 'Finish'],
  }
  ])

  .then(
    answers=> 
    {//console.log(answer);
      const {name, ID, email, school} = answers;
    const newIntern= new Intern(name, ID, email, school);
    workplace.push(newIntern);
    console.log(workplace);}
  )
  .then((answers) => appendFile('index.html', makeInt(answers)))
.then(() => console.log('Intern written'))
.catch((err) => console.error(err));
};

//manquestions();

/*if (answers.goon === "Engineer"){
  engquestions();
}

if (answers.goon ==="Intern"){
  intQuestions();
}

if (answers.goon ==="Finish"){
  finish()
  .then(() => appendFile('index.html', finish()))
}*/


const makeman = ({name, ID, email, officenum}) =>
  `# <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <header class="p-5 mb-4 header bg-light">
      <div class="card">
        <h1 class="display-4"> ${name}</h1>
        <p class="id">${ID}</p>
        <ul class="list-group">
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">LinkedIn: ${officenum}</li>
        </ul>
      </div>
    </header>
    `
;

const makeEng = ({name,ID, email,github})=>
  `<header class="p-5 mb-4 header bg-light">
  <div class="card">
    <h1 class="display-4"> ${name}</h1>
    <p class="id">${ID}</p>
    <ul class="list-group">
      <li class="list-group-item">Email: ${email}</li>
      <li class="list-group-item">LinkedIn: ${github}</li>
    </ul>
  </div>
</header>`
;

const makeInt = ({name,ID, email,school})=>
  `<header class="p-5 mb-4 header bg-light">
  <div class="card">
    <h1 class="display-4"> ${name}</h1>
    <p class="id">${ID}</p>
    <ul class="list-group">
      <li class="list-group-item">Email: ${email}</li>
      <li class="list-group-item">LinkedIn: ${school}</li>
    </ul>
  </div>
</header>`
;

const finish = ({})=>
  `</body>
  </html>`
;


async function init () {
  manquestions()
  await keepon(response); 
    if(response.choices== 'Engineer')
       engquestions();
    if(response.choices== 'Intern')
    intQuestions();
  
};

// TODO: Create a function to initialize app
// function init() {
// manquestions()
// .then((responses) => writeFile('index.html', makehtml(responses)))
// .then(() => console.log('html written'))
// .catch((err) => console.error(err));


/*
title test
description test
installation test
usage test
license test
contributors test
testing test
github test
email test
*/

// Function call to initialize app
init();
