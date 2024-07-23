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
    /* check if inhaleTimeInput is changed */
    inhaleTimeInput.onchange = () => {
        /* check if inhaleTimeInput's value is bigger than 0 */
        if (parseFloat(inhaleTimeInput.value) > 0) {
            /* set the inhaleTime as inhaleTimeInput's value */
            inhaleTime = parseFloat(inhaleTimeInput.value) * 1000;
        }
        
        /* reset the inhaleTimeInput's value as inhaleTime */
        inhaleTimeInput.value = inhaleTime / 1000;
    }

    /* check if exhaleTimeInput is changed */
    exhaleTimeInput.onchange = () => {
        /* check if exhaleTimeInput's value is bigger than 0 */
        if (parseFloat(exhaleTimeInput.value) > 0) {
            /* set the exhaleTime as exhaleTimeInput's value */
            exhaleTime = parseFloat(exhaleTimeInput.value) * 1000;
        }
        
        /* reset the exhaleTimeInput's value as exhaleTime */
        exhaleTimeInput.value = exhaleTime / 1000;
    }

    /* check if startButton is pressed */
    startButton.onclick = () => {
        startTime = timeStamp;

        circleObj.push(new circle);

        isStarted = true;

        sfx.volume = parseFloat(volumeInput.value) / 100;
    }
}

