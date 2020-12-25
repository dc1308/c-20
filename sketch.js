
var fixedRect , movingRect;
var ob1, ob2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 80, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect= createSprite(200,200,80,100);
  movingRect.shapeColor= "green";
  movingRect.debug= true;

  ob1 = createSprite(400,0,100,70);
  ob1.shapeColor="green";
  ob2 = createSprite(400,400,100,70);
  ob2.shapeColor="green";

  ob1.velocityY=1;
  ob2.velocityY=-1;
}

function draw() {
  background("black");  
  movingRect.y = mouseY;
  movingRect.x = mouseX;

  console.log(movingRect.y - fixedRect.y);
console.log((fixedRect.width/2)+(movingRect.width /2));

  if(movingRect.x - fixedRect.x < (fixedRect.width/2)+(movingRect.width /2)
   && fixedRect.x- movingRect.x < (fixedRect.width/2)+(movingRect.width /2)
   && fixedRect.y- movingRect.y < (fixedRect.height/2)+(movingRect.height /2)
   && movingRect.y - fixedRect.y < (fixedRect.height/2)+(movingRect.height /2)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    
  }
    else {
      movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    
    }
    if(ob1.x - ob2.x < (ob1.width/2)+(ob2.width /2)
   && ob2.x-ob1.x < (ob2.width/2)+(ob1.width /2)){
    ob1.shapeColor = "red";
    ob2.shapeColor = "red";
    
    ob1.velocityX  *=(-1);
    ob2.velocityX  *= (-1);
  }
 if( ob1.y- ob2.y < (ob1.height/2)+(ob2.height /2)
   && ob2.y - ob1.y < (ob2.height/2)+(ob1.height /2)){
    ob1.shapeColor = "red";
    ob2.shapeColor = "red";

    ob1.velocityY  *=(-1);
    ob2.velocityY  *= (-1);
   }
    


  drawSprites();
}