var month_name="April";
var starting_day=5;
var days=30;

console.log("\n\nCalendar of",month_name,"\n");
console.log("Sun \tMon \tTue \tWed \tThu \tFri \tSat\n");

for(var i=0; i<=4 ; i++){
    var days_row="";

    for(var j=1; j<=7 ; j++){
        var current_day=7*i+j - starting_day +1;


        if (current_day>days) {
            break;
        }else if (current_day<1) {
            current_day="";
        }

        if (current_day>9) {
            days_row=days_row+current_day+"   \t";
        } else {
            days_row=days_row+current_day+"\t\t";
        }
    }
    console.log(days_row);
    
}

