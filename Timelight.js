let blackWhiteGradient = 0;
let CLOCK_DIAMETER = 400;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function drawClock(color = 0) {
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
}

function draw() {
  push();
  translate(floor(windowWidth/2),floor(windowHeight/2));
  drawClock();
  pop();
}





