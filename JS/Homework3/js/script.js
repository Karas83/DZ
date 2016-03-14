var hour = 0;
var minute = 0;
var second = 0;
var msec=0;
var timer=0;
var Time;
var p=document.getElementById('pause');
var stop=document.getElementById('stop');
var start=document.getElementById('start');

function clock(){
  Time = setInterval(function(){
  ++timer;
  hour = Math.floor(timer/360000);
  minute = Math.floor((timer-hour*360000)/6000);
  second = Math.floor((timer-hour*360000-minute*6000)/100);
  msec = timer - hour * 360000 - minute * 6000 - second*100;
  if (hour < 10) hour = '0' + hour;
  if (minute < 10) minute = '0' + minute;
  if (second < 10) second = '0' + second;
  if (msec < 10) msec = '0' + msec;
  console.log(hour + ':' + minute + ':' + second + ':' + msec);
  document.getElementById("timer").innerHTML = hour + ':' + minute + ':' + second + ':' + msec;
}, 10);
  start.style.display = 'none';
  p.style.display = 'block';
};
 function pause(){ 
	p.style.display = 'none';
	start.style.display = 'block';
	clearTimeout(Time); 
}; 
 function clear(){
 p.style.display = 'none';
 clearTimeout(Time);
 document.getElementById("timer").innerHTML = '00:00:00:00';
 hour = 0;
 minute = 0;
 second = 0;
 msec = 0;
 timer = 0;
 start.style.display = 'block';
 };
p.addEventListener('click', pause);
stop.addEventListener('click', clear);
start.addEventListener('click', clock);
