const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var pillarimg,pillar;
var mario,marioimg;
var spike,spikeimg;
var gound,groundimg;

const FINISH=3
const LEVEL1=1;
const LEVEL2=2;
const PLAY=1;
const END=2;
gameLevel=LEVEL1;
gameState=PLAY;

function preload(){

  pillarimg=loadImage("pillar.png");

  groundimg=loadImage("ground.png");

  marioimg=loadAnimation("mario-3.png")

  marioAnimation=loadAnimation("Mario1.png","mario-2.png","mario-3.png");

  marioleftAnimation=loadAnimation("marioleft2.png","mariol1.png");

  mariojump=loadSound("mariojump.mp3");

  marioDeath=loadSound("mariodeath.mp3");

  backgroundimg=loadImage("bg.png")

  backgroundmusic = loadSound("super.mp3");

  mineimg=loadImage("mine.png");

  gameover=loadImage("gameover.jpg");

  starimg= loadImage("star.png");
 
  winimg=loadImage("Finishingimg.png")
 
  winsound=loadSound("complete.wav");

  leftimg  =loadImage("leftarrow.png");

 rightimg  =loadImage("rightarrow.png");

 jumpimg = loadImage("jump.png")
}
function setup() {

	createCanvas(windowWidth,600);
 backgroundmusic.loop(true);

	engine = Engine.create();
	world = engine.world;

  invisibleground = createSprite(0,300,20,600);
  invisibleground.visible=false;

 //invisibleground2 = createSprite(2900,300,20,600);
 //invisibleground2.visible=false;

  ground = createSprite(0,525,windowWidth*10,20);
  ground.shapeColor="green";
  ground.visible=false;
  //ground.addImage(groundimg);
  mario=createSprite(20,490,40,40);
  mario.shapeColor="white";
  //mario.debug=true;
  mario.velocityY=0;
mario.velocityX=0;

  mario.addAnimation("standing",marioimg);
  mario.addAnimation("running",marioAnimation);
  mario.addAnimation("leftrunning",marioleftAnimation);
 console.log(ground.width)
  star=createSprite(4300,480,44,10);
  star.addImage(starimg)
 star.scale=0.03
//star1=new Star(100+300,444);
//
//star2=new Star(600+300,380);
//star3=new Star(900+300,420);
//star4=new Star(1200+300,200);
//star5=new Star(1500+300,350);
//star6=new Star(1800+300,280);
//star7=new Star(2000+300,370);
//star8=new Star(2800,500);

mine= createSprite(440,500,40,40);
mine.addImage(mineimg);
mine.scale=0.06;


mine2= createSprite(940,500,40,40);
mine2.addImage(mineimg);
mine2.scale=0.06;

mine3= createSprite(1880,350,40,40);
mine3.addImage(mineimg);
mine3.scale=0.06;


mine4= createSprite(1040,100,40,40);
mine4.addImage(mineimg);
mine4.scale=0.06;


mine5= createSprite(2540,200,40,40);
mine5.addImage(mineimg);
mine5.scale=0.06;


mine6= createSprite(2200,490,40,40);
mine6.addImage(mineimg);
mine6.scale=0.06;


mine7= createSprite(2700,490,40,40);
mine7.addImage(mineimg);
mine7.scale=0.06;

mine8= createSprite(2880,100,40,40);
mine8.addImage(mineimg);
mine8.scale=0.06;


mine9= createSprite(3000,100,40,40);
mine9.addImage(mineimg);
mine9.scale=0.06;


mine10= createSprite(3240,150,40,40);
mine10.addImage(mineimg);
mine10.scale=0.06;
//mine.debug=true;


mine.setCollider("circle",0,0)
mine.velocityX=2;

mine2.setCollider("circle",0,0)
mine2.velocityX=2;

mine3.setCollider("circle",0,0)
mine3.velocityX=0

mine4.setCollider("circle",0,0)
mine4.velocityX=0

mine5.setCollider("circle",0,0)
mine5.velocityX=0;

mine6.setCollider("circle",0,0)
mine6.velocityX=2;

mine7.setCollider("circle",0,0)
mine7.velocityX=2;

mine8.setCollider("circle",0,0)
mine8.velocityX=0

mine9.setCollider("circle",0,0)
mine9.velocityX=0

mine10.setCollider("circle",0,0)
mine10.velocityX=0

pillar=createSprite(300,435,40,100)
pillar.addImage(pillarimg);
pillar.scale=0.2;


pillar2=createSprite(800,435,40,100)
pillar2.addImage(pillarimg);
pillar2.scale=0.2


pillar3=createSprite(900,435,40,100)
pillar3.addImage(pillarimg);
pillar3.scale=0.2;


pillar4=createSprite(1400,480,40,100)
pillar4.addImage(pillarimg);
pillar4.scale=0.08;


pillar5=createSprite(2400,400,40,100)
pillar5.addImage(pillarimg);
pillar5.scale=0.3;


pillar6=createSprite(2200,450,40,100)
pillar6.addImage(pillarimg);
pillar6.scale=0.15;
//pillar.debug=true;

pillar7=createSprite(2700,465,40,100)
pillar7.addImage(pillarimg);
pillar7.scale=0.11;


pillar8=createSprite(3200,415,40,100)
pillar8.addImage(pillarimg);
pillar8.scale=0.25


pillar9=createSprite(3500,435,40,100)
pillar9.addImage(pillarimg);
pillar9.scale=0.2;


pillar10=createSprite(3800,480,40,100)
pillar10.addImage(pillarimg);
pillar10.scale=0.08;


pillar11=createSprite(4000,400,40,100)
pillar11.addImage(pillarimg);
pillar11.scale=0.3;


pillar12=createSprite(3000,450,40,100)
pillar12.addImage(pillarimg);
pillar12.scale=0.15;


leftButton = createSprite( mario.x-200,300);
leftButton.addImage(leftimg);
leftButton.scale=0.13

rightbutton = createSprite(mario.x+200,300);
rightbutton.addImage(rightimg);
rightbutton.scale=0.4

jumpbutton = createSprite(leftButton.x+rightbutton.x/2,300);
jumpbutton.addImage(jumpimg);
jumpbutton.scale=0.3
Engine.run(engine);

}

