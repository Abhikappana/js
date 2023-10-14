const prompt=require('prompt-sync')()
let size = prompt("Enter the size of an array: ");
let arr= []
console.log(" Enter the values of array");
for(i=0; i<size ; i++){
    arr.push(prompt());
}
let count=0;
for(let i=0;i<size;i++){
    if(arr[i]%2==0){
        count++;
    }
}
console.log("Number of even numbers in the given array is "+count);