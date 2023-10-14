const PromptSync = require('prompt-sync');

const prompt = require('prompt-sync')()
function main(){
    let num1=parseFloat(prompt("Enter a number: "));
    let num2 =parseFloat(prompt("Enter another number: "));
    console.log("1.Addition\n2.substraction\n3.multiplication\n4.division\nChoose :")
    let option=prompt("");

    if(option==1){
        addition(num1,num2);
    }else if(option==2){
        subtraction(num1,num2);
    }else if(option==3){
        multiplication(num1,num2);
    }else if(option==4){
        division(num1,num2);
    }
}

function addition(num1,num2){
    let result = (num1+num2);
    console.log("Sum is "+result);
}
function subtraction(num1,num2){
    let result = num1-num2;
    console.log("Subtraction is "+result);
}

function multiplication(num1,num2){
    let result = num1*num2;
    console.log("Multiplication is "+result);
}

function division(num1,num2){
    let result = num1/num2;
    console.log("Division is "+result);
}
main();