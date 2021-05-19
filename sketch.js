var boundary1,boundary2,boundary3,boundary4;
var p1,pImg,m1,mImg,n1,nImg,a1,aImg,A1,AImg,c1,cImg;
var hyphen,lineImg;
var pacman,pacmanImgRight,pacmanImgLeft,pacmanImgUp,pacmanImgDown;
var ghost1,ghost2,ghost3,ghost4;
var ghost1Img,ghost2Img,ghost3Img,ghost4Img;
var box1,box2,box3,box4,box5,exit;
var pb1,pb2,pb3,pb4,ab1,ab2,ab3,ab4,cb1,cb2,cb3,cb4;
var hb,mb,Ab,nb;
var ob1,ob2,ob3,ob4,ob5,ob6,ob7,ob8,ob9;

function preload(){
  aImg = loadImage("alphabets/a2.png");
  cImg = loadImage("alphabets/c2.png");
  mImg = loadImage("alphabets/m2.png");
  nImg = loadImage("alphabets/n2.png");
  pImg = loadImage("alphabets/p2.png");
  lineImg = loadImage("line.jfif");
  line1Img = loadImage("line2.jpg");
  line2Img = loadImage("line3.jpg");
  pacmanImg = loadImage("pacmanUp/pacman-1.png");
  pacmanImgRight = loadAnimation("pacmanRight/pacman-1.png","pacmanRight/pacman-2.png","pacmanRight/pacman-3.png","pacmanRight/pacman-0.png");
  pacmanImgLeft = loadAnimation("pacmanLeft/pacman-1.jpg","pacmanLeft/pacman-2.jpg","pacmanLeft/pacman-3.jpg","pacmanLeft/pacman-0.jpg");
  pacmanImgUp = loadAnimation("pacmanUp/pacman-1.png","pacmanUp/pacman-2.png","pacmanUp/pacman-3.png","pacmanUp/pacman-0.png");
  pacmanImgDown = loadAnimation("pacmanDown/pacman-1.png","pacmanDown/pacman-2.png","pacmanDown/pacman-3.png","pacmanDown/pacman-0.png");
  ghost1Img = loadImage("ghosts/1.png");
  ghost2Img = loadImage("ghosts/2.png");
  ghost3Img = loadImage("ghosts/3.png");
  ghost4Img = loadImage("ghosts/4.png");
}

function setup() {
  createCanvas(1400,600);
  
  //boundary
  boundary1 = createSprite(700,20,1300,20);
  boundary1.shapeColor = "red";
  boundary1.addImage(line1Img);
  boundary2 = createSprite(700,580,1300,20);
  boundary2.shapeColor = "red";
  boundary2.addImage(line1Img);
  boundary3 = createSprite(20,300,20,500);
  boundary3.shapeColor = "red";
  boundary3.addImage(line2Img);
  boundary4 = createSprite(1380,300,20,500);
  boundary4.shapeColor = "red";
  boundary4.addImage(line2Img);

  //letter P
  p1 = createSprite(140,240,10,100);
  p1.addImage(pImg);
  p1.scale = 0.3;
  pb1 = createSprite(80,240,5,150);
  pb1.visible = false;
  pb2 = createSprite(140,315,120,5);
  pb2.visible = false;
  pb3 = createSprite(200,240,5,150);
  pb3.visible = false;
  pb4 = createSprite(140,165,120,5);
  pb4.visible = false;

  //letter A 
  a1 = createSprite(325,240,10,100);
  a1.addImage(aImg);
  a1.scale = 0.3;
  ab1 = createSprite(250,240,5,150);
  ab1.visible = false;
  ab2 = createSprite(325,315,150,5);
  ab2.visible = false;
  ab3 = createSprite(400,240,5,150);
  ab3.visible = false;
  ab4 = createSprite(325,165,150,5);
  ab4.visible = false;
  
  //letter C
  c1 = createSprite(520,240,10,100);
  c1.addImage(cImg);
  cb1 = createSprite(460,240,5,150);
  cb1.visible = false;
  cb2 = createSprite(520,315,120,5);
  cb2.visible = false;
  cb3 = createSprite(580,240,5,150);
  cb3.visible = false;
  cb4 = createSprite(520,165,120,5);
  cb4.visible = false;

  //-
  hyphen = createSprite(660,240,70,10);
  hyphen.addImage(lineImg);
  hyphen.scale = 0.3;
  hb = createSprite(660,240,65,15);
  hb.visible = false;

  //letter M
  m1 = createSprite(840,235,10,100);
  m1.addImage(mImg);
  mb = createSprite(840,235,165,150);
  mb.visible = false;

  //letter A
  A1 = createSprite(1050,235,10,100)
  A1.addImage(aImg);
  A1.scale = 0.3;
  Ab = createSprite(1050,235,140,150)
  Ab.visible = false;

  //letter N
  n1 = createSprite(1250,235,10,100);
  n1.addImage(nImg);
  nb = createSprite(1250,235,145,155)
  nb.visible = false;

  //pacman
  pacman = createSprite(260,500,20,20);
  pacman.addImage("eating",pacmanImg);
  pacman.scale = 0.2;

  //ghost 1
  ghost1 = createSprite(1214,400,20,20);
  ghost1.addImage(ghost1Img);
  ghost1.scale = 0.1;

  //ghost 2
  ghost2 = createSprite(1150,480,20,20);
  ghost2.addImage(ghost2Img);
  ghost2.scale = 0.1;

  //ghost 3
  ghost3 = createSprite(1215,480,20,20);
  ghost3.addImage(ghost3Img);
  ghost3.scale = 0.1;

  //ghost 4
  ghost4 = createSprite(1275,480,20,20);
  ghost4.addImage(ghost4Img);
  ghost4.scale = 0.1;

  //box for ghosts
  box1 = createSprite(1325,485,10,100);
  box1.shapeColor = "yellow";
  box2 = createSprite(1220,530,200,10);
  box2.shapeColor = "yellow";
  box3 = createSprite(1115,485,10,100);
  box3.shapeColor = "yellow";
  box4 = createSprite(1145,440,50,10);
  box4.shapeColor = "yellow";
  box5 = createSprite(1295,440,50,10);
  box5.shapeColor = "yellow";
  exit = createSprite(1220,440,100,10);
  exit.shapeColor = "cyan";

  //objects
  ob1 = createSprite(170,515,15,100);
  ob1.shapeColor = "yellow";
  ob2 = createSprite(350,515,15,100);
  ob2.shapeColor = "yellow";
  ob3 = createSprite(140,100,70,15);
  ob3.shapeColor = "white";
  ob4 = createSprite(660,100,300,15);
  ob4.shapeColor = "white";
  ob5 = createSprite(1080,100,100,15);
  ob5.shapeColor = "white";
  ob6 = createSprite(1300,100,70,15);
  ob6.shapeColor = "white";
  ob7 = createSprite(100,405,70,15);
  ob7.shapeColor = "white";
  ob8 = createSprite(370,405,150,15);
  ob8.shapeColor = "white";
  ob9 = createSprite(845,405,100,15);
  ob9.shapeColor = "white";
  

}

