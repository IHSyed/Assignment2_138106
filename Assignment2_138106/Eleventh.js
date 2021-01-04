var greeting;

var time = prompt("Input time in xxxx hrs.");

if (time >= 0000 && time <1200){
    greeting = "Good Morning";
    }
    else if (time > 1200 && time < 1700){
    greeting = "Good Afternoon";
    }
    else if (time >=1700 && time <2100) {
    greeting = "Good Evening";
    }
else{
greeting = "Good Night";
}
console.log(greeting);