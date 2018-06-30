
// var me={
//     name: "Manash Mondal",
//     age: 25,
//     email: "emailatmanash@gmail.com"
// };

// function dataPrint(data,callback) {
//     console.log('Name: '+data.name+" ( "+data.age+" )");

//     if (data.age>=18) {
//         console.log('You are Eligible for the service.');
//         callback(data.email);
//     } else {
//         console.log('You are under 18 !!');
        
//     }
// }

// dataPrint(me,function (email) {
//    console.log('Confirmation will be send to : '+email);
    
// });

/**
 *  Multiple callback function as argument 
 */

function uppperLower(data,callback1,callback2) {
    console.log('Original=> ',data);
    callback1(data);
    callback2(data);
}

uppperLower("Argentina & Brazil",
    function (data) {
        
        var n=data.toUpperCase();
        console.log('UpperCase=>',n);
        
    },

    function (dataLower) {
      console.log('LowerCase=>',dataLower.toLowerCase());

        // var n=dataLower.toLocalLowercase();
        // console.log('LowerCase=>',n);
    }
);



