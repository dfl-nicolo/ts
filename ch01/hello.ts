console.log(`hello`);

var nameIdObject = { id: 2, name: "anotherName", print() { } };
var obj = { print() { } };
console.log(obj);
nameIdObject = { id: 2, name: "anotherName", print() { } };
obj = nameIdObject;
console.log(obj);

/**
 * 
 * Given numbers a, b, c return (a * b) + c;
 *
 * @param a	multiplicator value
 * @param b	multiplicator value
 * @param c	addition value
 */
function calulcate(a: number, b: number, c: number): number {
	return (a * b) + c;
}

console.log(calulcate(2, 3, 1));

//import('inquirer').then((inquirer) => {
import * as inquirer from "inquirer"
	inquirer.default.prompt([{
		name: "fname",
		message: "what is your name?"
	}]).then(answers => {
		console.log(`you answered: ${answers.fname}`);
	});
//});
