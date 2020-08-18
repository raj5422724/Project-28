
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
	tree = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Tree = createSprite(600,350,375,450);
	Tree.addImage(tree);
	Tree.scale = 0.35;
	Ground = new ground();
	Stone = new stone();
	Boy = createSprite(200,520);
	Boy.addImage(boy);
	Boy.scale = 0.1;
	M = new mango(450,300);
	M1 = new mango(550,200);
	M2 = new mango(700,300);
	M3 = new mango(600,250);

	Engine.run(engine);

	slingshot = new Slingshot(Stone.body,{x:150, y:465});
  
}


function draw() {
  rectMode(CENTER);
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
	if(distance <= S.r,M.r) {
		Matter.Body.setStatic(M.body,false);
	}
}


