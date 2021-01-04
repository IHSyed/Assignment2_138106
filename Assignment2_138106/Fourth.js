

document.write("MARKS SHEET");
var marks = prompt("Marks obtained in Physics!");
var marks1 = prompt("Marks obtained in Chemistry!");
var marks2 = prompt("Marks obtained in Maths!");

var a = Number(marks);
var b = Number(marks1);
var c = Number(marks2);

var marks3 = (a + b + c);
x = marks3/3;

document.write("<br><br><br><br><br>");

document.write("Total Marks   :  300");
document.write("<br><br>");

document.write(" Marks Obtained in Physics  : " + " " + a );
document.write("<br><br>");

document.write(" Marks Obtained in Chemistry  : " + " " + b );
document.write("<br><br>");

document.write(" Marks Obtained in Maths  : " + " " + c );
document.write("<br><br>");

document.write("Marks obtained   :" + " " + marks3);

document.write("<br><br>");

document.write("Percentage   :" + " " + x + " " +"%");
document.write("<br><br>");


if (x>=80){
    document.write(" Grade is : A1"); document.write("<br><br>");
    if (x >=80){
        document.write("REMARKS  :   Excellent");
    }
}

if (x>70 && x<=79){
    document.write("Grade is : A"); document.write("<br><br>");
    if (x>=70) {
        document.write("REMARKS    :  Good");
    }
}
if (x>60 && x <=69){
    document.write("Grade is : B"); document.write("<br><br>");
    if (x>=60) {
        document.write("REMARKS    :  You need to Improve");
    }

}
else if (x <60) {
    document.write("Grade is : FAIL"); document.write("<br><br>");
    if (x<60) {
        document.write("REMARKS    :  Sorry");
    }
}