 
 var male=["sakib","manash","Tonni","sourav"];
 var female=["Nusrat","lucky",];

//  var remove_person=male.pop();

//  female.push(remove_person);

var remove_person=male[2];
female.push(remove_person);

//delete(male[2]);

male.splice(2,1); 

 console.log(male,female);
 console.log(male.length,female.length);
 