var gameObject1,gameObject2,gameObject3,gameObject4
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="green";

  movingRect=createSprite(300,400,80,30);
  movingRect.shapeColor="green";

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor="green";
  gameObject1.velocityX=+3;
  
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor="green";
  gameObject2.velocityX=-3

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor="green";

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRect.velocityX=+5;
  fixedRect.velocityX=-5

    console.log(movingRect.x - fixedRect.x)

   bounceoff(gameObject1,gameObject2)
  drawSprites();
}