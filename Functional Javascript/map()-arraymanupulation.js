var arr=[5,9,2,1,8,12,45,96,2,-15,68,19];

/**
 * manually doing
 */

var mapArr=[];

for(var i=0; i<arr.length; i++){
    mapArr.push(arr[i]+2);
}
console.log(mapArr);
/**
 *  We can do it by using map() function
 */

 var newArr= arr.map(function (value) {
     return value+2;
 }); 

 console.log('By using map() function.');
 console.log(newArr);
 
 

