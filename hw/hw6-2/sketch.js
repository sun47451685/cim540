//sam midterm 2
////////////////////////////////////////////
//add snow to the tree.
//mouse click to turn on/off the snow
///////////////////////////////////////////
//debug-ing
//https://p5js.org/zh-Hans/examples/drawing-pulses.html
//https://p5js.org/zh-Hans/examples/simulate-snowflakes.html
var snowflakes = [];
var issnow=true;

function preload() {
  img = loadImage("canvas.png");
}

function setup()
{
  createCanvas(1280, 640);
  img = loadImage("canvas.png",function(img) {
    image(img, 0, 0);
  });
  noStroke();
}

function draw(){
  let t = frameCount / 60;
    if (mouseIsPressed === true){
      if(mouseButton === LEFT){
        if(issnow===false)
        issnow=true;
        else
        issnow=false;
      }
    }
    if(issnow===true)
    {
      for (var i = 0; i < random(5); i++)
      {
        snowflakes.push(new snowflake());
      }
      for (let flake of snowflakes)
      {
        flake.update(t);
        flake.display();
      }
    }

  function snowflake() {
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(2, 5);
    this.radius = sqrt(random(pow(width / 2, 2)));
    this.update = function(time)
    {
      let w = 0.6;
      let angle = w * time + this.initialangle;
      this.posX = width / 2 + this.radius * sin(angle);

      this.posY += pow(this.size, 0.5);
      if (this.posY > height)
      {
        let index = snowflakes.indexOf(this);
        snowflakes.splice(index, 1);
      }
    };
    this.display = function() {
      ellipse(this.posX, this.posY, this.size);
    };
  }
}
