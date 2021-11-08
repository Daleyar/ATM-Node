"use strict"
const account = require("./account")
const prompt = require("prompt-sync")();

function getBalance(){
    console.log(`Your current balance is $${account.balance}.`)
}

function withdraw(){

}

function deposit(){

}

function validatePin(){
    let userPin = parseInt(prompt("Enter Your Pin\t"));
    if(userPin === account.pin){
        console.log("Pin Entered Correctly");
    }
    else{
        console.log("Incorrect Pin. Try Again");
        validatePin()
    }
}

//exports
module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.validatePin = validatePin;