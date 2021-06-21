// source example: https://purin.co/Experiments-with-P5-js
// source code: http://p5js.site44.com/018/sketch.js

var u;
var count;
var mods = [];

let img;

function setup() {
  createCanvas(windowWidth/2, windowHeight);
  // spacing between shapes
  u = 330;
  var highCount = (height/290)+2;
  var wideCount = (width/290)+2;
  count = int(highCount * wideCount);

  img = loadImage('imgage1.jpg');
  
  var index = 0;
  for (var xc = 0; xc < wideCount; xc++) {
    for (var yc = 0; yc < highCount; yc++) {
      mods[index++] = new Module(int(xc)*u,int(yc)*u);
    }
   }
}

function draw() {
  //background(200);
  noStroke();
  for (var i = 0; i <= count; i++) {
    mods[i].draw2();
    mods[i].Over();
  }
}

function mousePressed() {
  for (var i = 0; i <= count; i++) {
    mods[i].Pressed();
  }
}

function keyTyped() {
  for (var i = 0; i <= count; i++) {
    mods[i].Typed();
  }
  
//   these keys are disabled for the function
  if (keyCode === UP_ARROW || 
  keyCode === DOWN_ARROW ||
  keyCode === LEFT_ARROW ||
  keyCode === RIGHT_ARROW ||
  keyCode === BACKSPACE ||
  keyCode === DELETE ||
  keyCode === ENTER ||
  keyCode === RETURN ||
  keyCode === TAB ||
  keyCode === ESCAPE ||
  keyCode === SHIFT ||
  keyCode === CONTROL ||
  keyCode === OPTION ||
  keyCode === ALT  ) {
    mods[i].Typed();
}
}

function Module(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.a = 0;
  this.b = false;
  this.c = 200;
  this.isOverRectangle = false;
  // state of shapes
  this.k = 0;
  // size
  this.s = 150;
  // rotation
  this.r = 0;
  this.c1 = '#25c4b7';
  this.c2 = '#0f6161';
}

Module.prototype.Pressed = function() {
    if (mouseX>(this.x)-(this.s) && mouseX<(this.x)+(this.s) && mouseY>(this.y)-(this.s) && mouseY<(this.y)+(this.s)){
      this.k = this.k+1;
      if (this.k === 8) {
        this.k = 0;
      }
    }
}

Module.prototype.Typed = function() {
    if (mouseX>(this.x)-(this.s) && mouseX<(this.x)+(this.s) && mouseY>(this.y)-(this.s) && mouseY<(this.y)+(this.s)){
      this.r = this.r+HALF_PI;
    }
}

Module.prototype.Over = function() {
  if (mouseX>(this.x)-(this.s) && mouseX<(this.x)+(this.s) && mouseY>(this.y)-(this.s) && mouseY<(this.y)+(this.s)){
    this.isOverRectangle = true;
  } else {
    this.isOverRectangle = false;
  }
}


Module.prototype.draw2 = function() {
  push();
  translate(this.x, this.y);
  rectMode(CENTER);
  rotate(this.r);
  if (this.k === 0){
    image(img, -40, -40);
    // noFill();
    fill(this.c1);
    rect(0,0,this.s*2,this.s*2);
    // rect(0,0,this.s*2,this.s*2);
  }
  if (this.k === 1){
    fill(this.c1);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c2);
    arc(this.s, 0, this.s*2, this.s*2, HALF_PI, -HALF_PI);
    //triangle(0,0,this.s,-this.s,this.s,this.s);
  }
//   if (this.k === 1){
//     image(img, -20, 0);
//     noFill();
//     rect(0,0,this.s*2,this.s*2);
//   }
  if (this.k === 2){
    fill(this.c1);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c2);
    arc(this.s, this.s, this.s*4, this.s*4, PI, -HALF_PI);
  }
  if (this.k === 3){
    fill(this.c1);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c2);
    arc(this.s, 0, this.s*2, this.s*2, HALF_PI, -HALF_PI);
    arc(-this.s, 0, this.s*2, this.s*2, -HALF_PI, HALF_PI);
  }
  if (this.k === 4){
    fill(this.c2);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c1);
    arc(this.s, 0, this.s*2, this.s*2, HALF_PI, -HALF_PI);
    arc(-this.s, 0, this.s*2, this.s*2, -HALF_PI, HALF_PI);
  }
  if (this.k === 5){
    fill(this.c2);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c1);
    arc(this.s, this.s, this.s*4, this.s*4, PI, -HALF_PI);
  }
  if (this.k === 6){
    fill(this.c2);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c1);
    arc(this.s, 0, this.s*2, this.s*2, HALF_PI, -HALF_PI);
  }
  if (this.k === 7){
    fill(this.c1);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c2);
    rect(0,0,this.s*2,this.s*2);
  }
  
  if(this.isOverRectangle === true)
  {
    fill('rgba(255, 255, 255, 0.2)');
  } else {
	  noFill(); 
  }
  rectMode(CENTER);
  rect(0,0,this.s*2,this.s*2);
  
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}