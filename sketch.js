var bg,dog,maze;
var gamestate,canvas;

function preload(){
    bg=loadImage("bluish greenish bg.jpg")
    dog=loadImage("chihuahua-clipart-halloween-1.png")
}
function setup()
{
 canvas = createCanvas(1600,800)
 wall1=createSprite(100,200,60,20)
 wall2=createSprite(80,356,20,650)
 wall3=createSprite(830,40,1330,18)
 wall4=createSprite(1500,356,20,650)
 wall5=createSprite(735,680,1330,18)
 wall6=createSprite(730,60,20,30)
 wall7=createSprite(600,60,20,30)
 wall9=createSprite(450,200,120,18)
 wall8=createSprite(400,180,20,280)
 wall10=createSprite(890,180,20,280)
 wall11=createSprite(960,311,150,18)
 wall12=createSprite(1040,285,20,70)
 wall13=createSprite(1020,250,60,20)
 wall14=createSprite(1000,90,20,100)
 wall15=createSprite(1150,149,20,200)
 wall16=createSprite(330,149,150,20)
 wall17=createSprite(1430,149,150,20)
 wall18=createSprite(700,149,150,20)
 wall19=createSprite(700,245,20,200)
 wall20=createSprite(250,400,150,20)
 wall21=createSprite(330,440,20,100)
 wall22=createSprite(280,480,80,20)
 wall23=createSprite(250,549,20,150)
 wall24=createSprite(550,409,20,100)
 wall25=createSprite(600,449,100,20)
 wall26=createSprite(650,449,20,200)
 wall27=createSprite(500,639,20,100)
 wall28=createSprite(800,589,20,200)
 wall29=createSprite(865,489,150,20)
 wall30=createSprite(950,579,20,200)
 wall31=createSprite(1400,479,200,20)
 wall32=createSprite(1200,579,20,200)
}
function draw(){
    background(0);
    drawSprites();

}