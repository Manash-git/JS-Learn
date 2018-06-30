
function outer(msg) {
    
    return function (name) {
        console.log(msg+', '+name);
        
    };
}

outer("Say Hi")("Manash Mondal");

var greeting= outer("Good Morning");
greeting("Sakib Rahman");
