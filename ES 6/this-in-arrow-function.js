const obj ={
    name:"Manash",
    print:function () {
        setTimeout(
            ()=>{
                console.log(this.name);
                // here "this " means name variable
                // this is the advantage of arrow function 
            },1000
        );
        
    }
};

obj.print();

const obj1 ={
    name:"Manash",
    print:function () {
        setTimeout(
            function(){
                console.log(this.name);
                
            },1000
        );
        
    }
};
obj1.print();       // in this case it will not working bcos here "this" means windows 