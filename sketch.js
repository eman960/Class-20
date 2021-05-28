var f1, m1;
function setup() {
  createCanvas(800,400);
  f1 = createSprite(400, 200, 50, 80);
  m1 = createSprite(600, 200, 50, 50);
  f1.shapeColor = "green";
  m1.shapeColor = "purple";
}

function draw() {
  background(255,255,255);
  m1.x = World.mouseX;
  m1.y = World.mouseY;  
  if(m1.x - f1.x < f1.width/2 + m1.width/2 && f1.x - m1.x < m1.width/2 + f1.width/2)  {
    m1.shapeColor = "red";
    f1.shapeColor = "yellow";
  }
  else{
    f1.shapeColor = "green";
    m1.shapeColor = "purple";
  }
  drawSprites();
}