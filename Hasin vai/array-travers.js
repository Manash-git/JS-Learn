
var list=[
    "sun", // 0  -7 
    "mon", // 1  -6   
    "tue", // 2  -5
    "wed", // 3  -4
    "thu", // 4  -3
    "fri", // 5  -2
    "sat", // 6  -1
];

/**
 * Traditional Way
 */

 var length= list.length;

//  for(var i=0; i< length ; i++){
//      console.log("Index ",i+1,"=>",list[i]);
     
//  }

 /**
  * Advance way  # for in loop
  */
for(var i in list){
    console.log("Index ",i,"=>",list[i]);
}
