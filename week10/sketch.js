
var redColor = 120;
var greenColor = 440;
var blueColor = 220;

var x = 100;
var y = 200;
var diameter = 70;

var eyeX = 250
var eyeY = 150
var direction = 60
var directioned

var mouthX = 150
var mouthY = 250
var mouthDirection = 90

var noseX 
var noseY
var noseDirection 

var irisX 
var irisY
var irisDirection

var movement;
var movementing;
var mouthmovement;


function setup() {
    createCanvas(400, 450);
    movement = floor(random() *10 )+1;
    movementing = floor(random() *10 )+1;
    movement = floor(random() *10 )+1;
    irisDirection =floor(random() *10 )+1;
  }
  
  function draw() {
    background(redColor,greenColor, blueColor);
    text('Dylan Fullerton', 10, 10);

    circle(x, y, diameter);
    if(x >= 400 || x <= 0)
        {
            movement *=-1;
        }
        x += movement;
    circle(eyeX, eyeY, direction);
    if(eyeX >= 400 || eyeX <= 0)
        {
            movementing *=-1;
        }
        eyeX += movementing;
    point(360,90,70);
    point(x, y, diameter);
    if(x < 400)

    square(mouthX,mouthY,90);
    if(mouthY >= 450 || mouthY <= 0)
        {
            movement *=-1;
        }
        mouthY += movement;
    line(70,20,300,20);
    if(x >= 400 || x <= 0)
        {
            movement *=-1;
        }
        x += movement;

    triangle(200, 200, 200, 100, 190, 100)

  }