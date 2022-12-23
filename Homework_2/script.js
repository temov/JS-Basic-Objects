 

let readingBooks = [
    
    {

    title:'Petar Pan',
    author:'Hans Cristian Andersen',
    readingStatus:true,


    },

    {
        title: 'Captain Hook',
        author:'James Barrie',
        readingStatus:true,
        
    },

    {
        title:'Mockingjay: The Final Book of The Hunger Games',
        author:'Suzanne Collins',
        readingStatus:false,
        

    }
    
    
];


 function checkReadingStatus( ){

 for (let i=0; i < readingBooks.length; i++){

    if (readingBooks[i].readingStatus){

        let info = `You already read ${readingBooks[i].title} from ${readingBooks[i].author}`;
        console.log(info);
        
    }else {
         info = `You still need to read ${readingBooks[i].title} from ${readingBooks[i].author}`;
         console.log(info);
    }
}
 }
 checkReadingStatus();


