
var mylist= ["apple","banana","Orange"];

mylist[mylist.length]="Grape";

mylist.push("Malta");
mylist.unshift("Pom-granade");

var last_element=mylist.pop();

console.log(mylist.length);


console.log(mylist);
console.log(last_element);

var first_element= mylist.shift();

console.log(first_element);
console.log(mylist);
console.log(mylist.length);
