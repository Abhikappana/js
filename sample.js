const prompt = require()
let arr=[1,2,3,4,5];

for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
        let temp= arr[i];
        arr[i]=a[i+1];
        a[i+1]=temp;
    }
}
console.log(arr[0]);