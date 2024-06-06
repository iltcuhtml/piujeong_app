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
*for loading circle image
*/
function loadImage() {
    circleImage = new Image(), circleImage.src = "../images/whiteCircle.svg";
}

/**
*for drawing circle in the canvas
*/
function draw() {
    ctx.reset();

    ctx.drawImage(circleImage, 0, 0, 1, 1, circle.x, circle.y, circle.size, circle.size);
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