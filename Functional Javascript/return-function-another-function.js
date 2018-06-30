
    function outer() {
    console.log('I am outer function');
    
    return function () {
        console.log('I am return function');
        
    };
}
outer()();
//console.log(outer()());

 

/**********
 *  Above function is same as below function
 */

/**
 * function outer(params) {
    console.log('I am outer function');
    
    function inner() {
        console.log('I am inner function');
        
    }
    return inner;
}

outer()();
 */


