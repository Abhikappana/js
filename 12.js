const prompt = require('prompt-sync')();
let size=prompt("Enter the size");
let arr=[];
console.log("Enter the values of an array");
for(let i=0;i<size;i++){
    arr.push(prompt());
}
//descending order 
for(let i=0;i<size;i++){
    for(let j=i+1;j<size;j++){
        if(arr[i]<arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}

console.log(" Sorted array: "+arr);