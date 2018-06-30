
var arr=[4,5,6];

arr.forEach(function (a) {
    console.log(a);
    
});

/**
 *  Above function is same as below function
 */

function print(a) {
    console.log(a);    
}
arr.forEach(print);

/***
 * New example of returning a function
 */

function caller() {
    return function (name) {
        return "Say Hi to, "+name;
    };
}

// We can call it two ways

/**
 *  Way => 1
 */

var x=caller();
var y=x('Manash Mondal');
console.log(y);


/***
 * Way => 2.1
 */
 var a= caller()("Muri Kha");
 console.log(a);

 /***
 * Way => 2.2
 */
 console.log(caller()("Casey Neistat"));
 
 

