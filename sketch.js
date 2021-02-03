//create an engine
//using the engine - create a world
//in that world, create bodies
//add it to the world
//display the bodies

//Namespacing -  not mandatory
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;


function setup(){
  createCanvas(400,400);

//create phy engine
engine = Engine.create();
//create a world
world = engine.world;
//JSON format
var ground_options = {
  isStatic: true
}
//create a body
ground = Bodies.rectangle(200,390,200,20,ground_options);
World.add(world, ground);



}
function draw(){

  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,20);
  
}
