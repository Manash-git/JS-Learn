/**
 * Default Parameter
 *      => it means set the value of the paramter value by default,
 *          if we forget to pass the value to that function.
 */

let add= (a, b)=> a+b;
console.log(add(10));       // it will return Nan bcoz value of b is missing

let sqr=(a=1, b=a)=> a*b;
console.log(sqr());         // a= 1 & b=a= 1  so  # a*b = 1
console.log("Square is=>"+ sqr(10,20));    // a= 10 & b= 20  so  # a*b = 200

/**
 *  Rest operator
 *  define by ...
 *  use as a paramter of a function which is infinite
 *  combined these passing value as array
 */

function sum(...data) {
    console.log(data);
    return data.reduce((a,b) => a+b);
    
}

//sum(10,32,445,1,22,334);
console.log('Sum=> '+sum(10,20,20,50));


/**
 * Spread operator
 * it used for destructuring array or object
 * defined by ...
 * it will makes the array into normal var (series type)
 */

//  Array Example

var arr=[10,5,25.5,554,0,-1,5];

console.log(arr);

console.log(...arr);  // spread operator

arr=[...arr,500,1000,1500];
console.log(arr);

// Object example

var obj={
    name:"Manash Mondal",
    Age:25
};

var objNew={
    ...obj,
    email:"emailatmanash@gmail.com"
};

console.log(objNew);

