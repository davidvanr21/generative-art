var font;
var vehicles = [];

function preload(){
  font = loadFont('Montserrat-Bold.ttf');
}

function setup(){
    createCanvas(800,500);

    let points = font.textToPoints('animation', 50, 200, 130);

    // Loop to find out the lines of the text
    for (var i = 0; i < points.length; i++) {
        var pt = points[i];
        var vehicle = new Vehicle(pt.x, pt.y);
        // push into array
        vehicles.push(vehicle);
    }
}
  
function draw(){
  background(0);
  for (var i = 0; i < vehicles.length; i++) {
      var v = vehicles[i];
      v.behaviors();
      v.update();
      v.show();
  }

}