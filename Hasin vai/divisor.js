// in bangla gunoniok (গুণনীয়ক)
//  4 = 1,2,4

var n=144;

var range= Math.ceil(Math.sqrt(n));

// unsorted way
var divisior_str="";

for(var i=1; i<=range ; i++){
    if (n%i == 0) {
        if (i!=(n/i)) {
            divisior_str += i+ " "+ (n/i)+ " ";
        }else{
            divisior_str += i+" ";
        }
    }
}

console.log(n+" => "+divisior_str);


// sorted way

var divisior_arr=[]; 
for(var i=1; i<=range ; i++){
    if (n%i == 0) {
        divisior_arr.push(i);
        divisior_arr.push(n/i);
    }
}
// for(var i=1; i<=range ; i++){
//     if (n%i == 0) {
      
//         divisior_arr.push(n/i);
//     }
// }

divisior_arr.pop(); // to remove duplicate value from the last

divisior_arr.sort(function(a,b){
    return a - b;
});
//console.log("Sorted :: ",divisior_arr);
var divisior_arr_print= divisior_arr.join(" "); 
//join()=> convert the array into string and insert user customization
console.log("Sorted :: ",divisior_arr_print);


//var test=[ 1, 12, 144, 16, 18, 2, 24, 3, 36, 4, 48, 6, 72, 8, 9 ]

// var test=[5,2,63,4,0,6,69,13]
// test.sort(function(a,b){
//     return a - b
// });
// console.log("Test:: ",test);
