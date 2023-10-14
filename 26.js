const prompt = require('prompt-sync')()
let input =prompt("Enter a input")
try{
    let reverse=input.split().reverse().join(); 
    console.log("Reversed String is :")
}