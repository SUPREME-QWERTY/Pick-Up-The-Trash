
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var edges;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

    edges = createEdgeSprites

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	paperOb=new paper(200,450,75);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperOb.display();
  keyPressed();

}

function keyPressed(){

if(keyDown(38)){

	Matter.Body.applyForce(paperOb.body,paperOb.body.position,{x:130,y:-140})
	

}


}