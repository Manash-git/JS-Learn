function sayHi(name) {
    return 'Hi, '+name;
}

/**
 *  1. A Function can be stored in a variable
 */

//  var sayHello= sayHi;
//  console.log(sayHello);

//  var anotherSayHi= sayHello("Manash Mondal");
//  console.log(anotherSayHi);

//  console.log(sayHello("Oka Legend"));
 

 /**
 *  2. A Function can be stored in a Array
 */
 
//  var arr=[1,2,3];
// arr.push(sayHi);
// console.log(arr);

/**
 *  3. A Function can be stored as an Object Field or Property
 */

//  var obj={
//     name: "manash",
//     sayObj: sayHi,
//     print: function(){
//         console.log("Helllo");
        
//     },
// };

// console.log(obj);


/**
 *  4. We can create function as Needed
 */


 // Self Invoking Function

// var sum= 20+ (function () {return 45;}) ();

// console.log(sum);

/**
 *  5. We can pass a Function as a argument
 */
// function wow(name,fun) {
//     return fun(name);
// }

// var result= wow("Mondal",sayHi);

// console.log(result);

/**
 *  6. We can return from another function
 */

// Higher Order Function

function base(b) {
    return function (n) {
        var result=1;
        for(var i=0; i<b; i++){
            result=result*n;
        }
        return result;
    };
}

// passing value by two var

// var store=base(2);      // this 2 is b  # b=2
// var final=store(3);     // this 3 is n  # n=3

// console.log(final);

// composition function

var final= base(10)(2);
console.log(final);














