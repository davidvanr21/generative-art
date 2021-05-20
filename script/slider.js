
var slider;
var circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  
  // (min, max, [value], [step])
  slider = createSlider(0, 300, 1);
  
  slider.changed(drawScene);

  drawScene()
}

function drawScene() {

  // while (circles.length < 20){
    for (var i = 0; i < slider.value(); i++){
      var circle = {
        x: random(width),
        y: random(height),
        r: random(20,175)
      };
      
    var overlapping = false;
    var protection = 0;

    for (var j = 0; j < circles.length; j++){
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y)
      if(d < circle.r + other.r){
        overlapping = true;
      }
    }

    if(!overlapping){
      circles.push(circle);
    }

    protection++;

    // if (protection > 1000){
    //   break;
    // }
  }
  
    for (var i = 0; i < circles.length; i++){
      fill(255, 50);
      noStroke();
      ellipse(circles[i].x, circles[i].y, circles[i].r*2, circles[i].r*2);
  }
}

function draw() {
  console.log(slider.value());
}


// source: https://p5js.org/reference/#/p5/createSlider
// source random circles: https://www.youtube.com/watch?v=XATr_jdh-44
// source slider.changed(): https://editor.p5js.org/SjorsWijsman/sketches/XlxxDBT8G