"use strict"
const atm = require("./atm")
const prompt = require("prompt-sync")();

atm.validatePin()

function mainMenu (){
    const menu = parseInt(prompt("Welcome Customer! Please select from the options below:(1)Balance(2)Withdraw(3)Deposit(4)Exit\t"))
    switch (menu) {
        case 1:
            atm.getBalance()
            mainMenu()
        case 2:
            atm.withdraw()
            break;
        case 3:
            atm.deposit()
            break;
        case 4:
            break;
        default:
            console.log("default")
    }
}

mainMenu()