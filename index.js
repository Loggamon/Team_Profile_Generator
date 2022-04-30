const inquirer = require("inquirer");
const fs = require("fs");
const createCard = require("./src/card-template");
const createHTML = require("./src/html-template");
const createStyles = require("./src/css-template");

const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

const myTeam = [];

function managerForm() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is their ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "what is their Email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is their office number?",
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
    });
}

function directory() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which position will you add next?",
        name: "directory",
        choices: ["Manager", "Engineer", "Intern", "Finish"],
      },
    ])
    .then((data) => {
      console.log(myTeam);

      switch (data.directory) {
        case "Manager":
          managerForm();
          break;
        case "Engineer":
          engineerForm();
          break;
        case "Intern":
          internForm();
          break;
        case "Finish":
          fs.writeFileSync(
            "./dist/index.html",
            createHTML.createHTML(),
            (err) =>
              err ? console.error(err) : console.log("HTML Top Complete!")
          );
          fs.writeFileSync("./dist/styles.css", createStyles(), (err) =>
            err ? console.error(err) : console.log("CSS Complete!")
          );
          myTeam.forEach((oneTeam) => {
            fs.appendFileSync("./dist/index.html", createCard(oneTeam), (err) =>
              err ? console.error(err) : console.log("Cards Complete!")
            );
          });
          fs.appendFileSync(
            "./dist/index.html",
            createHTML.bottomHTML(),
            (err) =>
              err ? console.error(err) : console.log("HTML Bottom Complete!")
          );
          break;
      }
    });
}

function engineerForm() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is their ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is their Email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is their Git-username?",
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
    });
}

function internForm() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is their ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is their Email?",
        name: "email",
      },
      {
        type: "input",
        message: "What school did they attend?",
        name: "school",
      },
    ])
    .then((data) => {
      //console.log(data);
      const newIntern = new Intern(data.name, data.id, data.email, data.school);
      //console.log(newIntern);
      myTeam.push(newIntern);
      directory();
      //return newIntern;
    });
}

managerForm();