function draw() {
  background(0); 

  textSize(20);
  fill(255);
  text(mouseX + "," + mouseY,700,500);

  //pacman controls
  if(keyIsDown(RIGHT_ARROW)){
    pacman.x+=10;
    pacman.addAnimation("eating",pacmanImgRight);
  }

  if(keyIsDown(LEFT_ARROW)){
    pacman.x-=10;
    pacman.addAnimation("eating",pacmanImgLeft);
  }
  if(keyIsDown(UP_ARROW)){
    pacman.y-=10;
    pacman.addAnimation("eating",pacmanImgUp);
  }

  if(keyIsDown(DOWN_ARROW)){
    pacman.y+=10;
    pacman.addAnimation("eating",pacmanImgDown);
  }

  //
  if(pacman.isTouching(pb1)||pacman.isTouching(pb2)||pacman.isTouching(pb3)||pacman.isTouching(pb4)){
    pacman.collide(pb1);
    pacman.collide(pb2);
    pacman.collide(pb3);
    pacman.collide(pb4);
  }

  if(pacman.isTouching(ab1)||pacman.isTouching(ab2)||pacman.isTouching(ab3)||pacman.isTouching(ab4)){
    pacman.collide(ab1);
    pacman.collide(ab2);
    pacman.collide(ab3);
    pacman.collide(ab4);
  }

  if(pacman.isTouching(cb1)||pacman.isTouching(cb2)||pacman.isTouching(cb3)||pacman.isTouching(cb4)){
    pacman.collide(cb1);
    pacman.collide(cb2);
    pacman.collide(cb3);
    pacman.collide(cb4);
  }

  if(pacman.isTouching(hb)||pacman.isTouching(mb)||pacman.isTouching(Ab)||pacman.isTouching(nb)){
    pacman.collide(hb); 
    pacman.collide(mb);
    pacman.collide(Ab);
    pacman.collide(nb);
  }

  if(pacman.isTouching(box1)||pacman.isTouching(box2)||pacman.isTouching(box3)||pacman.isTouching(box4)||pacman.isTouching(box5)||pacman.isTouching(exit)){
    pacman.collide(box1);
    pacman.collide(box2);
    pacman.collide(box3);
    pacman.collide(box4);
    pacman.collide(box5);
    pacman.collide(exit);
  }
  
  if(pacman.isTouching(ob1)||pacman.isTouching(ob2)||pacman.isTouching(ob3)||pacman.isTouching(ob4)||pacman.isTouching(ob5)||pacman.isTouching(ob6)||pacman.isTouching(ob7)||pacman.isTouching(ob8)||pacman.isTouching(ob9)){
    pacman.collide(ob1);
    pacman.collide(ob2);
    pacman.collide(ob3);
    pacman.collide(ob4);
    pacman.collide(ob5);
    pacman.collide(ob6);
    pacman.collide(ob7);
    pacman.collide(ob8);
    pacman.collide(ob9);
  }

  drawSprites();
}