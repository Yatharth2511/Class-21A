var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1 = createSprite(300,250,100,30);
  ob1.shapeColor = "green";
  ob1.debug= true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
var result = IsTouching(movingRect,ob1);

  if (result === true){

  
    movingRect.shapeColor = "red";
    ob1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    ob1.shapeColor = "green";
  }
  drawSprites();
}
