/**
 * Topic::  Hoisting
 */

console.log('Before dec:: ');
declaration();

function declaration() {
    console.log("I am Callable from anywhere.");
    
}

console.log('After dec:: ');
declaration();

/**
 * Expression function can't call before it
 */
//expression();

var expression= function () {
    console.log("I am expression function.");
    
};

expression();