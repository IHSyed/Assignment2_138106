
var a = prompt("Guess the Secret Number between 1 and 10. ");

var x = "Stored Secret Number";
var y = Number(a);
x = 7;


if (y == x){
    document.write(" BINGO... Correct Answer"); 
    }
    else if (y == (x+1)){
        document.write(" Close Enough to Correct Answer");
    }

else  {
        document.write("Sorry. Not close enough");
      }
