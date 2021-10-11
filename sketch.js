
var forest,forestImg;
var explorer,snake,mushroom,elephant,turtle;
var lion;
var animalsGroup;
var score;



function preload(){
  
explorer = loadImage("explorer-removebg-preview.png");

  obstacle1= loadImage("elephant-removebg-preview (2).png");
  obstacle2= loadImage("yule-log-common-mushroom-fungus-drawing-png-favpng-84pfttXv4TjuFbnwQFZGNfzK8-removebg-preview.png");
  obstacle3 = loadImage("depositphotos_44313571-stock-illustration-turtle-cartoon-removebg-preview.png");
  obstacle4 = loadImage("snake-removebg-preview (1).png");
  obstacle5 =loadImage("lion-removebg-preview.png");
  restartImg = loadImage("012_restart-2-512-removebg-preview.png")
  gameOverImg = loadImage("be65c780d02e364cf867f1c15dbb4801.jpg")
  forestImg=loadImage("forest.jpg")
  
  
  
  
  
  
}



function setup(){
  createCanvas(600,600)
  explorer=createSprite(200,400);
    gameover = createSprite(100,200);
    restart = createSprite(120,200);
  lion=createSprite(220,300)
  snake=createSprite(100,230)
  turtle=createSprite(140,210)
  mushroom=createSprite(150,230)
  elephant=createSprite(160,260)
  forest=createSprite(600,600)
 // forest.addImage("forest",forestImg)
  
}




function draw(){
  background(0)
  drawSprites();
  createAnimals();
  if (forest.x < 0){
    forest.x = forest.width/2;}
  
}



function createAnimals(){
  if( frameCount%50===0){
    var obstacle=createSprite(200,175,120,130)
obstacle.velocityX=6;




  }
  
}