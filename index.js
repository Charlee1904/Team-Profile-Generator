const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const empList = [];
const generateHTMLpath = './dist/TeamProfile.html'

// let manager = new Manager("Sonny", "4", "Sonny4@gmail.com","404")

inquirer 
 .prompt ([
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "name",
    },
    {
        name: "id",
        type: "input",
        message: "What is the manager ID?",
      },
      {
        type: "input",
        message: "What is the email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the office number?",
        name: "office",
      },
      {
        type: "list",
        message: "Which would you like to add next?",
        choices:["Engineer","Intern","exit"], 
        name: "addMore",
      },
])
.then(answers => {
  let manager = new Manager(answers.name, answers.id, answers.email, answers.office);
  empList.push(manager);
  // fs.writeFileSync(Htmlfile,"");
  if(answers.addMore === "Engineer")
  {
    addEng();
  }
  else if(answers.addMore === "Intern")
  {
    addIntern();
  }
  else{
    generateHTML();
  }
})
.catch(error => {
  if(error) {
    return console.log(error)
  }
});


function addEng(){
  inquirer 
 .prompt ([
    {
      type: "input",
      message: "What is the Engineers's name?",
      name: "name",
    }, 
    {
        type: "input",
        message: "What is the Engineers ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is their github username?",
        name: "email",
      },
      {
        type: "input",
        message: "What is their role?",
        name: "officeNumber",
      },
  
      {
        type: "list",
        message: "Which would you like to add next?",
        choices:["Engineer","Intern","exit"], 
        name: "addMore",
      },
])
.then(answers => {
  let engineer = new Engineer(answers.name, answers.id, answers.email, answers.officeNumber);
  empList.push(engineer);

  if(answers.addMore === "Engineer")
  {
    addEng();
  }
  else if(answers.addMore === "Intern")
{
  addIntern();
}else {
  generateHTML();
}
})
.catch(error => {
  if(error) {
    return console.log(error)
  }
});
}

function addIntern(){
  inquirer 
 .prompt ([
    {
      type: "input",
      message: "What is the Intern name?",
      name: "name",
    }, 
    {
        type: "input",
        message: "What is the Interns school?",
        name: "school",
      },
      {
        type: "input",
        message: "What is their github username?",
        name: "username",
      },
      {
        type: "input",
        message: "What is their role?",
        name: "role",
      },
      {
        type: "input",
        message: "What is their id?",
        name: "id",
      },
      {
        type: "list",
        message: "Which would you like to add next?",
        choices:["Engineer","Intern","exit"], 
        name: "addMore",
      },
])
.then(answers => {
  let intern = new Intern(answers.name, answers.school, answers.username, answers.role, answers.id);
  empList.push(intern);

  if(answers.addMore === "Engineer")
  {
    addEng();
  }
  else if(answers.addMore === "Intern")
{
  addIntern();
}else {
  generateHTML();
}
})
.catch(error => {
  if(error) {
    return console.log(error)
  }
})

}

function htmlGen(){
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./teamProfile.css">
      <title>Team Profile</title>
  </head>
  <body>
      <div class="navbar">
          <h2>Team Profile</h2>
      </div>`
}

function genTeamMemberHTML(empList)
{
 return ` <div class="teamCard">
 <div class="title">
 <h3>${empList.getName()}-${empList.getRole()}</h3>
 </div>

<div class="cardBody">
 <ul>
     <li>${empList.getId()}</li>
     <li>Name:${empList.getName()}</li>
     <li>Email:${empList.getEmail()}</li>
 </ul>
</div>
</div>`
}
function generateFinalHtml() {
return ` </div>
</body>
</html>`;
}

function generateHTML() {
  fs.writeFileSync(generateHTMLpath,"");
  let htmlData = htmlGen();
  for (var a in empList)
  {
    htmlData += genTeamMemberHTML(empList[a]);
  }
  htmlData += generateFinalHtml()
  fs.writeFileSync(generateHTMLpath,htmlData);
}

// fs.writeFile(fileName,data, function(error) 
// function writeFile(fileName,data){
//     fs.writeFile(fileName, data, function(error){
//       if (error) {
//         return console.log(error)
//       }else {
//         console.log("good")
//       }
//     }
//   )}

  // function init() {
  //   inquirer.prompt(questions)
      // .then(function(employeejs,data){
      //   writeFile(employee);
    //     console.log(data)
    //   }
    
    
    // init();

//  i need to complete and then return prompt

    // if finish is selected inquirer ends
    // if engineer is selected we go to eng
    // if intern is selected we go to intern

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab


// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s 
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team


// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu


// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu


// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated