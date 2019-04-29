/////////////////////////////////////////////////////////
///Wake up -(unfinished)
////////////////////////////////////////////////////////
//Sam Luo
//
var mic = undefined;

var guessItem = null;
// 控制新随机数生成的频率
var interval = 60;
// 存储解析值的数组
var results = [];
var solution = null;
// 存储游戏是否已结束
var gameOver = false;

function setup() {
	createCanvas(800, 300);
	mic = new p5.AudioIn();
    mic.start();
}

function draw() {
	var vol = mic.getLevel();
	// 如果有3次错误或10次答题则终止游戏
	var gameScore = getGameScore(results);
	if(gameScore.loss === 3 || gameScore.total === 10){
		gameOver = true;
		displayGameOver(gameScore);
		return;
	}
	background(0); // 黑色背景
	if(frameCount === 1 || frameCount % interval === 0){
		solution = null;
		guessItem = new GuessItem(width/2, height/2, 1);
	}

	if(guessItem){
		guessItem.render();
	}

	if(solution === true || solution === false){
		// 不以单调的颜色在屏幕上显示文本
		solutionMessage(gameScore.total, solution);
	}
}

function solutionMessage(seed, solution){
	// 根据solution的值为 true 或 false 来显示随机消息
	var trueMessages = [
		'GOOD JOB!',
		'DOING GREAT!',
		'OMG!',
		'SUCH WIN!',
		'I APPRECIATE YOU',
		'IMPRESSIVE'
	];

	var falseMessages = [
		'OH NO!',
		'BETTER LUCK NEXT TIME!',
		'PFTTTT',
		':('
	];

	var messages;

	push();
	textAlign(CENTER, CENTER);
	fill(237, 34, 93);
	textSize(36);
	randomSeed(seed * 10000);

	if(solution === true){
		background(255);
		messages = trueMessages;
	}else if(solution === false){
		background(0);
		messages = falseMessages;
	}

	text(messages[parseInt(random(messages.length), 10)],
		width/2, height/2);
	pop();
}

function displayGameOver(score){
	// 创建游戏结束界面
	push();
	background(255);
	textSize(24);
	textAlign(CENTER, CENTER);
	translate(width/2, height/2);
	fill(237, 34, 93);
	text('!', 0, 0);
	translate(0, 36);
	fill(0);
	// 在字符串中添加空格让文本显示更易读-针对英文版
	// text('You have ' + score.win + ' correct guesses', 0, 0);
	text('You have  ' + score.win + '  correct guesses', 0, 0 );
	translate(0, 100);
	textSize(16);
	var alternatingValue = map(sin(frameCount / 10), -1, 1, 0, 255);
	fill(234, 34, 93, alternatingValue);
	text(">>>ENTER<<<", 0, 0);
	pop();
}

function getGameScore(score){
	// 给定一个数组score，计算答对和答错的次数
	var wins = 0;
	var losses = 0;
	var total = score.length;

	for(var i = 0; i < total; i++){
		var item = score[i];
		if(item == true){
			wins = wins + 1;
		}else{
			losses = losses + 1;
		}
	}

	return {win: wins, loss: losses, total: total}
}

function restartTheGame(){
	// 设置游戏状态为开始
	results = [];
	solution = null;
	gameOver = false;
}

function keyPressed(){
	//如果游戏结束，在按下ENTER键时重启游戏
	if(gameOver === true){
		if(keyCode === ENTER){
			console.log('ReStart');
			restartTheGame();
			return;
		}
	}

	if(guessItem !== null){
		// 检查按下的键是否与显示的值相匹配
		// 如果匹配设置全局变量solution为对应的值
		console.log('you pressed: ', key);
		solution = guessItem.solve(key);
		console.log(solution);
		if(solution){
			results.push(true);
		}else{
			results.push(false);
		}
		guessItem = null;
	}else{
		console.log('nothing to be solved');
	}
}

