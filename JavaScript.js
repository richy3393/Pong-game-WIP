var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height / 2;
var ballRadius = 10;
var lineX = canvas.width / 2;
var lineH = canvas.height;
var paddleH = 70;
var paddleW = 10;
var paddleY = (canvas.height - paddleH) / 2;
var paddleY2 = (canvas.height - paddleH) / 2;
var dx = 4;
var dy = -4;
var wPressed = false;
var sPressed = false;
var upPressed = false;
var downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.keyCode === 87 ){
        wPressed = true;
    }
    else if (e.keyCode === 83) {
        sPressed = true;
    }
    else if (e.keyCode === 38) {
        upPressed = true;
    }
    else if (e.keyCode === 40) {
        downPressed = true;
    }
}
function keyUpHandler(e) {
    if (e.keyCode === 87) {
        wPressed = false;
    }
    else if (e.keyCode === 83) {
        sPressed = false;
}
    else if (e.keyCode === 38) {
        upPressed = false;
    }
    else if (e.keyCode === 40) {
        downPressed = false;
    }
}


function drawHalfWay() {
    
    ctx.beginPath();
    ctx.rect(lineX, 0, 4, lineH);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}
function centreCircle() {
    var CCW = canvas.width / 2;
    var CCH = canvas.height / 2; 
    ctx.beginPath();
    ctx.arc(CCW, CCH, 35, 0, Math.PI * 2);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.lineWidth = 4;
    ctx.closePath();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
}

function drawPaddleOne() {
    ctx.beginPath();
    ctx.rect(0, paddleY, paddleW, paddleH)
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}
function drawPaddleTwo() {
    ctx.beginPath();
    ctx.rect(canvas.width-10, paddleY2, paddleW, paddleH)
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}
function start() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    centreCircle()
    drawHalfWay();
    drawBall();
    drawPaddleOne();
    drawPaddleTwo();
   
   
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    if (wPressed && paddleY > 0) {
        paddleY -= 6;
    }
    else if (sPressed && paddleY < canvas.height - paddleH) {
        paddleY += 6;
    }
    if (upPressed && paddleY2 > 0) {
        paddleY2 -= 6;
    }
    else if (downPressed && paddleY2 < canvas.height - paddleH) {
        paddleY2 += 6;
    }

    x += dx;
    y += dy;
    requestAnimationFrame(start);
};

start();

