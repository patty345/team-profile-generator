// All the dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const jest = require("jest");

// Constructors 
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const DIST_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(DIST_DIR, "index.html");

const render = require("./src/page-template.js");

const teamArr = [];
const idArr = [];

// Function to initalize the application
function initApp() {
  // Adding the manager info
  function addManager() {
    console.log("Start building your team profile");
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the managers name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter the managers name";
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the mangers ID?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter managers ID";
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the mangers email?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Email address is blank";
          },
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the managers office number ?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return "Please enter correct number";
          },
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamArr.push(manager);
        idArr.push(answers.managerId);
        addTeam();
      });
  }
 // Adding the team choices 
  function addTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "Who do you want to add next?",
          choices: ["Engineer", "Intern", "End application"],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            generateHTML();
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineers name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter engineer name";
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineers id?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter an Engineers Id";
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineers email?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter engineer email";
          },
        },

        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer github username?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter the engineers Github username";
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamArr.push(engineer);
        idArr.push(answers.engineerId);
        addTeam();
      });
  }
  // Adding the intern
  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the interns name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter interns name";
          },
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern Id?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter interns Id";
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the interns email?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter email address";
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "What is the interns school name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter interns school";
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamArr.push(intern);
        idArr.push(answers.internId);
        addTeam();
      });
  }
  // Generating the html 
  function generateHTML() {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    console.log("Your Team has been created");
    fs.writeFileSync(outputPath, render(teamArr), "utf-8");
  }
  addManager();
}

initApp();
