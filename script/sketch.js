// variables
var words = ["experiment", "curious","active","personal","enthusiastic"];

function preload(){
	font = loadFont('Merriweather-Bold.ttf')
}

// setup
function setup () {
  createCanvas(windowWidth, 400);
  background(255, 0, 0);
  var button = createButton("Reset word");
  button.mousePressed(reset);

  textFont(font);
  textSize(128);
  fill(255);
  noStroke();
  text('curious', 10, 200);
}

// everything changes within this function
  function reset () {
createCanvas(windowWidth, 400);
  background(255, 0, 0);
  var randomword = random(words); //pick a random word!
  text(randomword, 50, 100);

  // wanneer hetzelfde woord wordt gegenereerd, voer dan opnieuw de functie uit
  if (randomword === randomword) {
  random(words);
}
}