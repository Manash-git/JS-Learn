
/**
 *      JavaScript Object
 */


 var obj={};

 obj.name="Manash Mondal";
 obj.place="Dhaka";
 obj.age=25;
 obj.print=function () {
     console.log(this.name+' '+this.place+ " "+this.age);
};

 obj.print();