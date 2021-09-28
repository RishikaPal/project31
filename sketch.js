const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var Events=Matter.Events;
var particles=[]
var divisions=[]
var plinkos=[]
var divisionHeight=300;
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(width/2,height,width,20)
for(var k=0;k<=width;k=k+80){
divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for (var j = 75; j <=width; j=j+50) { plinkos.push(new Plinko(j,75)); }
   for (var j = 50; j <=width-10; j=j+50) { plinkos.push(new Plinko(j,175)); }
    for (var j = 75; j <=width; j=j+50) { plinkos.push(new Plinko(j,275)); } 
  for (var j = 50; j <=width-10; j=j+50) { plinkos.push(new Plinko(j,375)); }
}
function draw() {
  background("black");  
  Engine.update(engine);
  ground.display()
for(var k=0;k<divisions.length;k++){
  divisions[k].display()
}
for(var k=0;k<plinkos.length;k++){
  plinkos[k].display()
}
for(var k=0;k<particles.length;k++){
  particles[k].display()
}
if(frameCount%60===0){ particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); }
  drawSprites();
}