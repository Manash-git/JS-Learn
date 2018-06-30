
var list1=[
    "sun",  
    "mon",  
    "tue",  
];

var list2=[
    "wed",  
    "thu",  
    "fri", 
    "sat",  
];

var list3=[
    "Holyday", 
    "Working Day",
    "Special Day",
]


//var list= list1.concat(list2);  // array concat method

//var list= list1.concat(list2).concat(list3); // traditional way

//var list= list1.concat(list2,list3); // Modern & Smart way

var list=[].concat(list1,list2,list3); // another modern & Smart way

console.log(list);
















