const prompt = require('prompt-sync')();
let size = prompt("Enter the array limit : ");
let arr = [];
let multi = [];
console.log("Enter the values of array");
for (i=0; i<size ; i++) {
    arr.push(prompt(""));
}
for(i=0;i<size-1;i++){
    multi[i] = arr[i]*arr[i+1];
}
console.log("Result:"+multi);

