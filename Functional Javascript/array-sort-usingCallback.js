/**
 * At first lets see how to basic array sort
 * 
 */

var array=[0,47,2,565,9,45,67,8,4,1,-1,33];
array.sort();
console.log(array); // it isn't working because it is made for string sort
 
// solution is below
/**
 *  ascending order
 */
array.sort(function (a,b) {
    return a-b;
});

console.log(array);

/***
 * descending order (reverse order )
 */

array.sort(function (a,b) {
    return b-a;
});
console.log(array);


















