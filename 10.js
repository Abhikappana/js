const prompt = require('prompt-sync')()
let limit=prompt("Enter the size of arrays")

let arr1 = []
let arr2 = []
console.log("Enter the values of Array 1 ");
for(let i=0;i<limit;i++){
   arr1.push(prompt());
   
}

console.log("Enter the values of Array 2 ");
for(let i=0;i<limit;i++){
    arr2.push(prompt());  
}

let temp = arr1;
arr1 = arr2;
arr2 = temp;
console.log("Array 1 after swapping: ",arr1);
console.log("Array 2 after swapping: ",arr2);