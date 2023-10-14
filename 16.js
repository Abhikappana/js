const prompt = require("prompt-sync")()
let num=parseInt(prompt("Enter the number :"))
let flag = 0;
if(num<=1){
    flag = 1;
}else{
    for(let i=2;i<num;i++){
        if (num%i==0){
            flag = 1;
            break;
        }
    }
}

if (flag==0){
    console.log(num+" is a prime number");
}else{
    console.log(num+" is not a prime number");
}
