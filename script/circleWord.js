var font;
var vehicles = [];
var posX = 300;
var posY = 550;
var word = ["inquisitive", "curious", "active", "personal", "enthusiastic", "creative", "playful", "studiously"];

function preload(){
  font = loadFont('Montserrat-Bold.ttf');
  textAlign(CENTER);
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(20);

    // pick a random word
    var randomword = random(word);
    // if the new word is the same as the current one, repeat the function
    if (randomword === randomword) {
       random(word);
    }

    var points = font.textToPoints(randomword, posX, posY, 270);
    
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