var posX=200
var posY=200
var boxSize=20
var color1="red"





function setup() {
  // put setup code here
  createCanvas(1920,1080)
}

function draw() {
  // put drawing code here
//sqareBox()
background(225)
squareBox(100,100,20,"purple")
var square1check = checkBox(100,100,20)
console.log(square1check)
if(square1check==true){
  background("blue")

}



squareBox(50,400,30,"blue")
var square2check = checkBox(50,400,30)
console.log(square1check)
if(square2check==true){
  background("purple")
}
}
//function squareBox(){
//fill(color1)
//rect(poxX,poxY,boxSize,boxSize)
//}


function squareBox(tempx,tempy,tempSize,tempColor){
  fill(tempColor)
  rect(tempx,tempy,tempSize,tempSize)
}

function checkBox(checkX,checkY,checkSize){
  if (mouseX > checkX && mouseX < checkX + checkSize
    && mouseY > checkY && mouseY < checkY + checkSize){
    //  console.log("over")
      reture true
    }else{
      //console.log("off")
      reture false
    }

}
