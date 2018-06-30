 
 function outer() {
     
    function inner() {
        console.log('I am inner function');
        
    }
    inner();    // nested function should call in the main outer function block

    console.log('I am outer function');
    
 }

 outer();

 /**
  *  Another example
  */

 function cal(a,b) {
     
    function sum() {
        return a+b;
    }
     
    function sub() {
        return a-b;
    }
     
    function div() {
        return a/b;
    }
     
    function mul() {
        return a*b;
    }

    console.log("Sum=>",a+b);
    console.log("Sub=>",a-b);
    console.log("Div=>",a/b);
    console.log("Mul=>",a*b);
    
    return sum()+sub()+mul()+div();


 }

console.log( cal(10,5));
