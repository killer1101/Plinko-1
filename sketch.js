const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine,world;
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=200; 
var score =0;

function setup() {
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20)

  for (var k = 0; k <=width; k = k + 80) {
		divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
	  }
  
    for(var I= 75; I <= 375; I=I+100)
    {
         
      
        for(var j = 40; j <= width; j=j+50)
        {
          plinkos.push(new Plinko(j,I));
          
        }
        
    }
  
}

function draw() {
  background(0);  
 Engine.update(engine);
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
    }

  for(var j = 0; j < plinkos.length; j++ ){

    plinkos[j].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-0, width/2+60), 10,10));
    score++;
    }
  
   for (var j = 0; j < particles.length; j++) {
    
    particles[j].display();
    }
  }

function draw() {
  background(0);  
 Engine.update(engine);
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
    }

  for(var j = 0; j < plinkos.length; j++ ){

    plinkos[j].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
    }
  
   for (var j = 0; j < particles.length; j++) {
    
    particles[j].display();
    }
  }
