
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world,engine;
var ground;
var tree;
var boy,boyImage;
var stone;
var mango,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
//var slingshot;
function preload()
{
	boyImage = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;
  
  	//Create the Bodies Here.

   ground = new Ground();
   
   stone = new Stone();
   boy= createSprite(200,650,20,20);
   boy.scale=0.05;
   boy.addImage(boyImage);
   mango = new Mango();
   mango1 = new Mango(500,500,40,40);
   mango2 = new Mango(600,400,40,40);
   mango3 = new Mango(559,499,40,40);
   mango4 = new Mango(650,400,40,40);
   mango5 = new Mango(650,700,40,40);
   mango6 = new Mango(700,450,40,40);
   mango7 = new Mango(550,450,40,40);
   mango8 = new Mango(650,450,40,40);
   mango9 = new Mango(750,490,40,40);
   mango10 = new Mango(550,500,40,40);
   //slingshot = new Slingshot(stone.body,{x:150,y:600});
  Engine.run(engine);
  tree = new Tree();
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  stone.display();
  tree.display();
  boy.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  //slingshot.display();
  drawSprites();
 
}

function keyPressed(){
  if (keyCode === 32){
    matter.Body.setPosition(stoneObj.body,{x:235, y:420})
    launcherObject.attach(stoneObj.body);
  }
}

