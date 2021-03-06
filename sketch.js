var canvas;
var music;
var surface1,surfac2,surface3,surface4,ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1=createSprite(100,600,200,30); 
    surface1.shapeColor="red";
    surface2=createSprite(300,600,200,30); 
    surface2.shapeColor="blue";
    surface3=createSprite(500,600,200,30); 
    surface3.shapeColor="green";
    surface4=createSprite(700,600,200,30); 
    surface4.shapeColor=rgb(255,128,0);

    ball=createSprite(random(20,750),50,30,30);
    ball.shapeColor="white";
    ball.velocityX=5;
    ball.velocityY=3; 
   
    edges=createEdgeSprites()
}

function draw() {
    background(rgb(169,169,169));

    
   ball.bounceOff(edges);

   
  if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
     ball.shapeColor="red";
     music.play(); 
  }  
  if(surface2.isTouching(ball) && ball.bounceOff(surface2)){
    ball.shapeColor="blue";
    music.play();  
 }    
 if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
    ball.shapeColor="green";
    music.play();  
 }  
 if(surface4.isTouching(ball)){
    ball.shapeColor = rgb(255,128,0);
    ball.velocityX = 0;
    music.stop();
 }  


    drawSprites()
    
}