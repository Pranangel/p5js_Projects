let blackWhiteGradient = 0;
let CLOCK_DIAMETER = 400;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function drawClock() {
  circle(0, 0, CLOCK_DIAMETER);
  line(0, (CLOCK_DIAMETER/2)-40, 0, CLOCK_DIAMETER/2)     //12:00
  line((CLOCK_DIAMETER/2)-40, 0, CLOCK_DIAMETER/2, 0)     //3:00
  line(-((CLOCK_DIAMETER/2)-40), 0, -CLOCK_DIAMETER/2, 0) //6:00
  line(0, -((CLOCK_DIAMETER/2)-40), 0, -CLOCK_DIAMETER/2) //9:00

  rotate(PI+(PI/6))
  line(0, (CLOCK_DIAMETER/2)-10, 0, CLOCK_DIAMETER/2)     //1:00
  line((CLOCK_DIAMETER/2)-10, 0, CLOCK_DIAMETER/2, 0)     //4:00
  line(0, -((CLOCK_DIAMETER/2)-10), 0, -CLOCK_DIAMETER/2) //7:00
  line(-((CLOCK_DIAMETER/2)-10), 0, -CLOCK_DIAMETER/2, 0) //10:00

  rotate(PI/6)
  line(0, (CLOCK_DIAMETER/2)-10, 0, CLOCK_DIAMETER/2)     //2:00
  line((CLOCK_DIAMETER/2)-10, 0, CLOCK_DIAMETER/2, 0)     //5:00
  line(0, -((CLOCK_DIAMETER/2)-10), 0, -CLOCK_DIAMETER/2) //8:00
  line(-((CLOCK_DIAMETER/2)-10), 0, -CLOCK_DIAMETER/2, 0) //11:00
}

