///////////////////////////////////////////////////////////
///////midterm - Sam Luo Drawing Pad
//////////////////////////////////////////////////////////
//brush sample from: https://github.com/magicbrush/PixelArray
//ideal from : https://blog.csdn.net/qq_40216805/article/details/85415233
/////////////////////////////////////////////////////////
Shortcut key:
D : background color
B : Switch the brush type.
Space : Play/Pause.
T : Timer tool.
E : Eraser.
C : Clear canvas.
S : Save canvas to PNG file.
L Shift: Hide the menu.
*/

//定义变量
var objs = [];
var btns = [];
var FPS = 60;
var timepast = 0;
var R = 255;
var G = 236;
var B = 139;
var bR = 255;
var bG = 225;
var bB = 255;
var eraserRange1 = 20;
var eraserRange2 = 80;
var timerRange = 50;
var brushType = "CIRCLE";
var pbrushType = "CIRCLE";
var isPlaying = true;
var isMenuHide = false;

//花朵函数的变量
var num = 800,
    frms = 180,
    z = 10;
var angle = 0,
    theta = 0;
var f = 0;
//定义按钮
function FuncBtn(X, Y, W, H, CMD) {
  this.x = X;
  this.y = Y;
  this.w = W;
  this.h = H;
  this.cmd = CMD;
}
FuncBtn.prototype.isMouseInBtn = function() {
  if (mouseX >= this.x && mouseX <= this.x + this.w &&
    mouseY >= this.y && mouseY <= this.y + this.h) {
    return true;
  } else {
    return false;
  }
}
FuncBtn.prototype.clickBtn = function() {
  print("ClickBtn!");
  if (this.cmd == "red") {
    bR = 250;
    bG = 128;
    bB = 114;
    this.cmd = "blue";

  } else if (this.cmd == "blue") {
    bR = 152;
    bG = 245;
    bB = 255;
    this.cmd = "green";
  } else if (this.cmd == "green") {
    bR = 193;
    bG = 255;
    bB = 193;
    this.cmd = "yellow";
  } else if (this.cmd == "yellow") {
    bR = 255;
    bG = 255;
    bB = 0;
    this.cmd = "orange";
  } else if (this.cmd == "orange") {
    bR = 255;
    bG = 215;
    bB = 0;
    this.cmd = "purple";
  } else if (this.cmd == "purple") {
    bR = 132;
    bG = 112;
    bB = 255;
    this.cmd = "white";
  } else if (this.cmd == "white") {
    bR = 255;
    bG = 250;
    bB = 250;
    this.cmd = "black";
  } else if (this.cmd == "black") {
    bR = 0;
    bG = 0;
    bB = 0;
    this.cmd = "red";
  } else if (this.cmd == "pause") {
    isPlaying = false;
    for (var i = 0; i < objs.length; i++) {
      objs[i].isPlaying = false;
    }
    this.cmd = "play";

  } else if (this.cmd == "play") {
    isPlaying = true;
    for (var i = 0; i < objs.length; i++) {
      objs[i].isPlaying = true;
    }
    this.cmd = "pause";

  } else if (this.cmd == "timer") {
    brushType = "TIMER";

  } else if (this.cmd == "eraser1") {
    brushType = "ERASER1";
  } else if (this.cmd == "eraser2") {
    brushType = "ERASER2";
  } else if (this.cmd == "clear") {
    objs = [];
 } else if (this.cmd == "save") {
     saveCanvas("Painting", "png")
  } else if (this.cmd == "circle") {
    brushType = "TRIANGLE";
    pbrushType = "CIRCLE";
    this.cmd = "triangle";

  } else if (this.cmd == "triangle") {
    brushType = "LINES";
    pbrushType = "TRIANGLE";
    this.cmd = "lines";

  } else if (this.cmd == "lines") {
    brushType = "CIRCLE";
    pbrushType = "LINES";
    this.cmd = "circle";
  } else if (this.cmd == "shizi") {
    brushType = "STAR";
    pbrushType = "SHIZI";
    this.cmd = "star";
  } else if (this.cmd == "star") {
    brushType = "SUN";
    pbrushType = "STAR";
    this.cmd = "sun";
  } else if (this.cmd == "sun") {
    brushType = "FLOWER";
    pbrushType = "SUN";
    this.cmd = "flower";
  } else if (this.cmd == "flower") {
    brushType = "SHIZI";
    pbrushType = "FLOWER";
    this.cmd = "shizi";
  }

}


