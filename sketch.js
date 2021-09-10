var snow1,snow2,snow3,snow4,snow5;
function preload(){
snow1=loadImage("snow1.jpg");
snow2=loadImage("snow2.jpg");
snow3=loadImage("snow3.jpg");
snow4=loadImage("snow4.webp");
snow5=loadImage("snow5.webp");
}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(snow1);
  snowfall()  
  drawSprites();
}
function snowfall(){
if(frameCount%25===0){
snow=createSprite(random(0,800),10,20,20)
snow.addImage(snow4);
snow.scale=0.2;
snow.velocityY=3;
}
}