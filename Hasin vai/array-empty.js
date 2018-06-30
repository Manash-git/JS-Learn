/**
 *  how to remove empty or unexpected element from array
 */ 

var list=[
    "sun",
    NaN,
    "mon",
    null,
    "tue",
    "",
    "wed",
    ,
    ,
    "thu",
    "fri",
    "",
    null,
    undefined,
    "sat",
]

console.log(list);

/***
 *  by using loop
 *  note: we also can use basic for loop
 */
var newList=[];

for(i in list){
    if (list[i]) {      //  same like if( list[i]== true )
        newList.push(list[i]);
    }
}
console.log(newList);

/**
 *  we can also do it by using filter method
 */

var newList_Filter;

newList_Filter= list.filter(Boolean);
console.log(newList_Filter);


