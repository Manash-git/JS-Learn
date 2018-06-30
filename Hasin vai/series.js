// s3 = 0 3 8 15 24 35 48

var series="";
var n=0;

for(var i=1; i<=10 ; i++){
    n=i*i-1;
    series=series+ n + " ";
}
console.log("Series 3 => ",series);

// s4 = 1 4 3 8 5 12 7 16 9 20 ...

series="";
for(var i=1; i<=10 ; i++){
    n=i;
    if (n%2==0) {
        n=i*2;
    }
    
    series= series+n+" ";
    
}
console.log("Series 4 => ",series);

// fibonacci s4 = 0 1 1 2 3 5 8 13 ...

series="0 1 ";
n=0;
var x=0;
var y=1;

for(var i=1; i<=10 ; i++){
    n=x+y;
    x=y;
    y=n;

    series=series+n+" ";
}
console.log("Series => ",series);
