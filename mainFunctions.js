/**
*for get FPS value
*
*@returns FPS value
*/
function getFPS() {
    let _FPS = 0;
    const _dateBefore = Date.now();

    if (Date.now() < _dateBefore + 1000) {
        _FPS++;
    }

    return _FPS;
}

/**
*for debugging
*/
function debug() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    
    ctx.fillText(`${FPS}`, 10, 30);
    ctx.fillText(`${getFPS()}`, 10, 60);
    
    ctx.fillText(`${canvas.width}`, 10, 90);
    ctx.fillText(`${canvas.height}`, 10, 120);
}