var x = prompt("Enter Input for First Number");
var y = prompt ("Enter Input for Second Number");

var a = Number(x);
var b = Number(y);

document.write("CALCULATOR");
document.write("<br><br><br><br>");

document.write ("First Number is  : " + " " + a );
document.write ("<br><br>");

document.write ("Second Number is  : " + " " + b );
document.write ("<br><br>");

var c = a + b;
var d = a - b;
var e = a * b;
var f = a/b;
var g = a%b

document.write('Sum of' + " " + a + " " + 'and' + " " + b + " " + " " + 'is    :' + "  " + c ); document.write("</br></br>");

document.write('Difference of' + " " + a + " " + 'and' + " " + b + " " + " " + 'is    :' + "  " + d ); document.write("</br></br>");
document.write('Product of' + " " + a + " " + 'and' + " " + b + " " + " " + 'is    :' + "  " + e ); document.write("</br></br>");
document.write('Division of' + " " + a + " " + 'and' + " " + b + " " + " " + 'is    :' + "  " + f ); document.write("</br></br>");
document.write('Modulus of' + " " + a + " " + 'and' + " " + b + " " + " " + 'is    :' + "  " + g ); document.write("</br></br>"); 