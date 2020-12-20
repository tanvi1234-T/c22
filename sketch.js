const Engine = Matter .Engine
const World = Matter .World
const Bodies = Matter .Bodies

var engine,world,obj1;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  
  var options={
    isStatic:true
  }
  var obj2options={
    restitution: 0.5
  
  }

  obj1 = Bodies.rectangle(10,390,600,30,options);
  World.add(world,obj1);
  
  obj2=Bodies.rectangle(100,20,60,60,obj2options);
  World.add(world,obj2);
  console.log(obj1);


}

function draw() {
  background("purple");  
  
  Engine.update(engine);
  rect(obj1.position.x,obj1.position.y,600,30);
  rect(obj2.position.x,obj2.position.y,60,60);
}