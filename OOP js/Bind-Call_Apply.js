/**
 * Bind is used to make a connection between a function and object
 * bind return output which should in a var to print
 */

function printMe() {
    console.log('Hello, '+ this.name);
}

var obj1={
    name: "Manash Mondal",
    age: 25
};
var obj2={
    name: "Casey Neistat",
    age: 40
};

//console.log(printMe());

//var out1= printMe.bind(obj1);
//console.log(out1());

/**
 * Call function done the bind work plus call the function
 * 
 */

printMe.call(obj2);


/***
 * New Example for Apply()
 * it is used for function binding with parameter
 */
function add(a,b) {
    return (a+b)*this.c;
}

var multiplier1={
    c:4
};
var multiplier2={
    c:5
};

var result= add.call(multiplier1,10,2);     // call() with parameter 
console.log(result);

result= add.apply(multiplier2,[5,10]);      // Apply() parameter should be within an array
console.log(result);

// We can also use bind()

var binded=add.bind(multiplier2);
console.log(binded(2,3));








