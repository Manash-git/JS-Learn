/**
 * Arrow function is way to write regular function
 * 
 */

const print = name => {  // single parameter hole () lagbe nah
    console.log('Hello, Arrow function',name);
}

print("Manash Mondal");

const addMe= (a,b)=> a+b;
console.log(addMe(40,20));

const sqrt= x => x*x;
console.log(sqrt(5));

/**
 * Above function work same as 
 * function sqrt(x){
 *      return x*x ;
 * }
 */