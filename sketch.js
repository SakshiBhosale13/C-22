const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var groundoption = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,400,20,groundoption);
  World.add(world,ground);

  var balloption = {
    restitution:1.0
  }

  ball = Bodies.circle(200,100,20, balloption);
  World.add(world,ball);

}

function draw() {
  background("pink");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20);
   
}