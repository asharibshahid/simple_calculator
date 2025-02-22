#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "ENTER YOUR FIRST NUMBER", type: "number", name: "firstnumber" },
    {
        message: "ENTER YOUR SECOND NUMBER",
        type: "number",
        name: "secondnumber",
    },
    {
        message: "select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["addition", "substraction", "multiplication", "division"],
    },
]);
if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "substraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please enter a valid number");
}
