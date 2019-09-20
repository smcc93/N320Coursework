//create the class for the ball
//the ball class uses a module pattern, you can reuse the code by creating a new instance of the class
class Ball {
  constructor() {
    //initial position of ball
    this.position = { x: 100, y: 100 };
    //starting velocity of ball
    this.velocity = { x: 10, y: 0 };
    this.color = 255;
  }

  update() {
    //change position of the ball by applying velocity
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    fill(this.color);
    //circle attributes
    circle(this.position.x, this.position.y, 20);

    //check to see if ball is beyond canvas
    if (this.position.x < 0 || this.position.x > 400) {
      World.ballBeyond(this);
    }
  }
}

//if ball is beyond the canvas...
//the world object uses the singleton pattern, there should only be one instance of the world even though things can change in it
var World = {
  //starting background color
  bgcolor: [237, 119, 83],
  ballBeyond: function(whichBall) {
    //change background color
    this.bgcolor = [Math.random() * 255, Math.random() * 255, 83];
    //reset x position
    whichBall.position.x = 100;
    //set new velocity
    whichBall.velocity.x = (Math.random() - 0.5) * 20;
    box1.grows();
    box2.grows();
  }
};

//class for a box
// same as the ball class, the box class uses the module pattern
class Box {
  constructor() {
    this.x = Math.random() * 400;
    this.y = Math.random() * 300;
    this.color = [
      Math.random() * 255,
      Math.random() * 255,
      Math.random() * 255
    ];
    this.size = 5;
    this.grow = 0;
  }
  update() {
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
  }

  //Grows in size every time a ball hits an edge and is reset
  grows() {
    this.grow++;
    this.size += this.grow * 5;
    if (this.size > 300) {
      this.size = 5;
    }
  }
}
// "For fun": multiple balls

//create a ball
var ball = new Ball();
var box1 = new Box();
var box2 = new Box();
//create the canvas
function setup() {
  createCanvas(400, 300);
}

//draw background and ball to canvas
function draw() {
  background(World.bgcolor);
  box1.update();
  box2.update();
  ball.update();
}
