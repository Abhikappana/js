const prompt = require('prompt-sync')()
class array{
    main(){
        let arr = [];
        this.getArray(arr);
        this.displayArray(arr);
    }
    
    getArray(arr){ 
        let size = prompt("Enter the size of array");
        console.log("Enter the array values :");
        for(let i=0;i<size;i++){
            arr[i] = [];
            for(let j=0;j<size;j++){
                arr[i][j]=prompt("");
            }
        }
    }
    displayArray(arr){
        console.log(arr);
    }
}

let obj = new array();
obj.main();