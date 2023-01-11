const inquirer = require('inquirer');
const fs = require ("fs");
const fileGenerator = require("./generateindex.html")

function Manager (name ,employeeId, email, officeNumber){
    this.name;
    this.employeeId;
    this.email;
    this.officeNumber;
};
function Enginner (name, employeeId, email, GitHub){
    this.name,
    this.employeeId,
    this.email,
    this.GitHub
};
function Intern (name, employeeId, email, school){
    this.name,
    this.employeeId,
    this.email,
    this.school
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
    name: 'manager office number:'
},
]