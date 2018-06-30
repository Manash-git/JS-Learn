var arr=[5,3,2,6,1,7,3,6,15];

/**
 * Array traverser can do easily using foreach
 */

 arr.forEach(function (value,indexNo,fullArray) {
     console.log('Element=> '+value+" Index=> "+indexNo+" Array=> "+fullArray);
     
 });

 /**
  * Now traverse using call back function
  */

  function loop(arr,callBack) {
      for(var i=0; i<arr.length; i++){
          callBack(arr[i],i);
      }
  }


loop(arr,function (value,index) {
    console.log('Value=> ',value+'  Index=> ',index);
    //console.log('Index=> ',index);
    
});