function GuessItem(x, y, scl){
	this.x = x;
	this.y = y;
	this.scale = scl;
	this.scaleIncrement =0.25;
	this.clr = 255;
	this.content = getContent();
	this.alpha = 255;
	this.alphaDecrement = 6;
	this.solved = null;
	this.contentMap = {
		'1': 'one',
 		'2': 'two',
 		'3': 'three',
 		'4': 'four',
		'5': 'five',
		'6': 'six',
		'7': 'seven',
		'8': 'eight',
		'9': 'nine',
		'0': 'zero'
	};
	this.colors = [
		[63, 184, 175],
		[127, 199, 175],
		[218, 216, 167],
		[255, 158, 157],
		[255, 61, 127],
		[55, 191, 211],
		[159, 223, 82],
		[234, 209, 43],
		[250, 69, 8],
		[194, 13, 0]
	];

	function getContent(){
		// 生成0到9之间的随机整数
		return String(parseInt(random(10), 10));
	}

	this.solve = function(input){
		// 检查给定的输入是否与内容相等
		// 设置 solved 为对应的值
		var solved;
		if(input === this.content){
			solved = true;
		}else{
			solved = false;
		}
		this.solved = solved;
		return solved;
	}

	this.drawEllipse = function(size, strkWeight, speedMultiplier, seed){
		// 使用随机颜色在屏幕上画动态的圆
		push();
		randomSeed(seed);
		translate(this.x, this.y);
		var ellipseSize = this.scale * speedMultiplier;
		scale(ellipseSize);
		var clr = this.colors[parseInt(random(this.colors.length), 10)];
		stroke(clr);
		noFill();
		strokeWeight(strkWeight);
		ellipse(0, 0, size, size);
		pop();
	}

	this.render = function(){
		push();
		this.drawEllipse(100, 15, 2, 1 * this.content * 1000);
		this.drawEllipse(60, 7, 2, 1 * this.content * 2000);
		this.drawEllipse(35, 3, 1.2, 1 * this.content * 3000);
		pop();

		push();
		fill(this.clr, this.alpha);
		textAlign(CENTER, CENTER);
		translate(this.x, this.y);
		scale(this.scale);
		// 显示数字对应的单词
		text(this.contentMap[this.content], 0, 0);
		// 通过每次渲染的递增值来增加 scale 的大小
		this.scale = this.scale + this.scaleIncrement;
		// 通过递减值在每次渲染时减小 alpha 值
		this.alpha = this.alpha - this.alphaDecrement;
		pop();
	}
}

