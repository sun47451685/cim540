var questions=["is iceland covered in ice?","what ocean lies esat of the US"]
var options=["1)true 2)fakse","1)pacific 2)eastern 3)indian 4)atantic"]
var answers=[2,4]
var answerCorrect=""
var currentOption=-1
var currentQuestion=0
var button1,button2,button3,button4

var startTimer = false;
var prevTime = 0;
var interval = 5000;




function setup() {
  // put setup code here
  createCanvas(400,400)
  button1=createButton("1")
  button1.position(10,300)
  button1.mousePressed(function(){
currentQuestion=1
  })
  button1=createButton("2")
  button1.position(50,300)
  button1.mousePressed(function(){
currentQuestion=2
  })
  button1=createButton("3")
  button1.position(100,300)
  button1.mousePressed(function(){
currentQuestion=3
  })
  button1=createButton("4")
  button1.position(140,300)
  button1.mousePressed(function(){
currentQuestion=4
  })
}

function draw() {
  // put drawing code here
console.log(currentQuestion)
background(255)
text(questions[currentQuestion],20,100)

text(options[currentQuestion],20,250)

if(startTimer == true){
    text(answerCorrect, 20, 200);

    if(millis() - prevTime >= interval){
      startTimer = false;
      prevTime = millis();
    }

  }

if(currentOption !=-1){
  if(currentOption==answers[currentQuestion]){
    console.log("correct")
answerCorrect="correct"
currentQuestion=currentQuestion+1

if(currentQuestion>= questions.length){
  currentQuestion=0;
}

  }else{
      console.log("Try Again");

      answerCorrect = "Try Again";
    }

    currentOption = -1;
    startTimer = true;
    prevTime = millis();
}


}
