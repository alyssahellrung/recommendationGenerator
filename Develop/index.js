const inquirer = require("inquirer");
const fs = require ("fs");
const markdown = require ("./utils/generateMarkdown");

function init() {
  inquirer.prompt([
    {
      type: "input",
      name: "introduction",
      message: "Describe your professional role in one sentence or less. Make sure to include the name of your workplace."
    },
    {
      type: "input",
      name: "history",
      message: "How long have you known the person you are recommending and in what capacity?"
    },
    {
      type: "input",
      name: "evaluation",
      message: "Give a one-paragraph, honest evaluation of the person you are recommending. Be sure to address their skills, accomplishments, ability to collaborate, ethics, and personality."
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
        "highly recommend",
        "recommend",
        "have some concerns but still recommend",
        "do not recommended"
      ]
    },
    {
      type: "input",
      name: "name",
      message: "What is your full name?"
    },
    {
      type: "input",
      name: "title",
      message: "What is your professional title or role?"
    },
    {
      type: "input",
      name: "recname",
      message: "What is the full name of the person you are recommending?"
    },
    {
      type: "list",
      name: "pronoun",
      message: "Which of the of the following pronouns does the person you are recommending go by?",
      choices: [
        "her",
        "him",
        "them"
      ]
    }

  ]).then(function(data) {
    console.log(data);
    
  fs.writeFile("REC.md", markdown(data), function(err, data) {
    if (err) {
      throw err;
    } else 
    console.log("Success! You have a newly generated markdown file called REC.md!");
  });  
  })
  .catch(function (err) {
    if (err) throw err
  });
}
init();