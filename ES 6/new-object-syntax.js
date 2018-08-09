let name="Manash Mondal";
let email="emailatmanash@gmail.com";

const cat={
    name,
    email,
    print(){
        console.log(this.name,this.email);
        
    }
};

cat.print();