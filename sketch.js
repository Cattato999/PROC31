const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var ground;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2, height, width, 15);
  
  for(var k = 0; k <=width; k=k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,  175));
  }
  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,  375));
  }
  var particles = new Particle();
  this.body = Bodies.circle(x, y,this.r,options);
  this.color=color(random(0,255), random(0,255), random(0,255));
  World.add(world,this.body);
}


function draw() {
  background("black");  
  
  Engine.update(engine);
  ground.display();
  
  for(var k=0;k<divisions.length;k=k+1){
    divisions[k].display();
  }
  for(var j=0;j<plinkos.length;j=j+1){
    plinkos[j].display();
  }
  particles.display();
  
}