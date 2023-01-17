const inquirer = require('inquirer');
const fs = require ("fs");
const Generate = require('./generateIndexHtml.js');
const { default: Choices } = require('inquirer/lib/objects/choices.js');
const cardCreator = Generate.method;
const generateIndex = Generate.method2;
const employees = []
const thing = []

function Manager(name ,employeeId, email, officeNumber){
    this.name = name;
    this.employeeId = employeeId;
    this.email = email;
    this.officeNumber = officeNumber;
};
// function Enginner (name, employeeId, email, GitHub){
//     this.name = name;
//     this.employeeId = employeeId;
//     this.email = email;
//     this.GitHub = GitHub;
// };
// function Intern (name, employeeId, email, school){
//     this.name = name;
//     this.employeeId = employeeId;
//     this.email = email;
//     this.school = school;
// };

const manager = [{
    type: 'input',
    message: 'manager name:',
    name: 'name',
},
{
    type: 'input',
    message: 'ManagerID:',
    name: 'employeeID',
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
},
]
const engineer = [{
    type: 'input',
    message: 'engineer name:',
    name: 'name',
},
{
    type: 'input',
    message: 'employeeID:',
    name: 'employeeID',
},
{
    type: 'input',
    message: 'email:',
    name: 'email'
},
{
    type: 'input',
    message: 'GitHub UserName:',
    name: 'Github'
},
]

const intern = [{
    type: 'input',
    message: 'intern name:',
    name: 'name',
},
{
    type: 'input',
    message: 'employeeID:',
    name: 'employeeID',
},
{
    type: 'input',
    message: 'email:',
    name: 'email'
},
{
    type: 'input',
    message: 'school of the intern:',
    name: 'school'
}
]

const employeeType = [{
    type: 'list',
    message: 'Engineer or Intern?',
    name: 'engineerIntern',
    choices: [
        'Engineer',
        'Intern'
    ]
}]

const newEmployee = [{
    type: 'confirm',
    message: 'Add employee?',
    name: 'addEmployee'
}]
function employee(){
    inquirer.prompt(employeeType)
    .then( async (answers) => {
        var employee2 = ""

      function ya() {if(answers.engineerIntern == "Intern"){
           employee2 = inquirer.prompt(intern)
        } else {employee2 = inquirer.prompt(engineer)}
        return employee2}
        await ya()
        return employee2
})
.then((answers) => {
    employees.push(answers)
    console.log(employees)
    return inquirer.prompt(newEmployee)
})
    .then((answer) => {
         if(answer.addEmployee){
             return employee()
         } else {
            for(let i=0; i < employees.length; i++){
                var fullCard = cardCreator(employees[i])
                    thing.push(fullCard);
            }
            console.log(thing)
            const html = generateIndex(thing.join(" "))
            fs.writeFile("./GeneratedIndex.html", html, error =>{
            !error ? console.log('success!')
            : console.log('an error occured')
            })}
        })
}
Manager.prototype.printStats = function () {
    console.log(
      `Name: \nProfession: ${this.employeeId}\nAge: ${this.email}\nStrength: ${this.officeNumber}`
    );
    console.log('\n-------------\n');
  };

const charlie = new Manager("Charlie", '2', "example", '2')
charlie.printStats()

inquirer
    .prompt(manager)
.then((answers) => {
    employees.push(answers)
    inquirer.prompt(newEmployee)
.then((answer) => {
if(answer.addEmployee){
    return employee()
} else {console.log("no")}
})
    
    // var person = answers.name
    // console.log(answers.email)
    // person = new Manager(answers.name, answers.managerID, answers.email, answers.officeNumber)
    // console.log(person)
    // const card = cardCreator(answers)
    // console.log(card)
    // const html = generateIndex(card)
    // fs.writeFile("./GeneratedIndex.html", html, error =>{
    // !error ? console.log('success!')
    // : console.log('an error occured')
    // })
 })
