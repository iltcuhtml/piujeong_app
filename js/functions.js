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
function loadCircleImage() {
    circleImage = new Image();
    circleImage.src = "image/circle.svg";
}

/**
*for drawing text
*/
function drawText(text) {
    ctx.font = "64px Arial";
    ctx.fillStyle = "gray";
    ctx.textAlign = "center";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}

/**
*for debugging
*/
function debug() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "start";
    
    if (FPS !== -1) ctx.fillText(`FPS : ${FPS}`, 10, 130);
    
    ctx.fillText(`Canvas Width : ${canvas.width}`, 10, 190);
    ctx.fillText(`Canvas Height : ${canvas.height}`, 10, 220);
}