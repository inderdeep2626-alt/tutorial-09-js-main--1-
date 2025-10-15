/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Inderdeep Singh
   Date:   2025-10-08

*/

//Display the current date and time
document.getElementById("dateNow").innerHTML ="n/d/ycbr />h:m:S";

//display the time left until new year eve bash
document.getElementById('days').textContent="dd";
document.getElementById('hrs').textContent="hh";
document.getElementById('mins').textContent="mm";
document.getElementById('secs').textContent="ss";

//run the runClock function every second
setInterval(()=>
runClock(),
1000);

   
function runClock(){
//store the current date & time
var currentDate = new Date();

//separate time and date components from Date()object
var dateStr = currentDate.toLocaleDateString();
var timeStr = currentDate.toLocaleTimeString();
document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

//calculate the time left until January 1st (of next year)
var newYear = new Date("January 1,2025");
var nextYear = currentDate.getFullYear()+1;
newYear.setFullYear(nextYear);
var daysLeft = (newYear - currentDate)/(1000*60*60*24);

//Display the time left until New Year Eve Bash
document.getElementById('days').textContent = Math.floor (daysLeft);

//calculate the hours left in the current day
var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

//calculate the minutes left in the current day
var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60; 

//calculate the seconds left in the current minute
var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

//Display the time left until New Year Eve Bash
document.getElementById("days").textcontent = Math.floor(daysLeft);
document.getElementById("hrs").textcontent = Math.floor(hrsLeft);
document.getElementById("mins").textcontent = Math.floor(minsLeft);
document.getElementById("secs").textcontent = Math.floor(secsLeft);
}