//菜单栏
FuncBtn.prototype.displayBtn = function() {
  stroke(0);
  strokeWeight(1);
  fill(255, 255, 255);
  ellipse(this.x + this.w/2 , this.y + this.h/2,30, 30);

if (this.cmd == "red") {
    fill(250, 128, 114);
    resetMatrix();
    strokeWeight(0);
    ellipse(this.x + this.w/2 , this.y + this.h/2, 23, 23);

  } else if (this.cmd == "blue") {
    fill(152,245,255);
    resetMatrix();
    strokeWeight(0);
    ellipse(this.x + this.w/2 , this.y + this.h/2, 23, 23);

  } else if (this.cmd == "green") {
    fill(193,255,193);
    resetMatrix();
    strokeWeight(0);
    ellipse(this.x + this.w/2 , this.y + this.h/2, 23, 23);

  } else if (this.cmd == "yellow") {
    fill(255,255,0);
    resetMatrix();
    strokeWeight(0);
    ellipse(this.x + this.w/2 , this.y + this.h/2, 23, 23);

  } else if (this.cmd == "orange") {
    fill(255,215,0);
    resetMatrix();
    strokeWeight(0);
    ellipse(this.x + this.w/2 , this.y + this.h/2, 23, 23);

  } else if (this.cmd == "purple") {
    fill(132,112,255);
    resetMatrix();
    strokeWeight(0);
    ellipse(this.x + this.w/2 , this.y + this.h/2, 23, 23);

  } else if (this.cmd == "white") {
    fill(255, 250, 250);
    resetMatrix();
    strokeWeight(0);
    ellipse(this.x + this.w/2 , this.y + this.h/2, 23, 23);

  } else if (this.cmd == "black") {
    fill(0,0,0);
    resetMatrix();
    strokeWeight(0);
    ellipse(this.x + this.w/2 , this.y + this.h/2, 23, 23);

  }  else if (this.cmd == "pause") {
    fill(0);
    translate(this.x + this.w / 2, this.y + this.h / 2);
    rectMode(CENTER);
    rect(-4, 0, 4, 15);
    rect(4, 0, 4, 15);
    rectMode(CORNER);
    resetMatrix();
  } else if (this.cmd == "play") {
    fill(0);
    translate(this.x + this.w / 2, this.y + this.h / 2);
    triangle(-2, -8, -2, 8, 6, 0);
    resetMatrix();
  } else if (this.cmd == "timer") {

    translate(this.x + this.w / 2, this.y + this.h / 2);
    noFill();
    ellipse(0, 0, 22, 22);
    ellipse(0, 0, 25, 25);
    fill(0);
    ellipse(0, 0, 3, 3);
    strokeWeight(2);
    line(0, 0, 5, 0);
    line(0, 0, 0, -7);
    resetMatrix();
  } else if (this.cmd == "eraser1") {
    fill(0);
    noStroke();
    translate(this.x + this.w / 2, this.y + this.h / 2-4);
    textSize(10);
    textAlign(CENTER);
    textStyle(BOLD);
    text("brush", 0, 8);
    resetMatrix();
  } else if (this.cmd == "eraser2") {
    fill(0);
    noStroke();
    translate(this.x + this.w / 2, this.y + this.h / 2-4);
    textSize(10);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Brush", 0, 8);
    resetMatrix();
  } else if (this.cmd == "clear") {

    fill(0);
    noStroke();
    translate(this.x + this.w / 2, this.y + this.h / 2-4);
    textSize(13);
    textAlign(CENTER);
    textStyle(BOLD);
    text("clear", 0, 8);
    resetMatrix();
} else if (this.cmd == "save") {

    fill(0);
    noStroke();
    translate(this.x + this.w / 2, this.y + this.h / 2-4);
    textSize(13);
    textAlign(CENTER);
    textStyle(BOLD);
    text("save", 0, 8);
    resetMatrix();
  } else if (this.cmd == "circle") {

    fill(0);
    translate(this.x + this.w / 2, this.y + this.h / 2);
    ellipse(6, -2, 10, 10);
    ellipse(-5, -5, 5, 5);
    ellipse(3, 8, 4, 4);
    resetMatrix();

  } else if (this.cmd == "triangle") {

    fill(0);
    translate(this.x + this.w / 2, this.y + this.h / 2);
    triangle(0, 0, 10, 0, 5, -8);
    triangle(-5, 8, 5, 8, 0, 0);
    triangle(-8, -5, -3, -5, -5.5, -9);
    resetMatrix();

  } else if (this.cmd == "shizi") {

    fill(0);
    strokeWeight(2);
    translate(this.x + this.w / 2, this.y + this.h / 2-4);
    textSize(13);
    textAlign(CENTER);
    textStyle(BOLD);
    text("+", 0, 8);
    resetMatrix();

  } else if (this.cmd == "star") {

    fill(0);
    strokeWeight(2);
    translate(this.x + this.w / 2, this.y + this.h / 2-4);
    textSize(13);
    textAlign(CENTER);
    textStyle(BOLD);
    text("★", 0, 8);
    resetMatrix();

  }  else if (this.cmd == "sun") {

    fill(0);
    strokeWeight(2);
    translate(this.x + this.w / 2, this.y + this.h / 2-4);
    textSize(13);
    textAlign(CENTER);
    textStyle(BOLD);
    text("☼", 0, 8);
    resetMatrix();

  }  else if (this.cmd == "flower") {

    fill(0);
    strokeWeight(2);
    translate(this.x + this.w / 2, this.y + this.h / 2-4);
    textSize(13);
    textAlign(CENTER);
    textStyle(BOLD);
    text("❀", 0, 8);
    resetMatrix();

  }  else if (this.cmd == "lines") {

    fill(0);
    strokeWeight(2);
    translate(this.x + this.w / 2, this.y + this.h / 2);
    line(-5, -10, 5, 0);
    line(-10, -10, 10, 10);
    line(-5, 0, 5, 10);
    resetMatrix();

  }
}


