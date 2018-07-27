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
}
var obj2={
    name: "Casey Neistat",
    age: 40
}

console.log(printMe());

var out1= printMe.bind(obj1);
console.log(out1());











