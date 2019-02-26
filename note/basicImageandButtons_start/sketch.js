/* "Up-Close Sloth" by marissa_strniste, "Baby sloth, being cute" by Dave Gingrich is licensed under CC BY-SA 2.0. To view a copy of this license, visit: https://creativecommons.org/licenses/by-sa/2.0*/
var slothBaby;
var babyButton;
var babyAdult;
var currentImage=1
function preload(){
  slothBaby = loadImage("assets/slothbaby.jpg");
  slothAdult = loadImage("assets/slothAdult.jpg")
}



function setup() {
  createCanvas(500,500)
  babyButton=createButton("Baby sloth")
  babyButton.position(10,40)
  babyButton.mousePressed(function(){
currentImage=0;
  })
  adultButton=createButton("adult sloth")
  adultButton.position(100,40)
  adultButton.mousePressed(adultChange)
  // put setup code here
}

function draw() {
  if(currentImage==0){
    image(slothBaby,0,20,slothBaby.width/2,slothBaby.height/2)
  }else if (currentImage==1) {
      image(slothAdult,0,20,slothAdult.width/2,slothAdult.height/2);
  }
  // put drawing code here

}

function adultChange(){
  currentImage=1
}
//作业需四页
