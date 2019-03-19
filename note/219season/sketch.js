var seasons
var seasonType = ""

var snowLocationX = []
var snowLocationY = []
var snowAmount =100
var leafLocationY
var leafLocationX
var leafAmount = 80

function preload(){
  leafImage = loadImage("yezi.png")

}


function setup() {
  // put setup code here
    createCanvas(400, 400)
seasons =createSelect()
seasons.position(10,10)
seasons.option("")
seasons.option("Spring")
seasons.option("Summer")
seasons.option("Fall")
seasons.option("Winter")
seasons.changed(function(){
  seasonType=seasons.value()
})
for (var x = 0; x<100; x++) {
console.log(x)
 }

 for (var i = 0; i < snowAmount; i++) {
   snowLocationX[i] = random(0, width);
   snowLocationY[i] = random(0, -500);
 }
 for(var l= 0; l <leafAmount; l++){
   leafLocationX[l] = random(0, width);
     leafLocationY[l] = random(0, -500);
 }

}

function draw() {
  // put drawing code here
background(255)
fill("black")
stroke(0)
textSize(20)
text(seasonType,10,75)



if (seasonType == "Spring") {
    // flower
    line(width / 2, height / 2, width / 2, 300);
      fill("white");
    for (var i = 0; i < 6; i++) {
      push();
      translate(width / 2, height / 2);
      rotate(i + 30);
      scale(2.0);
      ellipse(0, 20, 10, 20);
      pop();
    }

    fill("yellow");
    ellipse(width / 2, height / 2, 20, 20);

  }else if(seasonType=="Winter"){
    for(var i=0; i<snowAmount; i++){
      fill(200);
      ellipse(snowLocationX[i],snowLocationY[i],10,10);
      snowLocationY[i]=snowLocationY[i]+1;

      if(snowLocationY[i]>height){
        snowLocationY[i] = random(0,-500);
        snowLocationX[i] = random(0,width);
      }
    }
  }
  else if (seasonType == "fall") {
  for (var i = 0; i < leafAmount; i++) {
    console.log("leaf" + 0 + " x: " + leafLocationX[1] + " , y: " + leafLocationY[1]);
    image(leafImage, leafLocationX[i], leafLocationY[i], 20,20);

    if(leafLocationY[i] < height - 20){
      leafLocationY[i]++;
      leafLocationX[i] = leafLocationX[i] + sin(radians(frameCount));
    }


}
}
}