//选色按钮
function ColorBtn(X, Y, W, H, givenR, givenG, givenB) {
  this.x = X;
  this.y = Y;
  this.w = W;
  this.h = H;
  this.r = givenR;
  this.g = givenG;
  this.b = givenB;
}
ColorBtn.prototype.isMouseInBtn = function() {
  if (mouseX >= this.x && mouseX <= this.x + this.w &&
    mouseY >= this.y && mouseY <= this.y + this.h) {
    return true;
  } else {
    return false;
  }
}

ColorBtn.prototype.clickBtn = function() {
  R = this.r;
  G = this.g;
  B = this.b;
  if (brushType == "ERASER1"||brushType == "ERASER2" || brushType == "TIMER") {
    brushType = pbrushType;
  }
}
//选色按钮外框定义
ColorBtn.prototype.displayBtn = function() {
  stroke(0);
  strokeWeight(1);
  fill(this.r * 1.5, this.g * 1.5, this.b * 1.5);
  ellipse(this.x + this.w/2 , this.y + this.h/2,30, 30);

}


//笔刷
function Node(position, givenSize, givenR, givenG, givenB) {
  this.R = givenR;
  this.G = givenG;
  this.B = givenB;
  this.position = createVector(position.x, position.y);
  this.position.x += (random(20) - 10);
  this.position.y += (random(20) - 10);
  this.size = createVector(0, 0);
  this.sizeScale = 0.5;
  var randomSize = givenSize / 2 + random(10);
  this.baseSize = createVector(randomSize, randomSize);
  this.timepast = 0;
  this.isPlaying = isPlaying;
  this.rotateAngle = random(2 * PI);
  this.shapeType = brushType;
  this.pmouseX = pmouseX;
  this.pmouseY = pmouseY;
  this.mouseX = mouseX;
  this.mouseY = mouseY;
}
Node.prototype.drawing = function() {
  noStroke();
  if (this.shapeType == "CIRCLE") {
    translate(this.position.x, this.position.y);
    fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10, round(sin(this.timepast) * 128));
    ellipse(sin(this.timepast) * this.baseSize.x, cos(this.timepast) * this.baseSize.y, this.size.x * 1.25, this.size.y * 1.25);
    fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10, 255);
    ellipse(sin(this.timepast) * this.baseSize.x, cos(this.timepast) * this.baseSize.y, this.size.x, this.size.y);
    resetMatrix();

  } else if (this.shapeType == "TRIANGLE") {
    translate(this.position.x, this.position.y);
    rotate(this.rotateAngle);
    fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10, round(sin(this.timepast) * 128));
    triangle(sin(this.timepast) * this.baseSize.x - this.size.x * 1.5 * 0.5,
      cos(this.timepast) * this.baseSize.y - this.size.y * 1.5 * 0.5,

      sin(this.timepast) * this.baseSize.x + this.size.x * 1.5 * 0.5,
      cos(this.timepast) * this.baseSize.y - this.size.y * 1.5 * 0.5,

      sin(this.timepast) * this.baseSize.x * 0.5,
      cos(this.timepast) * this.baseSize.y + this.size.y * 1.5 * 0.9 * 0.5);

    fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10, 255);
    triangle(sin(this.timepast) * this.baseSize.x - this.size.x * 0.5,
      cos(this.timepast) * this.baseSize.y - this.size.y * 0.5,

      sin(this.timepast) * this.baseSize.x + this.size.x * 0.5,
      cos(this.timepast) * this.baseSize.y - this.size.y * 0.5,

      sin(this.timepast) * this.baseSize.x * 0.5,
      cos(this.timepast) * this.baseSize.y + this.size.y * 0.9 * 0.5);
    resetMatrix();


  } else if (this.shapeType == "LINES") {

    strokeWeight(2 + this.size.x / 1.5 * 0.75);
    stroke(this.size.x * this.R / 8, this.size.x * this.G / 8, this.size.x * this.B / 8, round(sin(this.timepast) * 128));
    line(this.pmouseX, this.pmouseY, this.mouseX, this.mouseY);
    strokeWeight(1.5 + this.size.x / 1.5 * 0.5);
    stroke(this.size.x * this.R / 8, this.size.x * this.G / 8, this.size.x * this.B / 8, 255);
    line(this.pmouseX, this.pmouseY, this.mouseX, this.mouseY);
    resetMatrix();

  } else if (this.shapeType == "SHIZI") {

    strokeWeight(1.5 + this.size.x / 1.5 * 0.5);
    stroke(this.size.x * this.R / 8, this.size.x * this.G / 8, this.size.x * this.B / 8, 255);
     line(this.mouseX-15, this.mouseY, this.mouseX+15, this.mouseY);
    line(this.mouseX, this.mouseY-15, this.mouseX, this.mouseY+15);
    resetMatrix();

  } else if (this.shapeType == "STAR") {

    strokeWeight(1.5 + this.size.x / 1.5 * 0.5);
    fill(this.size.x * this.R / 8, this.size.x * this.G / 8, this.size.x * this.B / 8, 255);
    push();
    translate(this.mouseX,this.mouseY);
    rotate(frameCount / -100.0);
    star(0, 0, 10, 30, 5);
    pop();
    resetMatrix();

  } else if (this.shapeType == "SUN") {

    strokeWeight(1.5 + this.size.x / 1.5 * 0.5);
    fill(this.size.x * this.R / 8, this.size.x * this.G / 8, this.size.x * this.B / 8, 255);
     push();
    translate(this.mouseX,this.mouseY);
    rotate(frameCount / 50.0);
    star(0, 0, 80, 30, 40);
    pop();
    resetMatrix();

  } else if (this.shapeType == "FLOWER") {

    translate(this.mouseX,this.mouseY);
    for (var i = 0; i < z; i++) {
        f = (i % 2 == 0) ? color(238) : color(34);
        if (i == z - 1) f = color(this.size.x * this.R / 8, this.size.x * this.G / 8, this.size.x * this.B / 8, 255);//225, 76, 69
        Flower(150 - (140 / z * i), f, i);
    }
    theta += TWO_PI / frms;

    resetMatrix();

  }
}
Node.prototype.update = function() {
  this.size = createVector(this.baseSize.x + sin(this.timepast) * this.baseSize.x * this.sizeScale,
    this.baseSize.y + sin(this.timepast) * this.baseSize.y * this.sizeScale);
  if (this.isPlaying) {
    this.timepast += 1 / FPS;
  }
}
//星星函数
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
//花朵函数
function Flower(diam, col, n) {
    fill(col);
    beginShape();
    var d = 0;
    for (var i = 0; i < num; i++) {
        var angle = TWO_PI / num * i;
        var s = 0.5 + 0.5 * map(sin(theta + angle * 4.0), -1, 1, -1, 1);
        d = 0.25 + 0.4 * pow(s, 0.3);
        d += 0.05 * pow(0.5 + 0.5 + cos(8 * angle), 1.0);
        var x = cos(angle) * d * diam;
        var y = sin(angle) * d * diam;
        vertex(x, y);
    }
    endShape(CLOSE);
}
////////////////////////////////////////////
//Setup
////////////////////////////////////////////THIS

