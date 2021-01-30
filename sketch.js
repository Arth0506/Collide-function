var fixedrect, movingrect;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  fixedrect = createSprite(200,200,50,80);
  fixedrect.shapeColor = "blue";
  fixedrect.debug = true;

  movingrect = createSprite(400,200,80,30);
  //movingrect.shapeColor = "yellow";
  movingrect.debug = true;


}

function draw() {
  background(255,255,255);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  //console.log(movingrect.x - fixedrect.x);
  console.log(movingrect.y - fixedrect.y);
  
  if(movingrect.x - fixedrect.x < fixedrect.width /2 + movingrect.width /2 && 
    
    fixedrect.x - movingrect.x < fixedrect.width /2 + movingrect.width /2 && 
    
    movingrect.y - fixedrect.y < fixedrect.height /2 + movingrect.height /2 && 
    fixedrect.y - movingrect.y < fixedrect.height /2 + movingrect.height /2){

    movingrect.shapeColor = "red";

  } 
  
  else{
    movingrect.shapeColor = "green";

  }
  
  drawSprites();
}