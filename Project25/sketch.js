var bg;
var gb;
var gb2;
var music;
var x = 1000;
var y = 500;
var imW = 200;
var imWD = 200;
var imGW = 200;
var imGH = 200;
var imGW2 = 200;
var imGH2 = 200;
var xM = 500;
var yM = 200;
var notescore = 0;

function preload(){
bg = loadImage("ghostpxlart1.png");
gb = loadImage("ghoulpxlart1.png");
gb2 = loadImage("ghoulpxlart2.png");
music = loadSound("squarehammer.mp3");
}



function setup(){
    createCanvas(2150,1080);
    userStartAudio();
    let playButton = createButton("Begin Game");
    playButton.position(1000, 20);
    playButton.mousePressed(() => {
        music.loop();
      });

}


function draw(){
    background(54,100,100)
    image(bg,x,y,imW,imWD);
    fill(25, 200, 255);
    image(gb,xM,yM,imGW,imGH);
    fill(25, 200, 255);
    image(gb2,1500,300,imGW2,imGH2);
    fill(25, 200, 255);
}

function keyPressed(){
    if (keyCode === 37) {
      x -= 35;
    } else if (keyCode === 39) {
      x += 35; 
    } else if (keyCode === 38) {
      y -= 35;
    } else if (keyCode === 40) {
      y += 35;
    }
}