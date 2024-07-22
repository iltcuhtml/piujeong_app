/**
*main function
*/
function main(_timeStamp) {
    canvas.width = window.innerWidth;   // set canvas width as innerWidth
    canvas.height = window.innerHeight; // set canvas height as innerWidth

    unit = canvas.width < canvas.height ? canvas.width / 4 : canvas.height / 8;    // set the unit

    timeStamp = _timeStamp;
    elapsed = timeStamp - startTime;

    ctx.reset();

    style();

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