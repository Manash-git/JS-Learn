
/**
 *  object-array sort using the basic of array sort concept
 */

 var data=[
     {name: "Manash Mondal ", age: 25},      // object er array
     {name: "Casey Neistat", age: 45},      // object er array
     {name: "MKBHD",        age:27},         // object er array
     {name: "Peter Mckinon", age:38},      // object er array
     {name: "Unbox Therapy", age:40}      // object er array
 ];

 data.sort();
 console.log(data);     // in this way it doesn't sort
 

 /***
  * sorting according to age
  */
console.log('*****************************\nsorting according to age\n*****************************\n');

  data.sort(function (a,b) {
      return a.age-b.age;
  });
console.log(data);
 /***
  * sorting according to name
  */
console.log('*****************************\nsorting according to Name \n*****************************\n');

  data.sort(function (a,b) {
      if (a.name>b.name) {
          return 1;
      }else if (a.name<b.name) {
          return -1;
      } else {
          return 0;
      }
  });
console.log(data);