function setup() {
  frameRate(FPS);
  createCanvas(600, 600);
  noCursor();
  strokeCap(PROJECT);

 noStroke();
    for (var i = 0; i < z; i++) {
        f = (i % 2 == 0) ? 238 : 34;
        Flower(300 - (295 / z * i), f, i);
    }
//菜单按钮排序
  //颜色选择按钮
  btns.push(new ColorBtn(5, 5 + 30 * 0, 30, 30, 255, 250, 250));
  btns.push(new ColorBtn(38, 5 + 30 * 0, 30, 30, 0, 0, 0));
  btns.push(new ColorBtn(5, 5 + 30 * 1, 30, 30, 255, 236, 139));
  btns.push(new ColorBtn(38, 5 + 30 * 1, 30, 30, 255, 0, 0));
  btns.push(new ColorBtn(5, 5 + 30 * 2, 30, 30, 255, 255, 0));
  btns.push(new ColorBtn(38, 5 + 30 * 2, 30, 30, 139, 69, 0));
  btns.push(new ColorBtn(5, 5 + 30 * 3, 30, 30, 124,250,0));
  btns.push(new ColorBtn(38, 5 + 30 * 3, 30, 30, 0, 100, 0));
  btns.push(new ColorBtn(5, 5 + 30 * 4, 30, 30, 0,255,0));
  btns.push(new ColorBtn(38, 5 + 30 * 4, 30, 30, 0,139,139));
  btns.push(new ColorBtn(5, 5 + 30 * 5, 30, 30, 50, 150, 200));
  btns.push(new ColorBtn(38, 5 + 30 * 5, 30, 30, 0, 104, 139));
  btns.push(new ColorBtn(5, 5 + 30 * 6, 30, 30, 100, 50, 200));
  btns.push(new ColorBtn(38, 5 + 30 * 6, 30, 30, 0,0,139));
  btns.push(new ColorBtn(5, 5 + 30 * 7, 30, 30, 150, 50, 200));
  btns.push(new ColorBtn(38, 5 + 30 * 7, 30, 30, 85,26,139));
  btns.push(new ColorBtn(5, 5 + 30 * 8, 30, 30, 225,107,140));
  btns.push(new ColorBtn(38, 5 + 30 * 8, 30, 30, 208,16,76));

  //功能按钮
  btns.push(new FuncBtn(5, 30 * 12-40, 30, 30, "red"));
  btns.push(new FuncBtn(5, 30 * 13-40, 30, 30, "circle"));
  btns.push(new FuncBtn(5, 30 * 14-40, 30, 30, "shizi"));
  if(isPlaying){
    btns.push(new FuncBtn(5, 30 * 15-40, 30, 30, "pause"));
  }else{
    btns.push(new FuncBtn(5, 30 * 15-40, 30, 30, "play"));
  }
  btns.push(new FuncBtn(5, 30 * 16-40, 30, 30, "timer"));
  btns.push(new FuncBtn(5, 30 * 17-40, 30, 30, "eraser1"));
  btns.push(new FuncBtn(5, 30 * 18-40, 30, 30, "eraser2"));
  btns.push(new FuncBtn(5, 30 * 19-40, 30, 30, "clear"));
  btns.push(new FuncBtn(5, 30 * 20-40, 30, 30, "save"));
}


