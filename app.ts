#! /usr/bin/env node 
import inquirer from "inquirer";
let balance = 10000;
let pin = 12345;
let pinAnswer = await inquirer.prompt([
  { name: "p1", message: "Enter your pin", type: "number" },
]);
if (pinAnswer.p1 === pin) {
  console.log("Correct pin code");
  let opr = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance", "fastcash", "deposit"],
    },
  ]);
  if (opr.operation === "withdraw") {
    let amount = await inquirer.prompt([
      {
        name: "amount1",
        message: "Enter the amount  you want to withdraw ",
        type: "number",
      },
    ]);
    if (amount.amount1 < balance) {
      balance -= amount.amount1;
      console.log("your remaining  balance is: " + balance);
    } else {
      console.log("insufficient Balance");
    }
  } else if (opr.operation === "check balance") {
    console.log("your balance is: " + balance);
  } else if (opr.operation === "fastcash") {
    let fast = await inquirer.prompt([
      {
        name: "fast_op",
        message: "Please select a option:",
        type: "list",
        choices: ["1000", "3000", "5000"],
      },
    ]);
    if (fast.fast_op === "1000") {
      balance -= fast.fast_op;
      console.log(`your remaining balance is: ${balance} `);
    } else if (fast.fast_op === "3000") {
      balance -= fast.fast_op;
      console.log(`your remaining balance is: ${balance} `);
    } else if (fast.fast_op === "5000") {
      balance -= fast.fast_op;
      console.log(`your remaining balance is: ${balance} `);
    }
  } else if (opr.operation === "deposit") {
    let Udeposit = await inquirer.prompt([
      {
        name: "user_deposit",
        message: "How much money do you want to deposit ",
        type: "number",
      },
    ]);
    balance += Udeposit.user_deposit;
    console.log("deposit successfull");
    console.log(`your current balance is ${balance}`);
  }
} else {
  console.log("incorrect password");
}
