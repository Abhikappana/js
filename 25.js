const prompt = require('prompt-sync')()

var library = [
    {
        title:'Bill Gates',
        author:'THe Road Ahead',
        readingStatus :'true'
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus : true
    },
    {
        title:'MOcking: The Final Book of The Hunger Games',
        author:'Suzanne Colliins',
        readingStatus:false
    }
]

library.forEach((Book) =>{
    if(Book.readingStatus){
        console.log(`Already read ${Book.title} by ${Book.author}`);
    }else{
        console.log(`${Book.title} by ${Book.author} is not yet read`);
    }

})