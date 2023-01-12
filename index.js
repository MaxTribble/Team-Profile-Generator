const inquirer = require('inquirer');
const fs = require ("fs");
const Generate = require('./generateIndexHtml.js');
const cardCreator = Generate.method;
const generateIndex = Generate.method2;

function Manager(name ,employeeId, email, officeNumber){
    this.name = name;
    this.employeeId = employeeId;
    this.email = email;
    this.officeNumber = officeNumber;
};
function Enginner (name, employeeId, email, GitHub){
    this.name = name;
    this.employeeId = employeeId;
    this.email = email;
    this.GitHub = GitHub;
};
function Intern (name, employeeId, email, school){
    this.name = name;
    this.employeeId = employeeId;
    this.email = email;
    this.school = school;
};

const questions = [{
    type: 'input',
    message: 'manager name:',
    name: 'name',
},
{
    type: 'input',
    message: 'employeeID:',
    name: 'managerID',
},
{
    type: 'input',
    message: 'manager email:',
    name: 'email'
},
{
    type: 'input',
    message: 'manager office number:',
    name: 'officeNumber'
}
]
Manager.prototype.printStats = function () {
    console.log(
      `Name: \nProfession: ${this.employeeId}\nAge: ${this.email}\nStrength: ${this.officeNumber}`
    );
    console.log('\n-------------\n');
  };

const charlie = new Manager("Charlie", '2', "example", '2')
charlie.printStats()

inquirer
    .prompt(questions)
.then((answers) => {
    // var person = answers.name
    // console.log(answers.email)
    // person = new Manager(answers.name, answers.managerID, answers.email, answers.officeNumber)
    // console.log(person)
    const card = cardCreator(answers)
    console.log(card)
    const html = generateIndex(card)
    fs.writeFile("./GeneratedIndex.html", html, error =>{
    !error ? console.log('success!')
    : console.log('an error occured')
    })
})
