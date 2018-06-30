/**
 *    ######   send function name a parameter
 */
/*
 function operation(a,b,callback) {
     var c=a+b;
     var d=a-b;

     callback(c,d);
 }

 function print(c,d) {
     console.log('C => '+c+"\nD => "+d);
     
 }

 function multiply(c,d) {
     console.log('Mul => '+c*d);
     
 }
operation(10,5,print);
operation(10,5,multiply);
*/

/**
 *    ######   Call back parameter
 */

 /*
function operation(a,b,callback) {
    var c=a+b;
    var d=a-b;

    callback(c,d);
}

operation(10,5, function (c,d) {
    console.log('Multiply => '+(c*d));
    
})

operation(10,5, function (c,d) {
    console.log('Division => '+(c/d));
    
})
*/

/**
 *  **###      call back in  a array
 */
var name=["Manash Mondal","Sakib Rahman","Pritom Mondal","Sourav Mojumdar"];

// for(i in name){
//    //console.log(name[i]);
//    console.log(name[i].toUpperCase());
// }

function traverse(name,callback) {
    for(var i in name){
        callback(name[i]);
    }
}

traverse(name, function(name) {
    //console.log(name);
    
    console.log(name.toUpperCase());
    // var m=name.toUpperCase();
    // console.log(m);
});




