// import inquirer from "inquirer";
// import Choice from "inquirer/lib/objects/choice.js";
// let myBalance = 20000;
// let myPin = 12345;
// console.log("Welcom to ATM!")
// let pinAnswer = await inquirer.prompt([
//   {
//     name: "pin",
//     type: "number",
//     message: "Enter Your Pin Code!"
//   }
// ])
// if (pinAnswer.pin == myPin) {
//   console.log("Pin is correct, successfully login!");
//   console.log(`Current account balance is ${myBalance}`)
//   let operationAns = await inquirer.prompt([
//     {
//       name: "operation",
//       type: "list",
//       message: "Select an operation!",
//       choices: "Withdraw Amount, Check Balance"
//     }
//   ])
//   if (operationAns.operation == "Withdraw Amount") {
//     let amountAns = await inquirer.prompt([
//       {
//         name: "amount",
//         type: "number",
//         message: "Enter the amount to withdraw:"
//       }
//     ])
//     if (amountAns.amount > myBalance) {
//       console.log("Insufficient Balance");
//     }
//     else {
//       myBalance -= amountAns.amount;
//       console.log(`${amountAns.amount} withdraw successfully`);
//       console.log(`Your Remaining Balance is: ${myBalance}`);
//     }
//   }
//   else if (operationAns.operation === "check balance"){
//     console.log(`your current balance is:${myBalance}`)
//   }
//   else{
//     console.log("Pin is Incorrect, Try Again!")
//   }
// }
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 12345;
console.log("Welcome to ATM!");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin Code!"
    }
]);
if (pinAnswer.pin == myPin) {
    console.log("Pin is correct, successfully logged in!");
    console.log(`Current account balance is ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation!",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdrawn successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your current balance is: ${myBalance}`);
    }
}
else {
    console.log("Pin is Incorrect, Try Again!");
}
