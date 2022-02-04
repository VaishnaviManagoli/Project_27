
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);
	bobObject1 = new bob(320,575,40)
	bobObject2 = new bob(360,575,40)
	bobObject3 = new bob(360,575,40)
	bobObject4 = new bob(360,575,40)
	bobObject5 = new bob(360,575,40)
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	rope3=new rope(bob2.body,roofObject.body,-20, 0)
	rope4=new rope(bob2.body,roofObject.body,-10, 0)
	rope5=new rope(bob2.body,roofObject.body, 0, 0)

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
}






