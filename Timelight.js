let blackWhiteGradient = 0;
let CLOCK_DIAMETER     = 400;

/* useLocalTime toggles the art piece between using local time or (seizure-inducing) CPU clock time
     for drawing the background and clock's colors. Set to false at your own discretion.
*/
let useLocalTime = true;
let angleMeasure = 0;
let cycleCount   = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function drawClock(color = 0) {
  let quarterHourTickLength = 40;
  let otherHourTickLength = 10;
  
  push();

  if (color == abs(255-color)) {
    fill(abs(255-color-50));
  }
  else {
    fill(abs(255-color));
  }
  circle(0, 0, CLOCK_DIAMETER);
  stroke(color)
  line(0, (CLOCK_DIAMETER/2)-40, 0, CLOCK_DIAMETER/2)   //12:00 (CLOCK_DIAMETER/2)-20, CLOCK_DIAMETER/2
  line((CLOCK_DIAMETER/2)-40, 0, CLOCK_DIAMETER/2, 0)   //3:00
  line(-((CLOCK_DIAMETER/2)-40), 0, -CLOCK_DIAMETER/2, 0) //6:00
  line(0, -((CLOCK_DIAMETER/2)-40), 0, -CLOCK_DIAMETER/2) //9:00

  rotate(PI+(PI/6))
  stroke(color)
  line(0, (CLOCK_DIAMETER/2)-10, 0, CLOCK_DIAMETER/2)   //1:00 (CLOCK_DIAMETER/2)-5, CLOCK_DIAMETER/2
  line((CLOCK_DIAMETER/2)-10, 0, CLOCK_DIAMETER/2, 0)   //4:00
  line(0, -((CLOCK_DIAMETER/2)-10), 0, -CLOCK_DIAMETER/2) //7:00
  line(-((CLOCK_DIAMETER/2)-10), 0, -CLOCK_DIAMETER/2, 0) //10:00

  rotate(PI/6)
  stroke(color)
  line(0, (CLOCK_DIAMETER/2)-10, 0, CLOCK_DIAMETER/2)   //2:00 (CLOCK_DIAMETER/2)-5, CLOCK_DIAMETER/2
  line((CLOCK_DIAMETER/2)-10, 0, CLOCK_DIAMETER/2, 0)   //5:00
  line(0, -((CLOCK_DIAMETER/2)-10), 0, -CLOCK_DIAMETER/2) //8:00
  line(-((CLOCK_DIAMETER/2)-10), 0, -CLOCK_DIAMETER/2, 0) //11:00

  pop();
}

function calcRadianTime() {
  let date = new Date();

  let hours     = date.getHours();
  let minutes   = date.getMinutes();
  let seconds   = date.getSeconds();
  let milliSec  = date.getMilliseconds();
  
  let totalTimeMillisec = (hours*3600000) + (minutes*60000) + (seconds*1000) + (milliSec);
  let hoursMilliSec     = totalTimeMillisec / 3600000;
  let minutesMilliSec   = (hoursMilliSec - floor(hoursMilliSec)) * 60;

  if (hoursMilliSec > 12) {
    blackWhiteGradient = 255 - (255 * ((hoursMilliSec - 12) / 12));
    return [TWO_PI*(hoursMilliSec-12)/12, TWO_PI*minutesMilliSec/60]; //date.getHours() returns up to 24 hours, so 12 hours have to be subtracted if it's past noon
  }
  blackWhiteGradient = 255 * ((hoursMilliSec) / 12);
  return [TWO_PI*hoursMilliSec/12, TWO_PI*minutesMilliSec/60];

}

function drawTimeHands(color = 0) {
  let hourHandRotate   = 0;
  let minuteHandRotate = 0;

  if (useLocalTime == true) {
    calcs = calcRadianTime();
    hourHandRotate = calcs[0] + PI;
    minuteHandRotate = calcs[1] + PI;
  }
  //automated calculation
  else {
    hourHandRotate = angleMeasure;
    minuteHandRotate = (hourHandRotate)*3;
  }
  
  calcs = calcRadianTime();
  hourHandRotate = calcs[0] + PI;
  minuteHandRotate = calcs[1] + PI;

  //drawing the hour hand and rotating it
  rotate(hourHandRotate);
  stroke(color);
  line(0,0,0,(CLOCK_DIAMETER/2)-100);

  //drawing the minute hand and rotating it
  rotate(-hourHandRotate + minuteHandRotate); //previous angle has to be subtracted b/c rotate() is cumulative for each call
  stroke(color);
  line(0,0,0,(CLOCK_DIAMETER/2)-50);
     
  if (useLocalTime == false) {
    angleMeasure += (PI/24);
  
    if (angleMeasure >= 2*(TWO_PI)) {
      angleMeasure = 0;
      cycleCount++;
    }
    if (cycleCount % 2 == 1) {
      blackWhiteGradient -= PI/24;
    }
    else {
      blackWhiteGradient += PI/24;
    }
  }
}

function draw() {
  push();
  translate(floor(windowWidth/2),floor(windowHeight/2));
  drawClock(blackWhiteGradient);
  drawTimeHands(blackWhiteGradient);
  pop();
}

















