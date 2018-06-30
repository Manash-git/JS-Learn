var arr=[-2,5,7,1,3,6,8,9,0,2,5];

/**
 *  filter operation manually using callback function
 */

function myFilter(arr,callback) {
    var newArray=[];

    for(var i=0; i<arr.length; i++){
        if (callback(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

var filterArray= myFilter(arr,function (value) {
    return value%2==0;
});

console.log(filterArray);






