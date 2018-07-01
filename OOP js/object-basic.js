/**
 * Basic Object overview
 * 
 */
 // we can declare object in two different ways 

 var obj1={};
 var obj2=new Object();

 console.log(typeof obj1);
 console.log(typeof obj2);

 var book={
     name: "Debi Choudhurani",
     author: "Bongkim Condro Cottopadhay",
     publisher: "O\' Reilly",

     print: function () {
         console.log(this.name,this.author,this.publisher);
         
     }

 };

console.log(book);
book.print();

/**
 * we can call and object element by using two ways
 */

 console.log('\n\nBook Name=> ',book.name);
 console.log('\n\nBook Author=> ',book['author']);
 

/**
 * we can add new element in existing object
 */

 console.log('Publisher Year=> ',book.publishYear);
 book.publishYear=2018;
 book['price']= 150.50;

 console.log('Publisher Year=> ',book.publishYear);
 console.log(book); /// publisherYear is added in book object

 
 /**
  * printing all the element using for in loop 
  */
for(var i in book){
    console.log(i);         // print the element name
}

/**
 * print the whole object using for in loop 
 */
for(var i in book){
    if (i=='print') {
        console.log('Print Function ::: \n********************');
        book.print();
        
       
    } else {
        console.log(i+' => '+book[i]);
    }
    
}








