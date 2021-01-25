var rect1, rect2;
var rect3,rect4;


function setup() {
  createCanvas(800,400);
 rect1= createSprite(400, 200, 50, 50);
rect2=createSprite(200,200,50,50)
rect3=createSprite(600,300,50,50);
rect4=createSprite(600,100,50,50);
}

function draw() {
  background("lightBlue");  
  drawSprites();

  rect1.x=mouseX;
  rect1.y=mouseY;
  console.log(rect1.x-rect2.x);
  console.log(rect1.width/2 + rect2.width/2);

if(argument(rect1,rect3)){
 rect1.shapeColor="red";
 rect3.shapeColor="red";

  
}  
else{
 rect1.shapeColor="yellow";
 rect3.shapeColor="yellow"; 
}

}




