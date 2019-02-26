var story = ["the story of a dinosaur","There was once a dinosaur.", "He was dancing.", "And a meteor passed, so fast!", "But it did not hit!"];
var page0,page1,page2,page3
var imageArray=[]
var currentImage=0


function preload(){
imageArray[0]=loadImage("assets/Thatwasclose0.jpg")
imageArray[1}=loadImage("assets/Thatwasclose1.jpg")
imageArray[2]=loadImage("assets/Thatwasclose2.jpg")
imageArray[3]=loadImage("assets/Thatwasclose3.jpg")
}

function setup(){
createCanvas(500,500)
page0=createButton("page0")
page0.position(10,400)
page0.mousePressed(function(){
currentImage=0
})
page1=createButton("page1")
page1.position(100,400)
page1.mousePressed(function(){
currentImage=1
})
page2=createButton("page2")
page2.position(190,400)
page2.mousePressed(function(){
currentImage=2
})
page3=createButton("page3")
page3.position(280,400)
page3.mousePressed(function(){
currentImage=3
})
}


function draw() {
  // put drawing code here
  background(255);
  console.log("currentPage: " + currentPage);
  image(storybookArray[currentPage],0,0);
  text(storyText[currentPage], 10,50);


}
