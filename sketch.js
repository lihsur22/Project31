const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var grund;
var d1, d2, d3, d4, d5, d6, d7;
var part;

var a_parts = [];
var a_plinki = [];
var a_divs = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;


  grund = new graund(240,795,482,10);

  d1 = new divs(0,645,300);
  d2 = new divs(480,645,300);
  d3 = new divs(240,645,300);
  d4 = new divs(80,645,300);
  d5 = new divs(160,645,300);
  d6 = new divs(320,645,300);
  d7 = new divs(400,645,300);
  
  //==================<Plinki>==================
  for(var j = 40; j < 480; j = j + 50)
  {
    a_plinki.push(new plinko(j, 75));
  }
  for(var j = 15; j < 470; j = j + 50)
  {
    a_plinki.push(new plinko(j, 175));
  }
  for(var j = 40; j < 480; j = j + 50)
  {
    a_plinki.push(new plinko(j, 275));
  }
  for(var j = 15; j < 470; j = j + 50)
  {
    a_plinki.push(new plinko(j, 375));
  }
  //==================</Plinki>==================
}

function draw() {
  background(0);
  Engine.update(engine);
  
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();

  if(frameCount % 60 == 0) {
    a_parts.push(new partic(random(230,250),20));
    //a_parts.push(new partic(random(100,380),20));
  }

  for(var j_dis = 0; j_dis < a_plinki.length; j_dis++)
  {
    a_plinki[j_dis].display();
  }
  for(var k_dis = 0; k_dis < a_parts.length; k_dis++)
  {
    a_parts[k_dis].display();
  }

  grund.display();
}