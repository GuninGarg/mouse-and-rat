var catImg1,catImg2,catImg3,mouseImg1,mouseImg2,mouseImg3;
var bgImg
var mouse,cat;

function preload() {
    //load the images here
bgImg=loadImage("images/garden.png");
catImg1=loadAnimation("images/cat1.png");
catImg2=loadAnimation("images/cat2.png","images/cat3.png");
catImg3=loadAnimation("images/cat4.png");
mouseImg1=loadAnimation("images/mouse1.png");
mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(800,500);
    //create tom and jerry sprites here
cat=createSprite(680,400);
cat.addAnimation("catcp",catImg1);
cat.scale=0.1;



mouse=createSprite(100,380);
mouse.addAnimation("musecp",mouseImg3);
mouse.scale=0.1;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
cat.velocityX=0;
cat.addAnimation("catClass",catImg3);
cat.x=160;
cat.scale=0.1;
cat.changeAnimation("catClass");

mouse.addAnimation("mouseClass",mouseImg1);
mouse.scale=0.1;
mouse.y=400;
mouse.changeAnimation("mouseClass");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
mouse.addAnimation("mouseTeasing",mouseImg2);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay=25;

cat.addAnimation("catTeasing",catImg2);
cat.changeAnimation("catTeasing");
cat.frameDelay=25;
cat.velocityX=-5;

}

}
