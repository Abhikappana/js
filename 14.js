const prompt = require('prompt-sync')()
let size = prompt('Enter the size of arrays:');
let arr1=[];
let arr2=[];
console.log("Enter the array 1 elements :");
for(let i=0;i<size;i++){
    arr1[i]=[]
    for(j=0;j<size;j++){
        arr1[i][j]=parseInt(prompt(""));
    }
}
console.log("Enter the array 2 elements :");
for(let i=0;i<size;i++){
    arr2[i]=[]
    for(j=0;j<size;j++){
        arr2[i][j]=parseInt(prompt(""));
    }
}
let sum =[]
for(let i=0;i<size;i++) {
    sum[i]=[]
    for(let j=0;j<size;j++){
        sum[i][j]=arr1[i][j]+arr2[i][j] ;
    }
}
console.log("Sum of two array is ");
console.log(sum);