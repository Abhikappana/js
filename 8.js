const prompt = require('prompt-sync')()
var num=prompt("Enter a limit: ");
var sum=0;

for(var i=1; i<=num ; ++i) {
    if (i%2!=0){
        sum = sum+i;
    }
}
console.log("sum of odd numbers ="+sum);
