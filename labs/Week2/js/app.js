function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true;
    }
  }
  return false;
}

class Drop {
  constructor() {
    //randomize starting point of drops on x axis and set starting y
    this.x = Math.random() * 400;
    this.y = 0;
  }
  //initial raindrop characteristics
  update() {
    this.y++;
    fill(0, 0, 200);
    circle(this.x, this.y, 5);
    //remove drops from ground
    if (this.y > 275) {
      //this.y = 0;
      rainManager.drops.splice(0, 1);
    }
  }
}

class RainManager {
  constructor() {
    //array of drops
    this.drops = [];
  }

  createDrop() {
    //make a new drop
    var newDrop = new Drop();

    //add this drop to our collection of drops
    this.drops.push(newDrop);
  }
  //create new raindrops
  update() {
    for (var i = 0; i < this.drops.length; i++) {
      this.drops[i].update();
    }
  }
}

class Ground {
  //constructor
  constructor(drops) {
    this.x = 0;
    this.y = 275;
    this.blue = 5;
    this.drops = drops;
    this.dropsHit = [];
  }

  //start the drop hit count

  //update - draws the rectangle to the screen
  update() {
    fill(0, 0, this.blue);
    rect(this.x, this.y, 400, 30);
    this.dropHit();
    //set the starting color
  }
  //drop hit - called when a rain drop gets low enough (how do you inform it?)
  dropHit() {
    for (var i = 0; i < this.drops.length; i++) {
      if (this.drops[i].y >= 275) {
        if (!containsObject(this.drops[i], this.dropsHit)) {
          this.dropsHit.push(this.drops[i]);
          if (this.dropsHit.length % 10 == 0 && this.dropsHit.length != 0) {
            this.blue += 20;
          }
        }
      }
    }
  }
}

//global variables
var rainManager = new RainManager();
var ground = new Ground(rainManager.drops);

//Run once before the application starts
function setup() {
  //create the canvas the rain drops use
  createCanvas(400, 300);
}

//runs 60 times a second, or so
function draw() {
  //clear out background
  background(255);

  //create a new drop on a 1% chance
  if (Math.random() < 0.05) {
    rainManager.createDrop();
  }
  //call ground update
  ground.update();
  //call rainManager update function
  rainManager.update();
}
