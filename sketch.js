
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var boy,tree,stoneObject,mango1,mango2,mango3,mango4,mango5,boyImage;
var ground;
function preload()
{
	 boyImage=loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 700);
    boy=createSprite(200,600,20,20);
    boy.addImage(boyImage);
    boy.scale=0.1;
	engine = Engine.create();
  world = engine.world;
  stoneObject=new Stone(200,50,20,20);
  stoneObject.scale=4;
  ground=new Ground();
  mango1=new Mango(200,300,40);
  mango1.scale=0.005;
  mango2=new Mango(180,280,40);
  mango2.scale=0.005;
  mango3=new Mango(230,320,40);
  mango3.scale=0.005;
  mango4=new Mango(160,260,40);
  mango4.scale=0.005;
  mango5=new Mango(240,340,40);
  mango5.scale=0.005;
  tree=new Tree(1300,650,50,200);
  tree.scale=3.5;
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stoneObject.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  tree.display();
  detectCollision(stoneObject,mango1);
  drawSprites();
 
}
function mouseDragged(){
   Matter.body.setPosition(stoneObject.body,{x:mouseX,y:mouseY});
}
function mouseRealeased(){
  Elastic.fly();
}
function detectCollision(lstone,lmango){
   mangoBodyPosition=lmango.body.position;
   stoneObjectBodyPosition=lstone.body.position;
  var distance=dist(stoneObjectBodyPosition.x,stoneObjectBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body,false);
  }
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stoneObject.body,{x:235,y:420});
    Elastic.attach(stoneObj.body);
  }
}