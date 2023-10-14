const prompt= require('prompt-sync')();

let mark=prompt("Enter the mark: ");
if(mark<=50){
    console.log('Failed');
}else{
    console.log('Passed');
}