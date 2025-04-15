var x = 50;
var y = 50;
var diameter = 25;
var squareX = 300;
var squareY = 50;

var movement;
var movementing;

function setup() {
  createCanvas(800, 600);
  movement = floor(random() *10 )+1;
    movementing = floor(random() *10 )+1;
}
function draw() {
  background(250,50,160);
  fill(25, 200, 255);
  square(x, y, diameter);
  fill(200,200,40);
  square(squareX, squareY, 20);
  fill(190,100,235);
  circle(250, 90, 45);
  circle(400, 300, 45);
  circle(20, 390, 60);
  fill(240,10,180);
  square(700,300,90)
  fill(100,100,50);
  text('Exit Here', 700, 290);

  if (x >= 800) {
    x = 50;
  }
  if (y >= 600) {
    y = 50;
  }

  if (diameter < 200) {
    diameter += 0;
  } else if (diameter >= 200) {
    diameter = 1;
  }
  if (x > 700) {
    alert("You Win!");
  }
  else if (x <= 40) {
    alert("find the exit and avoid the other shapes");
  }
}

function keyPressed() {
  if (key == "d") {
    x += 20;
  } else if (key == "a") {
    x -= 20;
  }
  if (key == "s") {
    y += 20;
  } else if (key == "w") {
    y -= 20;
  }
}
