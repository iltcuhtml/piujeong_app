/**
*main function
*/
function main(_timeStamp) {
    canvas.width = canvas.height / 2; // window.innerWidth;   // set canvas width as innerWidth
    canvas.height = window.innerHeight; // set canvas height as innerWidth

    gap = canvas.width / 4;    // set the gap size as canvas height / 4

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