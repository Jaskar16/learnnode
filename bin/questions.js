import inquirer from "inquirer";

let answers = await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'number',
        name: 'age',
        message: 'What is your age?',
    },
]);

console.log(`Hello ${answers.name}!!!!`);
console.log(`You are ${answers.age} years old!`);