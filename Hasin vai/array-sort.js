
var list=[2,5,1,9,3,11,-1,8,7,51,13,65,91,-15,554,14,20];

//list.sort();

/**
 *  sorting using basic loop
 */

var length= list.length-1;

for(var i=0; i<length ; i++){
    for(var j=0; j<length ; j++){
        if (list[j]> list[j+1]) {
            [list[j],list[j+1]]=[list[j+1],list[j]];
        }
    }
}

console.log(list);
