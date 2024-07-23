/**
*main function
*/
function main(_timeStamp) {
    canvas.width = window.innerWidth;   // set canvas width as innerWidth
    canvas.height = window.innerHeight; // set canvas height as innerWidth

    unit = canvas.width < canvas.height ? canvas.width / 4 : canvas.height / 8;    // set the unit

    timeStamp = _timeStamp;             // set timeStamp as _timeStamp
    elapsed = timeStamp - startTime;    // set elapsed as timeStamp = startTime

    ctx.reset();    // reset the ctx

    setUI();    // set UI

    /* check if is started */
    if (isStarted) {
        /* started and show the main screen */
        mainScreen();
    } else {
        /* stopped and show the title screen */
        titleScreen();
    }        

    /* check if debug mod is on */
    if (debugMod) {
        /* show debug text */
        showDebugText();
    }

    requestAnimationFrame(main);
}

main();