function girl (){
	  strokeWeight(0);

    //呆毛
    fill(208, 32, 144);
    beginShape();
    vertex(280, 100);
    vertex(240, 120);
    vertex(270, 130);
    endShape(CLOSE);

    //腿
    fill(255, 245, 238);
    beginShape();
    vertex(340, 200);
    vertex(230, 320);
    vertex(265, 325);
    vertex(350, 220);
    endShape(CLOSE);

    beginShape();
    vertex(320, 210);
    vertex(310, 340);
    vertex(340, 335);
    vertex(350, 210);
    endShape(CLOSE);

    //裙子
    fill(139, 80, 80);
    beginShape();
    vertex(270, 250);
    vertex(250, 275);
    vertex(280, 280);
    vertex(280, 283);
    vertex(320, 288);
    vertex(335, 280);
    vertex(355, 290);
    vertex(380, 280);
    vertex(365, 255);
    endShape(CLOSE);

    //衣服
    fill(54, 54, 54);
    triangle(330, 120, 270, 250, 365, 255);



    //头发
    fill(90, 10, 90);
    ellipse(300, 150, 110, 110);

    fill(255, 245, 238);
    ellipse(300, 150, 80, 85);

    fill(90, 10, 90);
    beginShape();
    vertex(270, 110);
    vertex(290, 140);
    vertex(315, 135);
    vertex(310, 100);
    endShape(CLOSE);

    beginShape();
    vertex(300, 120);
    vertex(340, 140);
    vertex(330, 110);
    vertex(300, 100);
    endShape(CLOSE);

    beginShape();
    vertex(280, 110);
    vertex(280, 140);
    vertex(260, 120);
    endShape(CLOSE);

    beginShape();
    vertex(260, 115);
    vertex(240, 190);
    vertex(260, 210);
    vertex(270, 120);
    endShape(CLOSE);

    beginShape();
    vertex(246, 140);
    vertex(235, 190);
    vertex(260, 160);
    endShape(CLOSE);

    beginShape();
    vertex(354, 140);
    vertex(360, 190);
    vertex(350, 175);
    vertex(348, 185);
    vertex(330, 160);
    endShape(CLOSE);

    beginShape();
    vertex(260, 190);
    vertex(270, 210);
    vertex(275, 180);
    endShape(CLOSE);


    //挑染
    fill(208, 32, 144);
    beginShape();
    vertex(265, 140);
    vertex(255, 200);
    vertex(260, 210);
    vertex(270, 120);
    endShape(CLOSE);


    fill(139, 10, 80);
    beginShape();
    vertex(270, 180);
    vertex(345, 170);
    vertex(350, 200);
    vertex(285, 220);
    vertex(280, 215);
    vertex(285, 200);
    vertex(275, 190);
    endShape(CLOSE);

    fill(90, 10, 90);
    beginShape();
    vertex(340, 130);
    vertex(310, 190);
    vertex(335, 190);
    vertex(350, 130);
    endShape(CLOSE);

    //挑染
    fill(208, 32, 144);
    beginShape();
    vertex(347, 140);
    vertex(330, 190);
    vertex(335, 190);
    vertex(350, 130);
    endShape(CLOSE);

    beginShape();
    vertex(280, 125);
    vertex(290, 140);
    vertex(295, 139);
    endShape(CLOSE);

    fill(54, 54, 54);
    ellipse(317, 150, 5, 18);
    ellipse(285, 150, 5, 18);

    //红晕
    fill(255, 195, 103);
    beginShape();
    vertex(280, 160);
    vertex(275, 168);
    vertex(276, 168);
    vertex(281, 160);
    endShape(CLOSE);
    beginShape();
    vertex(278, 160);
    vertex(273, 168);
    vertex(274, 168);
    vertex(279, 160);
    endShape(CLOSE);
    beginShape();
    vertex(276, 160);
    vertex(271, 168);
    vertex(272, 168);
    vertex(277, 160);
    endShape(CLOSE);
    beginShape();
    vertex(282, 160);
    vertex(277, 168);
    vertex(278, 168);
    vertex(283, 160);
    endShape(CLOSE);
    beginShape();
    vertex(284, 160);
    vertex(279, 168);
    vertex(280, 168);
    vertex(285, 160);
    endShape(CLOSE);
    beginShape();
    vertex(324, 160);
    vertex(319, 168);
    vertex(320, 168);
    vertex(325, 160);
    endShape(CLOSE);
    beginShape();
    vertex(322, 160);
    vertex(317, 168);
    vertex(318, 168);
    vertex(323, 160);
    endShape(CLOSE);
    beginShape();
    vertex(320, 160);
    vertex(315, 168);
    vertex(316, 168);
    vertex(321, 160);
    endShape(CLOSE);
    beginShape();
    vertex(318, 160);
    vertex(313, 168);
    vertex(314, 168);
    vertex(319, 160);
    endShape(CLOSE);
    beginShape();
    vertex(316, 160);
    vertex(311, 168);
    vertex(312, 168);
    vertex(317, 160);
    endShape(CLOSE);

    //手
    fill(255, 245, 238);
    ellipse(278, 205, 8, 20);
    ellipse(345, 203, 8, 20);
    ellipse(285, 215, 30, 30);
    ellipse(335, 210, 35, 30);
    //袖子
    fill(219, 112, 147);
    ellipse(280, 220, 35, 35);
    ellipse(340, 215, 35, 35);

    //光环
    stroke(255, 250, 165);
    strokeWeight(3);
    noFill();
    ellipse(300, 100, 80, 40);



}
