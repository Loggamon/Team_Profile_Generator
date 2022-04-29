const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

const myTeam = []

function managerForm() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Name?",
                name: "name",
            },
            {
                type: "input",
                message: "ID number?",
                name: "id",
            },
            {
                type: "input",
                message: "Email?",
                name: "email",
            },
            {
                type: "input",
                message: "Office number?",
                name: "officeNumber",
            },
        ])
        .then((data) => {
            //console.log(data);
            const newManager = new Manager(
                data.name,
                data.id,
                data.email,
                data.officeNumber
            );
            console.log(newManager);
            myTeam.push(newManager);
            //console.log(myTeam);
            directory();
        })
        
}

function directory() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Which position are you adding?",
                name: "directory",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "Finish"
                ],
            }
        ])
        .then(data => {
            console.log(myTeam);

            if (data.directory === "Manager") {
                managerForm();
            } else if (data.directory === "Engineer"){
                engineerForm();
            } else if (data.directory === "Intern") {
                internForm();
            }
             
        })
}

function engineerForm() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Name?",
                name: "name",
            },
            {
                type: "input",
                message: "ID number?",
                name: "id",
            },
            {
                type: "input",
                message: "Email?",
                name: "email",
            },
            {
                type: "input",
                message: "Git Username?",
                name: "github",
            },
        ])
        .then((data) => {
            //console.log(data);
            const newEngineer = new Engineer(
                data.name,
                data.id,
                data.email,
                data.github
            );
            //console.log(newEngineer);
            myTeam.push(newEngineer);
            //console.log(myTeam);
            directory();
        })
        
}

function internForm() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Name?",
                name: "name",
            },
            {
                type: "input",
                message: "ID number?",
                name: "id",
            },
            {
                type: "input",
                message: "Email?",
                name: "email",
            },
            {
                type: "input",
                message: "School?",
                name: "school",
            },
        ])
        .then((data) => {
            //console.log(data);
            const newIntern = new Intern(
                data.name,
                data.id,
                data.email,
                data.school
            );
            //console.log(newIntern);
            myTeam.push(newIntern);
            directory();
            //return newIntern;
        })
        
}

managerForm();