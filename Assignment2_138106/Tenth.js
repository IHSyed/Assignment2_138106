var x = prompt("Provide a Password for Storage as JS Variable");

document.write("Please provide your Password");
document.write("<br><br><br>");

var a = prompt("Please enter your Password");

if( a == 0){

    document.write("Kindly enter your Password");
    document.write("<br><br>");
}
    else if(a == x) {
    document.write("CORRECT. The Password you entered matches the original Password");
}
else {
    document.write("Incorrect. Please reenter your correct Password");
}