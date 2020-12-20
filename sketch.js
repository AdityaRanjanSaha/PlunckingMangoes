const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3;
var boy;
var tree;
var stone;
var slingShot;

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
	
	tree = new Tree(1000,200,10,10); 

	boy = new Boy(400,350);
	
  stone = new Stone(340,300);

	mango1 = new Mango(900,150);
	mango2 = new Mango(950,100);
	mango3 = new Mango(1000,125);

  slingShot = new SlingShot(stone.body,{x:340,y:300});
}


function draw() {
  Engine.update(engine);
  background("255");
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  //slingShot.display();


}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

