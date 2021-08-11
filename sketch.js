var garden, rabbit;
var gardenImg, rabbitImg;
var apple, appleImg;
var leaves, leavesImg;
var lifetime;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200, 400, 400);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  edges = createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX;

  var randomSprites = Math.round(random(1, 2));

  if (frameCount % 80 == 0) {
    if (randomSprites === 1) {
      createApples();
    } else {
      createLeaves();
    }
  }

  drawSprites();
}

function createApples() {
  apple = createSprite(100, 0, 25, 25);
  apple.addImage(appleImg);
  apple.x = Math.round(random(50, 350));
  apple.velocityY = 2;
  apple.scale = 0.05;
  lifetime=15;
}

function createLeaves() {
  leaves = createSprite(100, 0, 25, 25);
  leaves.addImage(leavesImg);
  leaves.x = Math.round(random(50, 350));
  leaves.velocityY = 2;
  leaves.scale = 0.05;
  lifetime=15;
}