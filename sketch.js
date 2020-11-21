var bullet,wall,thickness,speed,weight;



function setup() {
  createCanvas(1600,400);
 speed=random(55,90);
 weight=random(400,1500);
 thickness=random(22,83);
  bullet=createSprite(50, 200, 15, 5);
bullet.shapeColor="lightblue";
bullet.velocityX=speed;
wall=createSprite(1200, 200,thickness,height/2);
wall.shapeColor="yellow";
}

function draw() {
  background(255,255,255);  
  if (wall.x-bullet.x<(bullet.thickness+wall.thickness)/2)
    {
     bullet.velocityX=0;
     var deformation=0.5*weight*speed*speed/22509;
    if (deformation>180){
    bullet.shapeColor=color(225,0,0);
    }
    if (deformation <180 && deformation >100)
    {
      bullet.shapeColor=color(230,230,0);
    }
    
    if (deformation<100);

    {
    
      bullet.shapeColor=color(0,225,0);
    }
  }
    
  
  drawSprites();
}