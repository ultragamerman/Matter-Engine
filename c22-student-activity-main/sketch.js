const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var engine,world;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    var nani = {
        isStatic:true
    } 
    var boing = {
        restitution:2
    }

    object = Bodies.rectangle(200,200,10,10,boing);
    World.add(world,object);
    ground = Bodies.rectangle(200,350,400,10,nani);
    World.add(world,ground);

    console.log(object);
}

function draw(){
    background(0);
    
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,10,10);
    rect(ground.position.x,ground.position.y,400,10);
}
