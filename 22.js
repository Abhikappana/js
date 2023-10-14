const prompt = require('prompt-sync')();

main();
function main(){
    let arr1= [];
    let arr2= [];
    let sum = [];
    let size= getArray(arr1,arr2);
    sum= addArray(arr1,arr2,sum,size);
    displayArray(sum); 
}
function getArray(arr1, arr2){
    let size =parseInt(prompt("Enter the size of array :"));
    console.log("Enter the values of array 1");
    for(let i=0;i<size;i++){
        arr1[i]=[];
        for(let j=0;j<size;j++){
            arr1[i][j] = parseInt(prompt(""));
        }
    }
    console.log("Enter the values of array 2");
    for(let i=0;i<size;i++){
        arr2[i]=[];
        for(let j=0;j<size;j++){
            arr2[i][j] = parseInt(prompt(""));
        }
    }
    return size;
}

function addArray(arr1,arr2,sum,size){
    for(let i=0;i<size;i++){
        sum[i]=[];
        for(let j=0;j<size;j++){
            sum[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return sum;
}

function displayArray(sum) {
   console.log(sum)
}
