var arr=[1,2,3,4,5];

/**
 * total array sum using loop
 */
var sum=0;
 for(var i=0; i<arr.length; i++){
     sum+=arr[i];
 }
 console.log('Sum=> ',sum);

/**
 *  reduce function use
 * we can do sum, multi, div and many more things by using reduce
 */


 var rSum=arr.reduce(function (a,b) {
     return a+b;
 });


 var rMulti=arr.reduce(function (a,b) {
     return a*b;
 });


 var rDiv=arr.reduce(function (a,b) {
     return a/b;
 });


 var rEqn=arr.reduce(function (a,b) {
     return (a+1)+(b*2);
     /**
      * //var arr=[1,2,3,4,5];
      * => solution :
                2+4=6
                7+6=13
                14+8=22
                23+10=33
      */
 });

console.log('Summation=> ',rSum);
console.log('Multiplication=> ',rMulti);
console.log('Divition=> ',rDiv);
console.log('Equation=> ',rEqn);


 




 