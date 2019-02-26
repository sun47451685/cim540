//Global variables
var backgroundcolor="blue";//strings
var mouthX=100
var earoffset=10

console.log("backgroundcolor:   "+ backgroundcolor)




function setup() {
  // put setup code here 设置的地方-第一个创建500x500像素的画布
  createCanvas(500,500);
  background("backgroundcolor")
  //红色
}

function draw() {
  // put drawing code here 反复运行的地方



fill(255,50,50)
  //左眼
  ellipse(155,175,25,30)
  //眼球
  ellipse(150,175,10,10)

  //头
  ellipse(200,200,100,100)
  //圆：x,y坐标,宽，,高//头


  //mouth
  rect(100,200,75,20)
  rect(100,230,75,10)

  //nose
  ellipse(100,200,10,10)

  strokeWeight(10)
  point(100,200)

  strokeWeight(1)

  //eyes
  ellipse(170,175,25,30)
  ellipse(165,175,10,10)

  //neck
  rect(175,250,50,50)

  //body
  rect(200,275,150,100)

  //耳朵
  triangle(175,150,200,100,200,159)
  triangle(175+10,150,200+10,100,200+10,200+10,150)

stroke(0,0,0)
  //尾巴
  strokeWeight(15)
  line(350,275,350+50,275-50)
  strokeWeight(1)

stroke(0,255,0)
//线条颜色

//腿
  angleMode(DEGREES)
  arc(200,400,25,50,135,270)
  arc(225,400,50,50,135,270)
  arc(325,400,25,50,135,270)
  arc(350,400,50,50,135,270)

}
