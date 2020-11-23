var wall , thickness;
var bullet , speed , weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(32,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor=color(255,255,255);
  wall = createSprite(1200, 200, thickness , height/2);
  wall.shapeColor=color(80,80,80);
  
}

function draw() {
  background(0,0,0);  
  bullet.velocityX = speed;
  
  drawSprites();

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var Damage = 0.5 *weight *speed *speed/(thickness *thickness *thickness);
    if(Damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(Damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  } 
}

function hasCollided(lbu,lwa)
{
  bulletRightEdge=lbu.x+lbu.width;
  wallLeftEdge=lwa.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  else{
    return false;
  }
}
