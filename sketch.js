var img, logo;
var b,s;
function preload(){
img=loadImage("copyimg.jpg");
logo=loadImage("imgwhat.jpg");
}

function setup() {
  createCanvas(300,500);
// logo=addImage(img);
var b = createSprite(125,50,10,10);
b.addImage(img);
var s = createSprite(130,400,20,20);
s.addImage(logo);

}

function draw() {
  background(255,255,255);  
  drawSprites();
  textSize(20);
  fill(0,200,0);
  text("Your DATA is being sent to",5,200);
  text("DATA CENTER",50,240);
  text("Transfer CODE: 38f6dk",35,300);
  text("Stop Transfer",70,380);
  //s.fill("red");
  //mousePressedOver();

 // if(mouseWentUp(s)){
  //  text("APRIL FOOL",70,380);
 // }
 
//img(logo,50,10,10,10);

}

/*if(mousePressedOver(s)){
  text("APRIL FOOL",70,380);
  //background(200,0,255);  
}*/