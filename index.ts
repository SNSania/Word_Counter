import inquirer from 'inquirer';

const answer: {
    sentence: string
    
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Please write your statement for word count:"


    }
])
if (answer.sentence && typeof answer.sentence === 'string'){
    
const words = answer.sentence.trim().split(/\s+/);
console.log("Your sentence word count is:", words.length);
}