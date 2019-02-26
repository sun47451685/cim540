var backgroundColor="207,74,63";
var clothescolor1="195,111,46";
var clothescolor2="202,197,120"
var clothescolor3="236,179,119"
var skincolor1="245,224,203"
var eyesX=250
var eyesY=20


var x = 170;
// x coordinate
var y = 420;
// y coordinate
var bHeight = 180;
// Body height
var nHeight = 40;
// Neck height
var radius = 50;
var ny = y - bHeight - nHeight - radius;
// Neck Y

//keyboard speed
var speed=2;

//rect function
var hoverR=255;
var hoverG=128;
var hoverB=128
var exitR=255;
var exitG=255;
var exitB=255;
var R=0;
var G=0;
var B=0;
var ease=0.1;


function setup() {
 createCanvas(900, 480);
 strokeWeight(2);
 ellipseMode(RADIUS);
 R=exitR;
  G=exitG;
  B=exitB;

}




function draw() {
 background(195,111,46);
 textSize(20);
  text("Keep Him In The Center",400,height/6)




//mouse part
 if (mouseIsPressed) {

     textSize(30);
     if (mouseButton == LEFT)
       text("press A to the LEFT",600,height/3);
     if (mouseButton == RIGHT)
       text("press D to the RIGHT",600,height/3);
   }




   //keyboard part

   if(keyIsPressed){
       //持续触发
       //字母用小写
      	if(key=='a'){
         x-=speed;
       }
       if(key=='d'){
         x+=speed;
       }
     }





 // Neck
 stroke(207,74,63);
 line(x+2, y-bHeight, x+2, ny);
 line(x+12, y-bHeight, x+12, ny);
 line(x+22, y-bHeight, x+22, ny);


 // Antennae
 line(x+12, ny, x-28, ny-53);
 line(x+12, ny, x+32, ny-99);
 line(x+12, ny, x+68, ny+25);



 // Body
 noStroke();
 fill(207,74,63);
 ellipse(x, y-33, 33, 33);
 fill(202,197,120);
 rect(x-45, y-bHeight, 90, bHeight-25);
 fill(207,74,63);
 rect(x-45, y-bHeight+17, 125, 8);


 // Head
 fill(202,197,120);
 ellipse(x+12, ny, radius, radius);
 fill(236,179,119);
 ellipse(x+24, ny-6, 14, 14);
 fill(202,197,120);
 ellipse(x+24, ny-6, 3, 3);
 fill(245,224,203);
 ellipse(x, ny-8, 5, 5);
 ellipse(x+30, ny-26, 4, 4);
 ellipse(x+41, ny+6, 3, 3);


//rect






}
