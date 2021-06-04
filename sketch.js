//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

//var engine, world;

var wall1, wall2, wall3, wall4, wall5, 
wall6, wall7, wall8, wall9, wall10, 
wall11, wall12, wall13, wall14, wall15, 
wall16, wall17, wall18, wall19, wall20;

var gost1, gost2, gost3, gost4;
var pacMan;

function setup() {
  createCanvas(800,400);

  //Outer walls
  wall1 = createSprite(400, 50, 600, 5);
  wall2 = createSprite(100, 200, 5, 300);
  wall3 = createSprite(400, 350, 600, 5);
  wall4 = createSprite(700, 200, 5, 300);

  //Inner walls
  wall5 = createSprite(240, 150, 280, 5);
  wall6 = createSprite(300, 100, 300, 5);
  wall7 = createSprite(450, 150, 5, 100);
  wall8 = createSprite(325, 200, 250, 5);
  wall9 = createSprite(200, 250, 5, 100);
  wall10 = createSprite(150, 250, 5, 100);
  wall11 = createSprite(300, 300, 200, 5);
  wall12 = createSprite(390, 250, 300, 5);
  wall13 = createSprite(540, 175, 5, 150);
  wall14 = createSprite(200, 150, 200, 5);
  wall15 = createSprite(490, 150, 5, 100);
  wall16 = createSprite(590, 100, 100, 5);
  wall17 = createSprite(590, 220, 5, 150);
  wall18 = createSprite(470, 280, 5, 60);
  wall19 = createSprite(640, 220, 5, 150);

  //Gost Creation
  gost1 = createSprite(130, 70, 20, 20);
  gost1.shapeColor = "red";
  
  gost2 = createSprite(160, 70, 20, 20);
  gost2.shapeColor = "pink";

  gost3 = createSprite(190, 70, 20, 20);
  gost3.shapeColor = "cyan";

  gost4 = createSprite(220, 70, 20, 20);
  gost4.shapeColor = "orange";

  pacMan = createSprite(130, 125, 20, 20);
  pacMan.shapeColor = "yellow";

  //gost1 = new Gost(200, 200);
  
}

function draw() {
  background("black");  
  //Engine.update(engine);
  //gost1.display();
  drawSprites();
}