
// Shallow copy
// Deep copy

var list=[
    "sun", // 0  -7 
    "mon", // 1  -6   
    "tue", // 2  -5
    "wed", // 3  -4
    "thu", // 4  -3
    "fri", // 5  -2
    "sat", // 6  -1
];

var list1= list.slice();    // slice(0,7) == slice ()
var list2= Array.from(list); // Old javascript version
var list3=[...list];        // advance javascript ES6 version 



list1[2]="lol";
list2[1]="Old Boys";
list3[0]="JS ES6";

console.log(list);
console.log(list1);
console.log(list2);
console.log(list3);

