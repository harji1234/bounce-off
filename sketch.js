var movingRect;
var box1, box2, box3;

function setup() {
  createCanvas(1000,800);
  box3=createSprite(100, 200, 70, 50);
  box3.shapeColor="green";
  box3.debug=true;

  movingRect=createSprite(150,200,50,70)
  movingRect.shapeColor="green";
  movingRect.debug=true;

  box1=createSprite(700,0,50,50);
  box1.shapeColor="blue"
  box1.velocityY=3

  box2=createSprite(700,700,100,50);
  box2.shapeColor="blue"
  box2.velocityY=-3
}

function draw() {
  background(0,0,0); 
  // movingRect.x=mouseX;
 //  movingRect.y=mouseY;
   
  /* if(isTouching(movingRect, box3)){
    movingRect.shapeColor="red"
    box3.shapeColor="red"
  }
  else{
    box3.shapeColor="green"
    movingRect.shapeColor="green"
  }

  if(isTouching(movingRect, box1)){
    movingRect.shapeColor="red"
    box1.shapeColor="red"
    console.log("BOX1 TRUE")
  }
  else {
    box1.shapeColor="green"
    movingRect.shapeColor="green"
    console.log("BOX1 FALSE")
  }

  if(isTouching(movingRect, box2)){
    movingRect.shapeColor="red"
    box2.shapeColor="red"
  }
  else{
    box2.shapeColor="green"
    movingRect.shapeColor="green"
  }
*/
 // isTouching(box1,movingRect);
  //isTouching(movingRect,box2);
//  isTouching(movingRect,box3);

  bounceOff(box1,box2);
  drawSprites();
}






function bounceOff(obj1,obj2) {
  if(obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2){
      obj1.velocityX = obj1.velocityX * (-1);
      obj2.velocityX =  obj2.velocityX * (-1);
      console.log("Inside bounceoff");
  }
  if(obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
      obj1.velocityY = obj1.velocityY * (-1);
      obj2.velocityY =  obj2.velocityY * (-1);
      console.log("Inside bounceoff");
  }
}


