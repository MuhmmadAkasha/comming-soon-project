var counter = new Date("dec 30 ,2022 00:00:00").getTime()
var x = setInterval(function () {
var now = new Date().getTime()
var distance = now - counter
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML= days
document.getElementById("hours").innerHTML= hours
document.getElementById("minutes").innerHTML= minutes
document.getElementById("seconds").innerHTML= seconds
},1000)

function background() {
    document.body.style.backgroundColor = "red";
}