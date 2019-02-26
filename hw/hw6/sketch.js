var ang = 0;
var snowLocationX = [];
var snowLocationY = [];
var snowAmount = 100;
var snowImage

function preload() {
  snowImage = loadImage("my.jpg")

function setup()
{
  createCanvas(1024, 640);

  for (var i = 0; i < snowAmount; i++) {
   snowLocationX[i] = random(0, width);
   snowLocationY[i] = random(0, -500);
 }
}
function draw()
{

  stroke(0)
  
  let t = frameCount / 60;
  if (mouseIsPressed === true)
  {
     ang += 5;
     var val = cos(radians(ang)) * 12.0;
     for (var a = 0; a < 360; a += 75)
     {
      var xoff = cos(radians(a)) * val;
      var yoff = sin(radians(a)) * val;
      fill(255);
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
     }
     fill(255);
     ellipse(mouseX, mouseY, 2, 2);
  }


  noStroke();
    fill(175);
    for (var i = 0; i < snowAmount; i++) {
      snowLocationY[i]++;
      ellipse(snowLocationX[i], snowLocationY[i], 5,5);

      if(snowLocationY[i] > height){
        snowLocationY[i] = random(-500,0);
        snowLocationX[i] = random(0,width);
}
}
