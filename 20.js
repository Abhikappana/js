const prompt =require('prompt-sync')()
let k=1;
for(let i=1;i<5;i++){
    let pattern="";
    for(j=1;j<5;j++){
        if(j<=i){
            pattern= pattern+" "+k;
            k++;
        }
    }
    console.log(pattern)
}