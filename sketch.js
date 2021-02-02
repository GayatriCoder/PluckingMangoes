
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;
var backImg;

function preload(){
	boy=loadImage("images/boy.png");

	//backImg=loadImage("image/farm.jpg");

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	//backdrop=createSprite(650,600,10,10);
	//backdrop.addImage("back"backImg);

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,200,30);
	mango3=new mango(1200,200,30);
	mango4=new mango(900,250,30);
	mango5=new mango(950,150,30);

	//stoneObj=new Stone(150,370,20);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	//launcherObject = new SlingShot(bird.body,{x:200, y:100});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  //stoneObj.display();
 
  

  groundObject.display();
  //drawSprites();
}


//function mouseDragged(){
   // Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
//}

//function mouseReleased(){
    //slingshot.fly();
//}

