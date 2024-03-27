#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 70000; // USD.
let pinCode = 14160;
let myAnswer = await inquirer.prompt([
    {
        name: "yourpin",
        type: "number",
        message: "Please enter your pin code",
    },
]);
if (myAnswer.yourpin === pinCode) {
    console.log("Your pin code is correct!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select anyone option",
            choices: [
                "Cash 1000",
                "Cash 2000",
                "Cash 5000",
                "Cash 10000",
                "Cash 20000",
                "Cash 50000",
                "Withdrawl",
                "Check your Balance",
            ],
        },
    ]);
    if (operationAns.operation === "Withdrawl") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Please enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance. Please enter a valid amount.");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Cash 1000") {
        myBalance -= 1000;
        console.log(`Your remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "Cash 2000") {
        myBalance -= 2000;
        console.log(`Your remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "Cash 5000") {
        myBalance -= 5000;
        console.log(`Your remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "Cash 10000") {
        myBalance -= 10000;
        console.log(`Your remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "Cash 20000") {
        myBalance -= 20000;
        console.log(`Your remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "Cash 50000") {
        myBalance -= 50000;
        console.log(`Your remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "Check your Balance") {
        console.log(`your balance is: ${myBalance}`);
    }
}
else {
    console.log("Your Pin code is inCorrect! Please re-enter your pin accurately.");
}
