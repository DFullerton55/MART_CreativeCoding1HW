var x = 50;
var y = 50;
var diameter = 25;
var squareX = 300;
var squareY = 50;


var movement;
var movementing;

function setup() {
  createCanvas(800, 600);
}
function draw() {
    background(90,50,160);
createSquare();
squareMovement();
deployTerrain();
deployExit();
exitgateComplete();
}

function squareMovement(){
    if (key == "d") {
        x += 10;
      } else if (key == "a") {
        x -= 10;
      }
      if (key == "s") {
        y += 10;
      } else if (key == "w") {
        y -= 10;
      }

      if (x >= 800) {
        x = 50;
      }
      if (y >= 600) {
        y = 50;
      }

      if (x <= 0){
        x = 700
      }
      if (y <=0){
        y= 600
      }
}

function createSquare(){
    fill(25, 200, 255);
    square(x, y, diameter);
    fill(200,200,40);
    square(squareX, squareY, 20);
}

function deployTerrain(){
    fill(190,100,235);
  circle(250, 90, 45);
  circle(400, 300, 45);
  circle(20, 390, 60);
  fill(240,10,180);
  square(700,500,90);
  fill(190,100,50);
  square(700,10,90);
}

function deployExit(){
    fill(144,10,300);
    text('Exit Gate here', 700, 120);
    fill(144,10,300);
    text('Exit Gate here', 700, 490);
}

function exitgateComplete(){
    if (x > 700) {
        alert("Exit Gate Reached! You Win");
}
}