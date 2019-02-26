var page0,page1,page2,page3
var image0,image1,image2,image3
var currentImage=0

function preload(){
image0=loadImage("assets/Thatwasclose0.jpg")
image1=loadImage("assets/Thatwasclose1.jpg")
image2=loadImage("assets/Thatwasclose2.jpg")
image3=loadImage("assets/Thatwasclose3.jpg")
}

function setup(){
createCanvas(500,500)
page0=createButton("page0")
page0.position(10,400)
page0.mousePressed(function(){
currentImage=1
})
page1=createButton("page1")
page1.position(100,400)
page1.mousePressed(function(){
currentImage=2
})
page2=createButton("page2")
page2.position(190,400)
page2.mousePressed(function(){
currentImage=3
})
page3=createButton("page3")
page3.position(280,400)
page3.mousePressed(function(){
currentImage=4
})
}


function draw(){
background(225)
text("The story of a Dinosaur",150,150)
if(currentImage==1){

  image(image0,0,0)
  text("Long time ago, there is a dinsaur",150,20)
}else if(currentImage==2){
  image(image1,0,0)
  text("he saw a rock",150,20)
}else if(currentImage==3){
  image(image2,0,0)
  text("flying towads him",150,20)
}else if(currentImage==4){
  image(image3,0,0)
  text("lol",150,20)
}


}
