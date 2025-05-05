var bg;

function preload(){
bg = loadImage("ghostpxlart1.png");
}



function setup(){
    createCanvas(2150,1080);
}


function draw(){
    background(54,100,100)
    image(bg,1000,500,200,200);
    fill(25, 200, 255);
}
