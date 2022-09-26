"use strict";
exports.__esModule = true;
console.log("hello");
var nameIdObject = { id: 2, name: "anotherName", print: function () { } };
var obj = { print: function () { } };
console.log(obj);
nameIdObject = { id: 2, name: "anotherName", print: function () { } };
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
function calulcate(a, b, c) {
    return (a * b) + c;
}
console.log(calulcate(2, 3, 1));
//import('inquirer').then((inquirer) => {
var inquirer = require("inquirer");
inquirer["default"].prompt([{
        name: "fname",
        message: "what is your name?"
    }]).then(function (answers) {
    console.log("you answered: ".concat(answers.fname));
});
//});
