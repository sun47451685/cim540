function preload(){
  slothBaby = loadImage("assets/slothbaby.jpg");
}



function setup() {
  creatCanvas(500,500)
  // put setup code here
}

function draw() {
  // put drawing code here
  image(slothBaby,0,20,slothBaby,width/2,slothBaby,height/2)
}
