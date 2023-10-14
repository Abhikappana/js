const prompt=require('prompt-sync')();
let my_height = parseInt(prompt("Enter your height : "));
try{
    if (isNaN(my_height)){
        throw("notANumberError");
    }else if(my_height>70){
        throw("HugeHeightError");
    }else if(my_height<=0){
        throw("TinyHeight Error");
    }
    else{
        console.log(my_height);
    }
}catch(err){
    console.log(err);
}