
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var h1,g1,r1,s1,r2,s2
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
h1=new hammer(50,50)
g1=new g(600,550,1200,20)
r1=new rubber(700,450,70)
s1=new stone(600,200,100,100)
r2=new rubber(200,500,100)
s2=new stone (100,100,200,200)
}


function draw() {
 
  background("lightblue");
  Engine.update(engine)
  h1.display()
  g1.display()
  r1.display()
  s1.display()
  r2.display()
  s2.display()
  drawSprites();
 
}



