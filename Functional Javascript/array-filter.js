var arr=[-2,5,7,1,3,6,8,9,0,2,5];

/**
 * Normal Way
 */

 var newArray=[];
 for(var i=0; i<arr.length; i++){
     if (arr[i]%2==0) {
         newArray.push(arr[i]);
     }
 }
 console.log(newArray);

 /**
  *  Using filter() 
  */

  var another_Array= arr.filter(function (value) {
      return value % 2 == 0;
  });

  console.log(another_Array);
  
 

