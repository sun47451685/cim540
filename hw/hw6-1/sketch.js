//sam midterm 1
////////////////////////////////////////////
//draw flowers on the tree, i plan to add snow at the same time,
//however, since the animation for snow need to renew the page 60f/s,
//as a result, the flower i creat on the canvas can only stay
//there, so i give up.
///////////////////////////////////////////
//https://p5js.org/zh-Hans/examples/drawing-pulses.html
//https://p5js.org/zh-Hans/examples/simulate-snowflakes.html
var ang = 0;

function preload() {
  snowImage = loadImage("my.jpg");
}

function setup()
{
  createCanvas(1024, 640);
  img = loadImage("my.jpg",function(img) {
    image(img, 0, 0);
  });
  noStroke();
}

function draw(){




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
}
