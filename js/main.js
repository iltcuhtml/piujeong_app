/**
*main function
*/
function main(_timeStamp) {
    canvas.width = window.innerWidth;   // set canvas width as innerWidth
    canvas.height = window.innerHeight; // set canvas height as innerWidth

    gap = Math.min(canvas.width, canvas.height) / 5;    // set the gap size as canvas height / 5

    timeStamp = _timeStamp;
    elapsed = timeStamp - startTime;

    ctx.reset();
    
    // getFPS();

    if (isStarted) {
        mainScreen();
    } else {
        titleScreen();
    }        

    if (debugMod) {
        debug();
    }

    requestAnimationFrame(main);
}

main();