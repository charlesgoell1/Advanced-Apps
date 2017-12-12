
var bird;
var pipes = [];


function setup() {
  createCanvas(800, 600);
  frameRate(100);
  bird = new Bird();
  pipes.push(new Pipe());
  
}

function draw() {
  background(r,g,b);
 
  new Audio('https://www.bensound.com/royalty-free-music?download=dubstep').play()

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.col();
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
  

  
  	fill(0);
  textSize(50);
  text(frameCount, 150,100);

}
function mousePressed() {
  if (key == ' ') {
    bird.up(); }
  if (keyCode === ' ') {   
	 bird.changeColor();
  }
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
    fill(255,0,0);
    triangle(this.x + 24, this.y, this.x + 12,this.y + 6,this.x + 12,this.y - 6);
		fill(0);  
    ellipse(this.x + 8, this.y - 6, 4,4);
    fill(232, 24, 207);
  	triangle(this.x + 8, this.y + 3, this.x - 16, this.y + 24, this.x - 12, this.y);
    

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

this.changecolor = function() {
this.col =  
  	fill(232, 24, 207);
    ellipse(this.x, this.y, 32, 24);
  	fill(232, 183, 25);
    ellipse(this.x, this.y, 32, 24);
    fill(255,0,0);
    triangle(this.x + 24, this.y, this.x + 12,this.y + 6,this.x + 12,this.y - 6);
		fill(0);  
  	triangle(this.x + 8, this.y + 3, this.x - 16, this.y - 24, this.x - 12, this.y);

this.flap = false;
return false;
}
    

function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 2;

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
    fill(255);
    if (this.highlight) {
      fill(0);
  		strokeWeight(10);
    	stroke(10)
      fill(255,0,0);
      textSize(50);
      text("GOOBER GOT BEANED",100,200);
      textSize(75);
      text("Clout Level:" + "	" + frameCount, 100,400);
      restGame();
  
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