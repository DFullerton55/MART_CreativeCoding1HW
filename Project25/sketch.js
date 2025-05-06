var bg;
var gb;
var gb2;
var nb;
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
var xNote = 600;
var yNote = 600;
var wNote = 200;
var hNote = 200;
var noteTime =0;
var notescore = 0;
var noteOpen =true; 

function preload(){
bg = loadImage("ghostpxlart1.png");
gb = loadImage("ghoulpxlart1.png");
gb2 = loadImage("ghoulpxlart2.png");
nb = loadImage("noteblock1.png")
music = loadSound("squarehammer.mp3");
}



function setup(){
    createCanvas(2150,1080);
    userStartAudio();
    let playButton = createButton("Test Audio");
    playButton.position(1000, 20);
    playButton.mousePressed(() => {
        music.loop(); });

}


function draw(){
    background(54,100,100);

    image(bg,x,y,imW,imWD);

    fill(25, 200, 255);

    image(gb,xM,yM,imGW,imGH);

    fill(25, 200, 255);

    image(gb2,1500,300,imGW2,imGH2);

    fill(25, 200, 255);
    
    image(nb,xNote,yNote, wNote,hNote );
    if (
      x < xNote + wNote &&
      x + imW > xNote &&
      y < yNote + hNote &&
      y + imWD > yNote
  ) {
     
      xNote = random(0, width - wNote);
      yNote = random(0, height - hNote); 
      notescore++;
      console.log("note block collected Score: " + notescore);

       if (!music.isPlaying()) {
            music.play();
        }

        noteTime = millis();

    }
    if (millis() - noteTime > 10000 && music.isPlaying()) {
    music.stop();
    }
  fill(0,255,0);
  textFont('Courier New');
  textSize(40);
  text("Notes Scored " + notescore,60,60);
  
  
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