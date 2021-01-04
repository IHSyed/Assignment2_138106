var a = 4;
if (++a ===5){
    alert(" (a) Given condition for Variable a is TRUE"); //True
}
var b = 82;
if (b++ ===83){
    alert(" (b) Given condition for Variable b is TRUE"); //False
}
var c = 12;
if (c++ ===13){

    alert(" (c1) Condition 1 is TRUE"); //False
    }
    if(c === 13){
    
;        alert("(c2) Condition 2 is TRUE"); //True
    }
    if(++c>14) {
    
;        alert(" (c3) Condition 3 is TRUE") //FaLSE
    }
    if(c=== 14) {
    
;        alert(" (c4) Condition 4 is TRUE") //True
    }

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost; 
if(totalCost ===laborCost + materialCost) {
    alert("The Cost Equals"); //True
}
if(true) {
    alert (" (e) True" );
}
if(false) {
    alert(" (e) False ");
}
if ("car" < "cat") {
    alert (" (f) Car is smaller than Cat");
}