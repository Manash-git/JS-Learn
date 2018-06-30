
var name=["Manash Mondal","Sakib Rahman","Pritom Mondal","Sourav Mojumdar"];

name.forEach(print);

function print(prn) {
    console.log(prn);
    
}

/**
 *  Use of function as a parameter
 */

console.log('\t### Use of function as a parameter\t###');

name.forEach(function(name) {
    var m=name.toUpperCase();
    //console.log(output);
    console.log(m);
    
});

var myName="Manash Kumar";
var newMyName= myName.toLocaleUpperCase();
console.log(newMyName);


