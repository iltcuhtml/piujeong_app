/**
*for get FPS value
*/
function getFPS() {
    if (Date.now() <= dateBefore + 1000) {
        FPS_Counter++;
    } else {
        FPS = FPS_Counter;

        dateBefore = Date.now();
        FPS_Counter = 0;
    }
}

/**
*for loading images
*/
function loadImages() {
    whiteCircle = new Image(), whiteCircle.src = "../images/whiteCircle.svg";
}

/**
*for moving image in the canvas
*/
function moveImage(_x, _y) {
    ctx.drawImage(whiteCircle, 0, 0, 1, 1, _x, _y, 100, 100);
}

/**
*for drawing things in the canvas
*/
function draw() {
    ctx.reset();

    moveImage(100, 100);
}

/**
*for debugging
*/
function debug() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    
    ctx.fillText(`${FPS}`, 10, 30);
    
    ctx.fillText(`${canvas.width}`, 10, 90);
    ctx.fillText(`${canvas.height}`, 10, 120);
}