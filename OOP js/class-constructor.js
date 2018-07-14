/**
 * class is made by using function
 */

 // basic class

 function Person() {
     console.log('I am class');
 }

 var p1=new Person();       // object of class Person
 var p2= Person();
 // 
 console.log(typeof p1);        // it is object
 console.log(typeof p2);        // it is undefined


/**
 * Class details
 */

 console.log('\n***************************\n');

function Data(name,email) {
    this.name=name;
    this.email=email;

    this.print= function () {
        console.log('Name=> '+ this.name);
    };
}

var d1=new Data("Manash Kumar","emailatmanash@gmail.com");

console.log(d1.name);
console.log(d1.email);
console.log(d1);

// create multiple object

var d2=new Data("Casey Neistat","neistat@gmail.com");
var d3=new Data("MKBHD","mkbhd@gmail.com");
var d4=new Data("Peter Mckinon","petermc@gmail.com");

console.log('\n************************\n');

// array of object of class Data

var dataArray=[d1,d2,d3,d4];

//console.log(dataArray);

//// foreach() for traversing

dataArray.forEach(function (value) {
    console.log('Email=> '+value.email);
    value.print();
    console.log('\n');
});

console.log('\n************************\n');
// for in loop for traversing

for(var i in dataArray){
    console.log('Email=> '+dataArray[i].email);
    dataArray[i].print();
    console.log('\n');
}



