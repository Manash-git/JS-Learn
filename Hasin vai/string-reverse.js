var str="Manash Kumar";

console.log("Main => ",str);

/**
 *  Step by step
 */
// var rev= str.split("");
// rev.reverse();
// var ns= rev.join("-");

// console.log("Test =>",ns);

/***
 * now is a single line
 */

var revWord= str.split(" ").reverse().join(" "); // world reverse
var revChar= str.split("").reverse().join("");  // Each character reverse reverse

console.log("Reverse Word => ",revWord);
console.log("Reverse Character => ",revChar);


