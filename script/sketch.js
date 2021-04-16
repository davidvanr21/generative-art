/* 👇 Start writing your p5.js code here */

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  ellipse(width / 2, height / 2, 20);
  strokeWeight(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}