"use strict"
const account = require("./account")

function getBalance(){
    account.balance
}

function withdraw(){

}

function deposit(){

}

function validatePin(){
    console.log("this is where we validdate our pin")
    account.pin
}

function mainMenu(){
}


//exports
module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.validatePin = validatePin;
module.exports.mainMenu = mainMenu;