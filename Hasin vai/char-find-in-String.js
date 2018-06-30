var str= "quick brown fox jumps over the lazy dog";

console.log(str.split(" ").length); // total no of words

console.log(str.split("").length);

/**
 *  find specific char in a string
 * 
 */

 console.log("No of o => ",str.split("o").length-1); 

 /**
  *  Why -1 ??
  * 
  *  Ans :: 10101    
  *         if we split by 0
  *         than 1 1 1
  *         so no of char = total no after split - 1
  */
 
 console.log("No of R => ",str.split("r").length-1); 

