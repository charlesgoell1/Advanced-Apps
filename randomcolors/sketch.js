var r, g, b;

function setup() { 
createCanvas(400, 400);
background(0);
frameRate(120);
} 

function draw(){

}

function mouseDragged() {
var r, g, b;

r = random(255);
g = random(255);
b = random(255);

ellipse(mouseX,mouseY,25,25);
fill(r,g,b)
stroke(r,g,b)
strokeWeight(2)

r = random(255);
g = random(255);
b = random(255);

}

