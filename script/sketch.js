// Source bounce shape: https://editor.p5js.org/icm/sketches/BJKWv5Tn

const line1Place = 110;
const line2Place = 150;
const line3Place = 210;
const line4Place = 250;

const textColor = 240;
const strokeWidth = 8;

let x = 210;
let y = 180;
let yspeed = 5;

let r = 0.2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255,99,71);

  // Name
  // d
  circle(100, 200, 20);
  strokeWeight(strokeWidth);
  stroke(textColor);
  noFill();
  line(line1Place, 210, line1Place, 175);
  
  // a
  circle(140, 200, 20);
  strokeWeight(strokeWidth);
  stroke(textColor);
  noFill();
  line(line2Place, 210, line2Place, 190);

  // v  
  line(180, 210, 170, 190);
  line(180, 210, 190, 190);
  
  // i
  line(line3Place, 210, line3Place, 190);
  // animated dott
  ellipse(x, y, r*2, r*2);
  y += yspeed;
  if (y > 185 - r || y < r) {
    yspeed = -yspeed;
  }
  
   // d
  circle(240, 200, 20);
  strokeWeight(strokeWidth);
  stroke(textColor);
  noFill();
  line(line4Place, 210, line4Place,175);
  
  }