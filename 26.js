const prompt = require('prompt-sync')()
let input =prompt("Enter a input : ")
try{
    let reverse=input.split("").reverse().join(); 
    console.log("Reversed String is : "+reverse);
}
catch(err){
    console.log("Error : "+err.message);
}
finally{
    console.log(`Type of ${input} is ${typeof(input)}`);
}