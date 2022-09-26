"use strict";
exports.__esModule = true;
var inquirer = require("inquirer");
inquirer["default"].prompt([{
        name: "first_name",
        message: "what is your name ?"
    }]).then(function (answers) {
    console.log("you answered : ".concat(answers.first_name));
});