function draw() {
 if(gameLevel===LEVEL1){

  if(gameState===PLAY){

    background(backgroundimg);
  
    mario.collide(ground);
   ///\ mario.collide(pillar)
   // console.log(mario.y)
   textSize(50);
   stroke("red")
   strokeWeight(5);
   leftButton.x = mario.x-300
   text("level 1", mario.x-200,100)
    //star1.display();
    //star2.display();
    //star3.display();
    //star4.display();
    //star5.display();
    //star6.display();
    //star7.display();
    //star8.display();
  
    camera.position.x=mario.x+500;
    
   pillar.setCollider("rectangle",0,0,pillar.width-1200,pillar.height-650);
   pillar2.setCollider("rectangle",0,0,pillar.width-1200,pillar.height-650);
   pillar3.setCollider("rectangle",0,0,pillar.width-1200,pillar.height-650);
   pillar4.setCollider("rectangle",0,0,pillar.width-1200,pillar.height-650);
   pillar5.setCollider("rectangle",0,0,pillar.width-1200,pillar.height-650);
   pillar6.setCollider("rectangle",0,0,pillar.width-1200,pillar.height-650);
   
   pillar7.setCollider("rectangle",0,0,pillar.width-1200,pillar.height-650);
   pillar8.setCollider("rectangle",0,0,pillar.width-1200,pillar.height-650);
   pillar9.setCollider("rectangle",0,0,pillar.width-1200,pillar.height-650);
   pillar10.setCollider("rectangle",0,0,pillar.width-1200,pillar.height-650);
   pillar11.setCollider("rectangle",0,0,pillar.width-1200,pillar.height-650);
   pillar12.setCollider("rectangle",0,0,pillar.width-1200,pillar.height-650);
  
   mario.velocityY = mario.velocityY + 0.8;
  
  
     mario.bounceOff(pillar);
     mario.bounceOff(pillar2);
     mario.bounceOff(pillar3);
     mario.bounceOff(pillar4);
     mario.bounceOff(pillar5)
     mario.bounceOff(pillar6);
     mario.bounceOff(pillar7);
     mario.bounceOff(pillar8);
     mario.bounceOff(pillar9);
     mario.bounceOff(pillar10);
     mario.bounceOff(pillar11);
     mario.bounceOff(pillar12);
     mario.bounceOff(invisibleground);
    // mario.bounceOff(invisibleground2);
     
    mine.bounceOff( pillar);
   mine.bounceOff( pillar2);
       mine2.bounceOff( pillar4);
   mine2.bounceOff( pillar3);
       mine3.bounceOff( pillar3);
   mine3.bounceOff( pillar4);
   mine6.bounceOff(pillar6);
   mine6.bounceOff(pillar5);
   mine7.bounceOff(pillar7);
   mine7.bounceOff(pillar12)
   
   if(mario.isTouching(pillar2)){
    mario.bounceOff(pillar2);
    
  }
  if(mario.isTouching(star)){
    star.destroy();
    gameState=FINISH;
    winsound.play();
  }
   if(keyIsDown(RIGHT_ARROW)){
     mario.x+=10;
     mario.changeAnimation("running",marioAnimation);
   }
  
   if(keyIsDown(LEFT_ARROW) ){
    mario.x-=10
    mario.changeAnimation("leftrunning",marioleftAnimation)
  } 
  
  if(keyIsDown(UP_ARROW) && mario.y===467.5 ){
    mariojump.setVolume(0.15);
    mario.velocityY = -17;
   mariojump.play()
  } 
  
  //console.log(pillar.x)
  //if(keyIsDown(87) && mario.x===300 ){
  //  mario.velocityY = -17;
  //} 
 

  if(mario.isTouching(mine)||mario.isTouching(mine2)
  ||mario.isTouching(mine3)||mario.isTouching(mine4)
  ||mario.isTouching(mine5)||mario.isTouching(mine6)
  ||mario.isTouching(mine7)||mario.isTouching(mine8)
  ||mario.isTouching(mine9)||mario.isTouching(mine10)){
   
    gameState=END
  } 
  if(gameState===END){
    
    gameover33=createSprite(mario.x+500,300,180,300);
    gameover33.addImage(gameover)
    gameover33.scale=0.3
    
     mario.visible=false;
  
    pillar.visible=false;
    pillar2.visible=false;
   
    pillar3.visible=false;
    pillar4.visible=false;

    
    pillar5.visible=false;
    pillar6.visible=false;  
    pillar7.visible=false;
    pillar8.visible=false;  
    pillar9.visible=false;
    pillar10.visible=false;
    pillar11.visible=false;
    pillar12.visible=false;

    mine.visible=false;
    mine2.visible=false;
    mine3.visible=false;
    mine4.visible=false;
    mine5.visible=false;
     mine6.visible=false;
    mine7.visible=false;
    mine8.visible=false;
    mine9.visible=false;
    mine10.visible=false;
    marioDeath.play();
    
    backgroundmusic.stop();
 }
if(gameState===FINISH){
     gameover4=createSprite(mario.x+500,300,180,300);
    gameover4.addImage(winimg);
    gameover4.scale=2;

     
    mario.visible=false;
  
    pillar.visible=false;
    pillar2.visible=false;
   
    pillar3.visible=false;
    pillar4.visible=false;
    pillar5.visible=false;
    pillar6.visible=false;
   
    pillar7.visible=false;
    pillar8.visible=false;
    pillar9.visible=false;
    pillar10.visible=false;
   
    pillar11.visible=false;
    pillar12.visible=false;
    
    mine.visible=false;
    mine2.visible=false;
    mine3.visible=false;
    mine4.visible=false;
    mine5.visible=false;
    mine6.visible=false;
    mine7.visible=false;
    mine8.visible=false;
    mine9.visible=false;
    mine10.visible=false;

    backgroundmusic.stop();
}
  drawSprites(); 
  }
}


drawSprites();

}

function keyReleased(){
  if(mario.velocityX===0){
    mario.changeAnimation("standing",marioimg)
  }

}
function touchStarted(){
  if(leftButton){
    mario.x-=10
    mario.changeAnimation("leftrunning",marioleftAnimation)
  }
  if(rightbutton){
    mario.x-=10
    mario.changeAnimation("leftrunning",marioleftAnimation)
  }
  if(jumpbutton && mario.y===467.5 ){
    mariojump.setVolume(0.15);
    mario.velocityY = -17;
   mariojump.play()
  } 
}
