/**
*for drawing rotated image
*/
function drawRotatedImage(img, sx, sy, sW, sH, dx, dy, dW, dH, rotation) {
    ctx.save();
    
    ctx.translate(dx, dy);
    ctx.rotate(rotation);
    
    ctx.drawImage(img, sx, sy, sW, sH, -(dW / 2), -(dH / 2), dW, dH);
    
    ctx.restore();
}

/**
*for showing title screen
*/
function titleScreen() {
    /* check if startButton is pressed */
    startButton.onclick = () => {
        if (parseInt(inTimeInput.value) > 0 && parseInt(exTimeInput.value) > 0) {
            startTime = timeStamp;

            inTime = parseInt(inTimeInput.value) * 1000;
            exTime = parseInt(exTimeInput.value) * 1000;

            circleObj.push(new circle);

            isStarted = true;
        }

        sfxCircleDirection = "up";
        sfx.volume = parseInt(volumeInput.value) / 100;
    }
}

/**
*for showing main screen
*/
function mainScreen() {
    /* play sfx */
    if (sfxCircleDirection === "down" && elapsed <= inTime - 100) {
        sfx.pause();
        sfx.currentTime = 0;
        
        sfx.play();

        sfxCircleDirection = "up";
    } else if (sfxCircleDirection === "up" && 
               inTime - 100 < elapsed && elapsed <= inTime + exTime - 100) {
        sfx.pause();
        sfx.currentTime = 0;
        
        sfx.play();

        sfxCircleDirection = "down";
    }

    /* draw board */
    if (!isSVG) {
        /* not drawing svg image */
        ctx.fillStyle = "#76CBE5";
    
        ctx.fillRect(canvas.width * 0.5 - unit * 1.25, unit * 0.75, unit * 2.5, unit * 0.25);
        ctx.fillRect(canvas.width * 0.5 - unit * 1.25, canvas.height - unit, unit * 2.5, unit * 0.25);

    } else {
        /* drawing svg image */
        drawRotatedImage(boardImg, 0, 0, 1967, 361,
                         canvas.width * 0.5, unit * 0.875,
                         unit * 2.5, unit * 0.25,
                         0);

        drawRotatedImage(boardImg, 0, 0, 1967, 361,
                         canvas.width * 0.5, canvas.height - unit * 0.875,
                         unit * 2.5, unit * 0.25,
                         Math.PI);
    }

    /* update circle */
    for (let i = 0; i < circleObj.length; i++) {
        ctx.globalAlpha = circleObj[i].alpha;

        circleObj[i].draw();
        circleObj[i].move();

        if (circleObj[i].alpha <= 0) {
            circleObj.splice(i, 1);
        }
    }

    /* reset globalAlpha value in ctx as 1 */
    ctx.globalAlpha = 1;

    /* check if stopButton is pressed */
    stopButton.onclick = () => {
        circleObj = [];
        
        isStarted = false;
    }
}

