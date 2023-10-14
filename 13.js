const prompt=require('prompt-sync')()
let string = prompt("Enter a string : ");
let reverse = string.split("").reverse().join("");
if(string==reverse){
    console.log('The given String is Palindrome');
}else{
    console.log("String is not Palindrome");
}