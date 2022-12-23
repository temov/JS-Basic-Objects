 


//---------------This is the solution to the obligatory homework please uncoment it to see the result!!!

// let cat = {
//     name: 'Kitty',
//     kind: 'Persian',
//     age: 5,
//     speak: function(text) {
        
//         return ` Cat says: ${text}`;
        
//     },
// }
// delete cat.kind;
// cat.name = 'Becky';
// let catSays = cat.speak('Meoow');
// console.log(catSays);
// console.log(cat);
// console.log(cat.input);



// ------------This is the solution for the bonus part of the homework!!!

let cat = {
        name: '',
        kind: '',
        age: '',
       speak: ''
            
      }
       let button = document.getElementById('btn');
      
      button.addEventListener('click', function(){

        cat.name = document.getElementById('name').value;
        cat.kind = document.getElementById('kind').value;
        cat.age = document.getElementById('age').value;
        cat.speak = document.getElementById('speak').value;

        console.log(cat);
      })

     