//提示
function draw() {
  background(bR, bG, bB);
  timepast += 1 / FPS;
  if (!isMenuHide) {
    if (timepast < 2) {
      noStroke();
      textAlign(LEFT);
      textSize(20);
      fill(255 - bR);
      text("动态绘画板", 250, height - 300);
    } else if (timepast < 5) {
      noStroke();
      textAlign(LEFT);
      textSize(20);
      fill(255 - bR);
      text("按Shift键隐藏菜单栏；按S保存画布.", 160, height - 300);
    }
  }
  //===================
  //Drawing Something
  //===================
  if (mouseIsPressed && (mouseX > 70 || isMenuHide)) {
    if (brushType == "CIRCLE" || brushType == "LINES" || brushType == "TRIANGLE"|| brushType == "SHIZI"|| brushType == "STAR"|| brushType == "SUN"|| brushType == "FLOWER") {
      var position = createVector(mouseX, mouseY);
      objs.push(new Node(position, sqrt(sq(mouseX - pmouseX) + sq(mouseY - pmouseY)), R, G, B));
    }
    //Eraser
    else if (brushType == "ERASER1" && objs.length > 0) {
      for (var i = 0; i < objs.length; i++) {
        if (sqrt(sq(objs[i].position.x - mouseX) + sq(objs[i].position.y - mouseY)) <= eraserRange1) {
          objs.splice(i, 1);
          break;

        }
      }
    } else if (brushType == "ERASER2" && objs.length > 0) {
      for (var i = 0; i < objs.length; i++) {
        if (sqrt(sq(objs[i].position.x - mouseX) + sq(objs[i].position.y - mouseY)) <= eraserRange2) {
          objs.splice(i, 1);
          break;

        }
      }
    } else if (brushType == "TIMER" && objs.length > 0) {
      for (var i = 0; i < objs.length; i++) {
        if (sqrt(sq(objs[i].position.x - mouseX) + sq(objs[i].position.y - mouseY)) <= timerRange) {
          objs[i].timepast += 2 / FPS;
          objs[i].isPlaying = false;
        }
      }


    }
  }
  for (var i = 0; i < objs.length; i++) {
    objs[i].drawing();
    objs[i].update();
  }


  //=======================
  //Cursor Icon
  //=======================
  //Menu
  stroke(0);
  strokeWeight(2);
  if (!isMenuHide) {
    for (var i = 0; i < btns.length; i++) {
      btns[i].displayBtn();
      if (btns[i].isMouseInBtn()) {
        cursor(HAND);
      }
    }
  }

  //预设显示
  if (mouseX > 70 || isMenuHide) {
    noCursor();
    fill(R * 1.5, G * 1.5, B * 1.5);
    stroke(R * 1.5, G * 1.5, B * 1.5);
    if (brushType == "CIRCLE") {
      ellipse(mouseX, mouseY, 10, 10);
    } else if (brushType == "TRIANGLE") {
      triangle(mouseX - 5, mouseY + 3, mouseX + 5, mouseY + 3, mouseX, mouseY - 5);
    } else if (brushType == "LINES") {
      translate(mouseX, mouseY);
      noFill();
      stroke(255 - bR);
      ellipse(0, 0, 20, 20);
      fill(R * 1.5, G * 1.5, B * 1.5);
      noStroke();
      ellipse(0, 0, 6, 6);
      resetMatrix();
    } else if (brushType == "SHIZI") {
      strokeWeight(5);
      line(mouseX - 15, mouseY , mouseX + 15, mouseY );
      line(mouseX , mouseY+15 , mouseX , mouseY-15 );
    } else if (brushType == "STAR") {
        push();
    translate(mouseX,mouseY);
    rotate(frameCount / -100.0);
    star(0, 0, 10, 30, 5);
    pop();

    } else if (brushType == "SUN") {
         push();
    translate(mouseX,mouseY);
    rotate(frameCount / 50.0);
    star(0, 0, 80, 30, 40);
    pop();

    }  else if (brushType == "FLOWER") {
         translate(this.mouseX,this.mouseY);
       for (var i = 0; i < z; i++) {
        f = (i % 2 == 0) ? color(238) : color(34);
        if (i == z - 1) f = color(this.size.x * this.R / 8, this.size.x * this.G / 8, this.size.x * this.B / 8, 255);
        Flower(150 - (140 / z * i), f, i);
    }
    theta += TWO_PI / frms;

    } else if (brushType == "ERASER1") {
      translate(mouseX, mouseY);
      noFill();
      stroke(255 - bR);
      ellipse(0, 0, eraserRange1, eraserRange1);
      resetMatrix();

    } else if (brushType == "ERASER2") {
      translate(mouseX, mouseY);
      noFill();
      stroke(255 - bR);
      ellipse(0, 0, eraserRange2, eraserRange2);
      resetMatrix();

    } else if (brushType == "TIMER") {
      translate(mouseX, mouseY);
      stroke(255 - bR);
      noFill();
      ellipse(0, 0, timerRange, timerRange);
      ellipse(0, 0, 22, 22);
      ellipse(0, 0, 25, 25);
      fill(255 - bR);
      ellipse(0, 0, 3, 3);
      strokeWeight(2);
      line(0, 0, 5, 0);
      line(0, 0, 0, -7);
      resetMatrix();
    }
  }
}

function mouseClicked() {
  if (!isMenuHide) {
    for (var i = 0; i < btns.length; i++) {
      if (btns[i].isMouseInBtn()) {
        btns[i].clickBtn();
      }
    }
  }
  return false;
}

//快捷键设置
function keyPressed() {

  if (keyCode >= 49 && keyCode <= 57) {
    btns[keyCode - 49].clickBtn();
  }
  if (keyCode == 48) {
    btns[9].clickBtn();
  }
  if (keyCode == 89) {
    btns[10].clickBtn();
  }
  if (keyCode == 87) {
    btns[11].clickBtn();
  }
  if (keyCode == 68) { //D
    btns[18].clickBtn();
  }
  if (keyCode == 66) { //B
    btns[19].clickBtn();
  }
  if (keyCode == 32) { //Space
    btns[21].clickBtn();
  }
  if (keyCode === 84) { //T
    btns[22].clickBtn();
  }
  if (keyCode === 69) { //E
    btns[24].clickBtn();
  }
  if (keyCode === 67) { //C
    btns[25].clickBtn();
  }
  if (keyCode == 16) { //Shift L
    isMenuHide = !isMenuHide;
  }
  if (keyCode == 83) { //S
    btns[26].clickBtn();
  }
}
