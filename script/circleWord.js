var font;
var vehicles = [];
var posX = 400;
var posY = 450;
var word = ["experiment", "curious","active","personal","enthusiastic"];

function preload(){
  font = loadFont('Montserrat-Bold.ttf');
  textAlign(CENTER);
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(20);

    var randomword = random(word); //pick a random word!

    var points = font.textToPoints(randomword, posX, posY, 150);
    
    // console.log(points);

    // Loop to find out the lines of the text
    for (var i = 0; i < points.length; i++) {
        var pt = points[i];
        var vehicle = new Vehicle(pt.x, pt.y);
        // push into array
        vehicles.push(vehicle);
        // stroke(255);
        // strokeWeight(6);
        // point(pt.x, pt.y);
    }
}
  
function draw(){
  background(20);
  for (var i = 0; i < vehicles.length; i++) {
      var v = vehicles[i];
      v.behaviors();
      v.update();
      v.show();
  }
}