/**
 * ES6 spread operator
 * for taking unlimited argument in a function 
 * ...{3 dots are used to defined this functionality}
 * 
 */

/*
function test(...params) {
    console.log(params.length);
    
}
*/

function test(n,...params) {   // first one taking as our own way
    console.log(params.length);
    
}
test(1,3,5,7);
test(1,0,5,7,4,2,8);
test(1,1212,5,17,34,4442,48,4,2,4,6,67,8,787,99,09);

