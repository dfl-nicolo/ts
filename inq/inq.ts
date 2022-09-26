import * as inquirer from 'inquirer';

inquirer.default.prompt([{ 
	name: "first_name",
	message: "what is your name ?"
}]).then(answers => {
	console.log(`you answered : ${answers.first_name}`);
});
