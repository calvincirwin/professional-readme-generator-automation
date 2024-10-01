// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is this project used?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can people contribute to this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the test instructions?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    }
];



// Function to generate the content for README
function generateReadme(answers) {
    return `
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  \`\`\`
  ${answers.installation}
  \`\`\`
  
  ## Usage
  \`\`\`
  ${answers.usage}
  \`\`\`
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  \`\`\`
  ${answers.tests}
  \`\`\`
  
  ## License
  This project is licensed under the ${answers.license} license.
  
  ## Questions
  If you have any questions, please reach out via GitHub: [${answers.github}](https://github.com/${answers.github})  
  or send an email to: ${answers.email}
  `;
  }







// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => {
      if (err) {
        console.error('Error writing the file:', err);
      } else {
        console.log('README.md has been generated successfully!');
      }
    });
  }
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeContent = generateReadme(answers);
      writeToFile('README.md', readmeContent);
    });
  }

// Function call to initialize app
init();
