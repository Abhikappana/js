const prompt = require('prompt-sync')()

var library = [
    {
        title:'The Road Ahead',
        author:'Bill Gates',
        readingStatus :'true'
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus : true
    },
    {
        title:'Mocking: The Final Book of The Hunger Games',
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