var showButton
var hideButton
var currentImage=1
var showingOrHiding = 0
function setup() {
  // put setup code here
  createCanvas(500,500)
  showButton=createButton("show")
  showButton.position(10,40)
  showButton.mousePressed(function(){
//  currentImage=0;
showingOrHiding=1
  })
  hideButton=createButton("hide")
  hideButton.position(100,40)
  hideButton.mousePressed(function(){
  //  currentImage=1
showingOrHiding=0
  })
showingOrHiding = 0
}

function draw() {
  // put drawing code here
    background(155);
  rect(200,200,100,100)
  if(currentImage==1){
  background(155)}
  if(showingOrHiding==1){
    fill(0)
    ellipse(mouseX, mouseY, 10, 10)
  }
  if(showingOrHiding==0){

  }


}
