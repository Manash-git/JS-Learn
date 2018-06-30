// Slice & Splice()
/**
 *  Splice ( কতো নাম্বার ইনডেক্স থেকে , কয়টা এলিমেন্ট)
 *  
 *  Slice (কতো নাম্বার ইনডেক্স থেকে , কতো নাম্বার ইনডেক্স এর আগ পর্যন্ত )
 */


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
 *  Array Slice
 */

//var chunk= list.slice(2,4);
// console.log(chunk);
// console.log(list);
// var chunk= list.slice(2);




//var chunk= list.slice(-3);
// var chunk=list.slice(-4,-1);


// console.log(chunk);

// console.log(list);


/**
 * Array Splice()
 */




var list2=[
    "sun", // 0  -7 
    "mon", // 1  -6   
    "tue", // 2  -5
    "wed", // 3  -4
    "thu", // 4  -3
    "fri", // 5  -2
    "sat", // 6  -1
];


//var chunk= list2.splice(2,2);

var chunk=list2.splice(-4,2);

console.log("List =>",list2);

console.log("Chunk =>",chunk);



