/**
*for setting UI
*/
function setUI() {
    /* move UI */
    if (canvas.width < canvas.height) {
        /* for phone */
        /* title screen */
        titleText.style.fontSize = "8vw";

        inTimeText.style.top = "calc(40vh - 4vw)";
        inTimeText.style.fontSize = "4vw";

        exTimeText.style.top = "calc(40vh - 4vw)";
        exTimeText.style.fontSize = "4vw";

        inTimeInput.style.top = "calc(40vh + 4vw)";
        inTimeInput.style.fontSize = "4vw";
        inTimeInput.style.width = "16vw";
        inTimeInput.style.height = "8vw";
        inTimeInput.style.borderRadius = "4vw";

        exTimeInput.style.top = "calc(40vh + 4vw)";
        exTimeInput.style.fontSize = "4vw";
        exTimeInput.style.width = "16vw";
        exTimeInput.style.height = "8vw";
        exTimeInput.style.borderRadius = "4vw";

        volumeText.style.top = "calc(60vh - 2vw)";
        volumeText.style.fontSize = "4vw";

        volumeInput.style.top = "calc(60vh + 2vw)";
        volumeInput.style.fontSize = "4vw";
        volumeInput.style.borderRadius = "4vw";

        startButton.style.fontSize = "8vw";
        startButton.style.width = "32vw";
        startButton.style.height = "16vw";
        startButton.style.borderRadius = "8vw";

        /* main screen */
        stopButton.style.fontSize = "3vw";
        stopButton.style.width = "12vw";
        stopButton.style.height = "6vw";
        stopButton.style.borderRadius = "3vw";

        setsText.style.top = "calc(40vh - 4vw)";
        setsText.style.fontSize = "4vw";

        repsText.style.top = "calc(40vh - 4vw)";
        repsText.style.fontSize = "4vw";

        setsInput.style.top = "calc(40vh + 4vw)";
        setsInput.style.fontSize = "4vw";
        setsInput.style.width = "16vw";
        setsInput.style.height = "8vw";
        setsInput.style.borderRadius = "4vw";

        repsInput.style.top = "calc(40vh + 4vw)";
        repsInput.style.fontSize = "4vw";
        repsInput.style.width = "16vw";
        repsInput.style.height = "8vw";
        repsInput.style.borderRadius = "4vw";
    } else {
        /* for not phone */
        /* title screen */
        titleText.style.fontSize = "3vw";

        inTimeText.style.top = "calc(40vh - 1.5vw)";
        inTimeText.style.fontSize = "1.5vw";

        exTimeText.style.top = "calc(40vh - 1.5vw)";
        exTimeText.style.fontSize = "1.5vw";

        inTimeInput.style.top = "calc(40vh + 1.5vw)";
        inTimeInput.style.fontSize = "1.5vw";
        inTimeInput.style.width = "6vw";
        inTimeInput.style.height = "3vw";
        inTimeInput.style.borderRadius = "3vw";

        exTimeInput.style.top = "calc(40vh + 1.5vw)";
        exTimeInput.style.fontSize = "1.5vw";
        exTimeInput.style.width = "6vw";
        exTimeInput.style.height = "3vw";
        exTimeInput.style.borderRadius = "1.5vw";

        volumeText.style.top = "calc(60vh - 0.75vw)";
        volumeText.style.fontSize = "1.5vw";

        volumeInput.style.top = "calc(60vh + 0.75vw)";
        volumeInput.style.fontSize = "1.5vw";
        volumeInput.style.borderRadius = "1.5vw";

        startButton.style.fontSize = "3vw";
        startButton.style.width = "12vw";
        startButton.style.height = "6vw";
        startButton.style.borderRadius = "3vw";

        /* main screen */
        stopButton.style.fontSize = "1.125vw";
        stopButton.style.width = "4.5vw";
        stopButton.style.height = "2.25vw";
        stopButton.style.borderRadius = "1.125vw";

        setsText.style.top = "calc(40vh - 1.5vw)";
        setsText.style.fontSize = "1.5vw";

        repsText.style.top = "calc(40vh - 1.5vw)";
        repsText.style.fontSize = "1.5vw";

        setsInput.style.top = "calc(40vh + 1.5vw)";
        setsInput.style.fontSize = "1.5vw";
        setsInput.style.width = "6vw";
        setsInput.style.height = "3vw";
        setsInput.style.borderRadius = "3vw";

        repsInput.style.top = "calc(40vh + 1.5vw)";
        repsInput.style.fontSize = "1.5vw";
        repsInput.style.width = "6vw";
        repsInput.style.height = "3vw";
        repsInput.style.borderRadius = "1.5vw";
    }

    /* set visibility of UI */
    if (isStarted) {
        /* started */
        /* title screen */
        titleText.style.visibility = "hidden";

        inTimeText.style.visibility = "hidden";
        exTimeText.style.visibility = "hidden";
        inTimeInput.style.visibility = "hidden";
        exTimeInput.style.visibility = "hidden";

        volumeText.style.visibility = "hidden";
        volumeInput.style.visibility = "hidden";

        startButton.style.visibility = "hidden";

        /* main screen */
        stopButton.style.visibility = "visible";

        setsText.style.visibility = "visible";
        repsText.style.visibility = "visible";
        setsInput.style.visibility = "visible";
        repsInput.style.visibility = "visible";

        setsText.style.color = "black";
        repsText.style.color = "black";
    } else {
        /* stopped */
        /* title screen */
        titleText.style.visibility = "visible";

        inTimeText.style.visibility = "visible";
        exTimeText.style.visibility = "visible";
        inTimeInput.style.visibility = "visible";
        exTimeInput.style.visibility = "visible";

        volumeText.style.visibility = "visible";
        volumeInput.style.visibility = "visible";
    
        startButton.style.visibility = "visible";
    
        /* main screen */
        stopButton.style.visibility = "hidden";

        setsText.style.visibility = "hidden";
        repsText.style.visibility = "hidden";
        setsInput.style.visibility = "hidden";
        repsInput.style.visibility = "hidden";

        titleText.style.color = "black";

        inTimeText.style.color = "black";
        exTimeText.style.color = "black";
    }
}

/**
*for showing debug text
*/
function showDebugText() {
    /* set text font as 16px Arial */
    /* set text fillStyle (color) as black */
    /* set textAlign as start */
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "start";

    /* show values */    
    ctx.fillText(`Canvas Width : ${canvas.width}`, 10, 200);
    ctx.fillText(`Canvas Height : ${canvas.height}`, 10, 220);

    ctx.fillText(`timeStamp : ${timeStamp}`, 10, 260);
    ctx.fillText(`startTime : ${startTime}`, 10, 280);
    ctx.fillText(`elapsed : ${elapsed}`, 10, 300);

    ctx.fillText(`isSVG : ${isSVG}`, 10, 340);

    ctx.fillText(`isStarted : ${isStarted}`, 10, 380);

    ctx.fillText(`inTime : ${inTime}`, 10, 420);
    ctx.fillText(`exTime : ${exTime}`, 10, 440);

    if (circleObj[0] !== undefined) {
        ctx.fillText(`circleObj[0].x : ${circleObj[0].x}`, 10, 480);
        ctx.fillText(`circleObj[0].y : ${circleObj[0].y}`, 10, 500);
        ctx.fillText(`circleObj[0].radius : ${circleObj[0].radius}`, 10, 520);
        ctx.fillText(`circleObj[0].alpha : ${circleObj[0].alpha}`, 10, 540);
    }

    ctx.fillText(`sfx.volume : ${sfx.volume}`, 10, 580);

    ctx.fillText(`sfxCircleDirection : ${sfxCircleDirection}`, 10, 620);
}