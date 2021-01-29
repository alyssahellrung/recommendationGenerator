const inquirer = require("inquirer");
const fs = require ("fs");
const markdown = require ("./utils/generateMarkdown");

function init() {
  inquirer.prompt([
    {
      type: "input",
      name: "introduction",
      message: "Describe your professional role in one sentence or less."
    },
    {
      type: "input",
      name: "history",
      message: "How long have you known the person you are recommending and in what capacity?"
    },
    {
      type: "input",
      name: "evaluation",
      message: "Give an honest evaluation of the person you are recommending. Be sure to address their skills, accomplishments, ability to collaborate, ethics, and personality."
    },
    {
      type: "input",
      name: "conclusion",
      message: "How would you sum up your evaluation of this person?"
    },
    {
      type: "list",
      name: "rating",
      message: "What rating would you give this person from the choices below?",
      choices: [
        "Highly recommended",
        "Recommended",
        "Recommended with some concerns",
        "Not recommended"
      ]
    },
    {
      type: "input",
      name: "name",
      message: "What is your full name and professional title?"
    }

  ]).then(function(data) {
    console.log(data);
    
  fs.writeFile("REC.md", markdown(data), function(err, data) {
    if (err) {
      throw err;
    } else 
    console.log("Success! You have a newly generated markdown file!");
  });  
  })
  .catch(function (err) {
    if (err) throw err
  });
}
init();