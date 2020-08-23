
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var Boy,Tree;
var cons;

function preload()
{
	boy = loadImage("boy.png");
	
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Tree = new tree(1050,580);
	Tree.scale = 0.35;
	Ground = new ground();
	Stone = new stone(165,400,30);
	Boy = createSprite(200,520);
	Boy.addImage(boy);
	Boy.scale = 0.1;
	M = new mango(1100,100,30);
	M1 = new mango(1170,130,30);
	M2 = new mango(1010,140,30);
	M3 = new mango(1000,70,30);

	Engine.run(engine);

	slingshot = new Slingshot(Stone.body,{x:165,y:420});
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("skyblue");

  detectollision(Stone,M);
  detectollision(Stone,M1);
  detectollision(Stone,M2);
  detectollision(Stone,M3);

  drawSprites();
  Tree.display();
  Ground.display();
  Stone.display();
  M.display();
  M1.display();
  M2.display();
  M3.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(Stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function detectollision(S,M) {
	Spos = S.body.position;
	Mpos = M.body.position;

	var distance = dist(Spos.x,Spos.y,Mpos.x,Mpos.y);
	if(distance <= S.r+M.r) {
		Matter.Body.setStatic(M.body,false);
	}
}


