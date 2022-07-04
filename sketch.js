var font;
var vehicles = [];

function preload() {
  font = loadFont("LuckiestGuy-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  word('Yo', width*0.25, height*0.25);
  word('Hi', width*0.3, height*0.45);
  word('Welcome', width*0.35, height*0.65);
  word('To Dziya Web', width*0.35, height*0.85);
}

function draw() {
  background(0);
  
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}

function word(string, width, height){
  var points = font.textToPoints(string, width, height, 150);
  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
}}