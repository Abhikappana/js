const prompt = require('prompt-sync')()
let income =parseInt(prompt("Enter the annual income : "));
let tax;
if(income<=250000){
    tax ="No Tax";
}else if(income>250000 && income<=500000){
    tax=((income*5)/100);
}else if(income>500000 && income<=1000000){
    tax=((income*20)/100);
}else if(income>1000000 && income<=5000000){
    tax=((income*30)/100);
}

console.log("Income tax amount : "+tax);
