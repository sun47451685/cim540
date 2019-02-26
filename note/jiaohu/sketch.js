//var currentwidth=width
//var currentheight=height
var backgroundColor = "pink";
var eyePosX = 0;
var eyePosY = 0;
var eyeOffset = 20;
var eyeSize = 20;
var instruction="dont cross the line"

function setup() {
  // put setup code here
  createCanvas(500,500)
  eyePosX= width/2
  eyePosY= 100
}

function draw() {
  // put drawing code here
  background(backgroundColor)
  text(instruction, 50,50)
  line(0, height/2, width, height/2)
  eyePosX=mouseX
  eyePosY=mouseY
  ellipse(width/2,height/2,10,10)
ellipse(mouseX,mouseY,10,10)
ellipse(eyePosX-eyeOffset, eyePosY, eyeSize,eyeSize);
ellipse(eyePosX+eyeOffset, eyePosY, eyeSize,eyeSize);

if(mouseY >height/2){
  console.log("Below Line");
  instruction = "I am sad!";
  angleMode(DEGREES);
  arc(eyePosX, eyePosY+100,100,100, 180,0);}

if(mouseY <height/2){
      console.log("Above Line");
      instruction = "I am Happy!";
      angleMode(DEGREES);
      arc(eyePosX, eyePosY+100,100,100, 0,180);
    }
  }


//end of drow loop
function mousePressed(){
  backgroundColor = "Blue";
}
function mouseReleased(){
  backgroundColor = "white";
}
function keyPressed(){
console.log("letter: "+key+"keyCode: "+keyCode);
if(key=='a'){
  console.log("the letter is a")
}else if(key == 'b'){
  backgroundColor="blue";
}else if(key == 'r'){
  backgroundColor="red";
}
if(keyCode == 65){
  console.log("the keyCode is a")
}

}
