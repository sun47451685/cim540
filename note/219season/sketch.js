var seasons
var seasonType = ""

var snowLocationX = []
var snowLocationY = []
var snowAmount =100



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

}

function draw() {
  // put drawing code here
background(255)
fill("black")
stroke(0)
textSize(20)
text(seasonType,10,75)

seasonType=="Winter"
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
      fill(200)
      ellipse(snowLocationX[i],snowLocationY,10,20)
      snowLocationY[i]=snowLocationY[i]+1

      if(snowLocationY[i]>height){
        snowLocationY[i] = random(0,-500)
        snowLocationX[i] = random(0,width);
      }
    }
  }


}