/**
*for showing main screen
*/
function mainScreen() {
    /* play sfx */
    if (sfxCircleDirection === "down" && elapsed <= inhaleTime - 100) {
        sfx.pause();
        sfx.currentTime = 0;
        
        sfx.play();

        sfxCircleDirection = "up";
    } else if (sfxCircleDirection === "up" && 
               inhaleTime - 100 < elapsed && elapsed <= inhaleTime + exhaleTime - 100) {
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
        
        /* check if sets are NOT done */
        if (doneSets < setSets) {
            circleObj[i].move();
        } else {
            startTime = timeStamp;

            circleObj[i].y = (canvas.height - unit / 4 - unit);
            circleObj[i].radius = unit / 4;
        }

        if (circleObj[i].alpha <= 0) {
            circleObj.splice(i, 1);
        }
    }

    /* reset globalAlpha value in ctx as 1 */
    ctx.globalAlpha = 1;

    /* set SetsAndRepsText's text as "'doneSets' Sets, 'doneReps' Reps" */
    SetsAndRepsText.innerText = `${doneSets} Sets\n${doneReps} Reps`;

    /* check if setsInput is changed */
    setsInput.onchange = () => {
        /* check if setsInput's value (INT) is bigger than doneSets */
        if (parseInt(setsInput.value) > doneSets) {
            /* set the setSets as setsInput's value (INT) */
            setSets = parseInt(setsInput.value);
        }
        
        /* reset the setsInput's value as setSets */
        setsInput.value = setSets;
    }

    /* check if repsInput is changed */
    repsInput.onchange = () => {
        /* check if repsInput's value (INT) is bigger than doneReps */
        if (parseInt(repsInput.value) > doneReps) {
            /* set the setReps as repsInput's value (INT) */
            setReps = parseInt(repsInput.value);
        }
        
        /* reset the repsInput's value as setReps */
        repsInput.value = setReps;
    }

    /* check if stopButton is pressed */
    stopButton.onclick = () => {
        circleObj = [];
        
        isStarted = false;

        doneSets = 0;
        doneReps = 0;
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

        inhaleTimeText.style.top = "calc(40vh - 4vw)";
        inhaleTimeText.style.fontSize = "4vw";

        exhaleTimeText.style.top = "calc(40vh - 4vw)";
        exhaleTimeText.style.fontSize = "4vw";

        inhaleTimeInput.style.top = "calc(40vh + 4vw)";
        inhaleTimeInput.style.fontSize = "4vw";
        inhaleTimeInput.style.width = "16vw";
        inhaleTimeInput.style.height = "8vw";
        inhaleTimeInput.style.borderRadius = "4vw";

        exhaleTimeInput.style.top = "calc(40vh + 4vw)";
        exhaleTimeInput.style.fontSize = "4vw";
        exhaleTimeInput.style.width = "16vw";
        exhaleTimeInput.style.height = "8vw";
        exhaleTimeInput.style.borderRadius = "4vw";

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

        setsText.style.top = `calc(${canvas.height - unit * 0.4375}px - 3vw)`;
        setsText.style.left = `calc(50vw - ${unit * 1.25 * 0.75}px)`;
        setsText.style.fontSize = "3vw";

        repsText.style.top = `calc(${canvas.height - unit * 0.4375}px - 3vw)`;
        repsText.style.fontSize = "3vw";

        setsInput.style.top = `calc(${canvas.height - unit * 0.4375}px + 3vw)`;
        setsInput.style.left = `calc(50vw - ${unit * 1.25 * 0.75}px)`;
        setsInput.style.fontSize = "3vw";
        setsInput.style.width = "12vw";
        setsInput.style.height = "6vw";
        setsInput.style.borderRadius = "3vw";

        repsInput.style.top = `calc(${canvas.height - unit * 0.4375}px + 3vw)`;
        repsInput.style.fontSize = "3vw";
        repsInput.style.width = "12vw";
        repsInput.style.height = "6vw";
        repsInput.style.borderRadius = "3vw";

        SetsAndRepsText.style.top = `${canvas.height - unit * 0.4375}px`;
        SetsAndRepsText.style.left = `calc(50vw + ${unit * 1.25 * 0.75}px)`;
        SetsAndRepsText.style.fontSize = "4vw";
    } else {
        /* for not phone */
        /* title screen */
        titleText.style.fontSize = "3vw";

        inhaleTimeText.style.top = "calc(40vh - 1.5vw)";
        inhaleTimeText.style.fontSize = "1.5vw";

        exhaleTimeText.style.top = "calc(40vh - 1.5vw)";
        exhaleTimeText.style.fontSize = "1.5vw";

        inhaleTimeInput.style.top = "calc(40vh + 1.5vw)";
        inhaleTimeInput.style.fontSize = "1.5vw";
        inhaleTimeInput.style.width = "6vw";
        inhaleTimeInput.style.height = "3vw";
        inhaleTimeInput.style.borderRadius = "3vw";

        exhaleTimeInput.style.top = "calc(40vh + 1.5vw)";
        exhaleTimeInput.style.fontSize = "1.5vw";
        exhaleTimeInput.style.width = "6vw";
        exhaleTimeInput.style.height = "3vw";
        exhaleTimeInput.style.borderRadius = "1.5vw";

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

        setsText.style.top = `calc(${canvas.height - unit * 0.4375}px - 1.125vw)`;
        setsText.style.left = `calc(50vw - ${unit * 1.25 * 0.75}px)`;
        setsText.style.fontSize = "1.125vw";

        repsText.style.top = `calc(${canvas.height - unit * 0.4375}px - 1.125vw)`;
        repsText.style.fontSize = "1.125vw";

        setsInput.style.top = `calc(${canvas.height - unit * 0.4375}px + 1.125vw)`;
        setsInput.style.left = `calc(50vw - ${unit * 1.25 * 0.75}px)`;
        setsInput.style.fontSize = "1.125vw";
        setsInput.style.width = "4.5vw";
        setsInput.style.height = "2.25vw";
        setsInput.style.borderRadius = "1.125vw";

        repsInput.style.top = `calc(${canvas.height - unit * 0.4375}px + 1.125vw)`;
        repsInput.style.fontSize = "1.125vw";
        repsInput.style.width = "4.5vw";
        repsInput.style.height = "2.25vw";
        repsInput.style.borderRadius = "1.125vw";

        SetsAndRepsText.style.top = `${canvas.height - unit * 0.4375}px`;
        SetsAndRepsText.style.left = `calc(50vw + ${unit * 1.25 * 0.75}px)`;
        SetsAndRepsText.style.fontSize = "1.5vw";
    }

    /* set visibility of UI */
    if (isStarted) {
        /* started */
        /* title screen */
        titleText.style.visibility = "hidden";

        inhaleTimeText.style.visibility = "hidden";
        exhaleTimeText.style.visibility = "hidden";
        inhaleTimeInput.style.visibility = "hidden";
        exhaleTimeInput.style.visibility = "hidden";

        volumeText.style.visibility = "hidden";
        volumeInput.style.visibility = "hidden";

        startButton.style.visibility = "hidden";

        /* main screen */
        stopButton.style.visibility = "visible";

        setsText.style.visibility = "visible";
        repsText.style.visibility = "visible";
        setsInput.style.visibility = "visible";
        repsInput.style.visibility = "visible";
        SetsAndRepsText.style.visibility = "visible";

        setsText.style.color = "black";
        repsText.style.color = "black";
    } else {
        /* stopped */
        /* title screen */
        titleText.style.visibility = "visible";

        inhaleTimeText.style.visibility = "visible";
        exhaleTimeText.style.visibility = "visible";
        inhaleTimeInput.style.visibility = "visible";
        exhaleTimeInput.style.visibility = "visible";

        volumeText.style.visibility = "visible";
        volumeInput.style.visibility = "visible";
    
        startButton.style.visibility = "visible";
    
        /* main screen */
        stopButton.style.visibility = "hidden";

        setsText.style.visibility = "hidden";
        repsText.style.visibility = "hidden";
        setsInput.style.visibility = "hidden";
        repsInput.style.visibility = "hidden";
        SetsAndRepsText.style.visibility = "hidden";

        titleText.style.color = "black";

        inhaleTimeText.style.color = "black";
        exhaleTimeText.style.color = "black";
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

    ctx.fillText(`inhaleTime : ${inhaleTime}`, 10, 420);
    ctx.fillText(`exhaleTime : ${exhaleTime}`, 10, 440);
    ctx.fillText(`setSets : ${setSets}`, 10, 460);
    ctx.fillText(`setReps : ${setReps}`, 10, 480);

    ctx.fillText(`doneSets : ${doneSets}`, 10, 520);
    ctx.fillText(`doneReps : ${doneReps}`, 10, 540);

    if (circleObj[0] !== undefined) {
        ctx.fillText(`circleObj[0].x : ${circleObj[0].x}`, 10, 580);
        ctx.fillText(`circleObj[0].y : ${circleObj[0].y}`, 10, 600);
        ctx.fillText(`circleObj[0].radius : ${circleObj[0].radius}`, 10, 620);
        ctx.fillText(`circleObj[0].alpha : ${circleObj[0].alpha}`, 10, 640);
    }

    ctx.fillText(`sfx.volume : ${sfx.volume}`, 10, 680);

    ctx.fillText(`sfxCircleDirection : ${sfxCircleDirection}`, 10, 720);
}