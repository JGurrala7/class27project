const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5, bob6, sling1, sling2, sling3, sling4, sling5, bar;

function setup() {
createCanvas(800, 400);
engine = Engine.create();
world = engine.world;
bob1=new Bob(300,350,50);
bob2=new Bob(350,350,50);
bob3=new Bob(400,350,50);
bob4=new Bob(450,350,50);
bob5=new Bob(500,350,50);
bar = new Cradle (400,100,300,40);
sling1= new Rope (bob1.body,bar.body,-50*2,0);
sling2= new Rope (bob2.body,bar.body,-25*2,0);
sling3= new Rope (bob3.body,bar.body,-0*2,0);
sling4= new Rope (bob4.body,bar.body,25*2,0);
sling5= new Rope (bob5.body,bar.body,50*2,0);
Engine.run(engine);
}


function draw() {
  background(100);
  rectMode(CENTER);
  background("red")
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bar.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  keyPressed();
  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob1.body, bob1.body.position,{x:75,y:-75});
	 }
   }





