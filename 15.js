
const prompt = require('prompt-sync')()
function main(){
    let arr =[];
    getArray(arr);
    displayArray(arr);
}


function getArray(arr){
    
    let size =parseInt(prompt('Enter the size of array'));
    console.log("Enter the array elements: ");
    for(let i=0;i<size;i++){
        arr[i]=parseInt(prompt(""));
    }
}

function displayArray(arr){
    console.log("Entered Array is ");
    console.log(arr);
}
main();