
var bird;
var pipes = [];
var wing;
var flake = [];


function setup() {
  createCanvas(800, 400);
  frameRate(100);
  bird = new Bird();
  pipes.push(new Pipe());
  img2 = loadImage('https://charlesgoell1.github.io/Advanced-Apps/Donkey1.png')
  img = loadImage('https://charlesgoell1.github.io/Advanced-Apps/background.jpg');
  for (var i = 0; i < 10; i++) {
    flake[i] = new Donkey();
  }

}

function draw() {
  background(img,0,0);
  new Audio('https://charlesgoell1.github.io/Advanced-Apps/RASPUTIN.mp3').play()
	  for (var i = 0; i < flake.length; i++) {
    flake[i].fall();
    flake[i].show();
    }
  for (var j = pipes.length-1; j >= 0; j--) {
    pipes[j].show();
    pipes[j].update();

    if (pipes[j].hits(bird)) {
      console.log("HIT");
    }


    if (pipes[j].offscreen()) {
      pipes.splice(j, 1);
    }
  }

  bird.update();
  bird.col();
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
  

  
  	fill(255);
  textSize(50);
  text(frameCount, 150,100);

}
function mousePressed() {
  if (key == ' ') {
    bird.up(); }
  

}

function Bird() {
  this.y = height/2;
  this.x = 64;
  this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 0;

  this.col = function() {
    fill(232, 183, 25);
    ellipse(this.x, this.y, 32, 24);
   
		fill(0);  
    ellipse(this.x + 8, this.y - 6, 4,4);
  
          if (mouseIsPressed) {
        if (mouseButton == LEFT)
     fill(255,0,0);
    triangle(this.x + 12, this.y, this.x + 12,this.y + 6,this.x + 24,this.y + 6);
    triangle(this.x + 12, this.y, this.x + 12,this.y - 6,this.x + 24,this.y - 6);
     fill(232, 24, 0);
  	triangle(this.x + 8, this.y + 3, this.x - 16, this.y - 24, this.x - 12, this.y);
          } else {
     fill(255,0,0);
    triangle(this.x + 24, this.y, this.x + 12,this.y + 6,this.x + 12,this.y - 6);
     fill(232, 24, 0);
  	triangle(this.x + 8, this.y + 3, this.x - 16, this.y + 24, this.x - 12, this.y);
  	
      }

  } 
  this.up = function() {
    this.velocity += this.lift;
  }
  
  
  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}
    

function Pipe() {
  
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 50;
  this.speed = 5;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {   
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }
  



     
this.show = function() {
    fill(0,255,0);
    if (this.highlight) {
      fill(0);
  		strokeWeight(5);
    	stroke(0)
      fill(255,0,0);
      textSize(50);
      text("GOOBER GOT BEANED",100,150);
      textSize(75);
      text("Clout Level:" + "	" + frameCount, 100,300);
      noLoop();
      

    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
  
r = random(255)
g = random(255)
b = random(255)
  
}
function Donkey() {
  this.x = random(400,500);
  this.y = random(height);
  this.z = 100;
  this.len = map(100,100,100,100,100);
  this.xspeed = map(random(0, 20), 0, 20, 1, 20);
	
	
  this.fall = function() {
    this.x = this.x - this.xspeed;
    var grav = map(this.z, 0, 20, 0, 0.2);
    this.xspeed = this.xspeed

    if (this.x < -100) {
      this.x = random(800,900);
    }

  this.show = function() {
    fill(255)
    image(img2, this.x, this.y, this.z)
  }
  }
}