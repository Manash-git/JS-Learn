/**
 * TODO:    Basic Object Prototype
 */

/**
 * Below example details:
 * class creating using function style
 * compact method
 * 
 */

function Person(name,age) {
    this.name=name;
    this.age=age;

    this.hello= function () {
        console.log('Hello, '+this.name);
    };
}
var p1=new Person("Manash Mondal",25);
var p2=new Person("Casey Neistat",35);

console.log(p1);

/**
 * Prototype is used to write method of a class separately
 * Above example is be written using prototype
 *  
 */

function Person_prototype(name,age) {
    this.name=name;
    this.age=age;
}

Person_prototype.prototype.hello= function () {
    console.log('Hello Prototype Name => '+ this.name);
};

Person_prototype.prototype.agePrint= function () {
    console.log('Hello Prototype Age => '+ this.age);
};

Person_prototype.prototype.email= "emailatmanash@gmail.com";
//console.log(Person_prototype.prototype);
//console.log(p1.constructor);

console.log("\n******************************\n");
var p3=new Person_prototype("Peter Mckinnon",32);

console.log(p3);
console.log(p3.hello());
console.log(p3.agePrint());
console.log(p3.email);

/**
 * We also can make multiple prototype as a collection type object
 */

Person_prototype.prototype={
    lol: function () {
        console.log('Hello Prototype LOL Name => '+ this.name);
    },
    oka: function () {
        console.log('Hello Prototype OKA Age => '+ this.age);
    },
    phone: "0123456789"
};

var p4=new Person_prototype("MKBHD",27);

console.log("\n******************************\n");
console.log(p4.lol());
console.log(p4.oka());
console.log(p4.phone);
