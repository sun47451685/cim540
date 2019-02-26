/* "Up-Close Sloth" by marissa_strniste, "Baby sloth, being cute" by Dave Gingrich is licensed under CC BY-SA 2.0. To view a copy of this license, visit: https://creativecommons.org/licenses/by-sa/2.0*/
var slothBaby;
var slothAdult;
var babyButton;
var adultButton;
var oneButton
var twoButton
var one
var two
var currentImage=0
function preload(){
  slothBaby = loadImage("assets/slothbaby.jpg");
  slothAdult = loadImage("assets/slothadult.jpg")
  one = loadImage("assets/1.jpg")
  two = loadImage("assets/2.jpg")
}



function setup() {
  createCanvas(1920,1080)
  babyButton=createButton("1")
  babyButton.position(10,40)
  babyButton.mousePressed(function(){
currentImage=0;
  })
  adultButton=createButton("2")
  adultButton.position(100,40)
  adultButton.mousePressed(function(){
    currentImage=1
  })
  oneButton=createButton("3")
  oneButton.position(10,80)
  oneButton.mousePressed(function(){
    currentImage=2
  })
  twoButton=createButton("4")
  twoButton.position(100,80)
  twoButton.mousePressed(function(){
    currentImage=3  })

  // put setup code here
}

function draw() {
background(255);
  text("how fox become human", 10,15);
  if(currentImage==0){
    image(slothBaby,0,20,slothBaby.width/2,slothBaby.height/2)
  }else if (currentImage==1) {
      image(slothAdult,0,20,slothAdult.width/2,slothAdult.height/2);
  }else if (currentImage==2) {
      image(one,0,20,slothAdult.width/2,slothAdult.height/2);
    }else if (currentImage==3) {
        image(two,0,20,slothAdult.width/2,slothAdult.height/2);
  // put drawing code here

}}
