/**
*main function
*/
function main(_timeStamp) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    unit = canvas.width < canvas.height ? canvas.width / 4 : canvas.height / 8;

    timeStamp = _timeStamp;
    elapsed = timeStamp - startTime;

    ctx.reset();

    setUI();

    if (screenState !== "title" && screenState !== "insight") {
        mainScreen();
    } else if (screenState === "title") {
        titleScreen();
    } else if (screenState === "insight") {
        insightScreen();
    }

    if (debugMod) {
        showDebugText();
    }

    requestAnimationFrame(main);
}

main();