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
 * for playing sfx
 */
function playSFX(sfxType) {
    if (sfxType === "Hit") {
        if (sfxHitNum === 1) {
            sfxHit1.pause();
            sfxHit1.currentTime = 0;
            
            sfxHit1.play();
        } else if (sfxHitNum === 2) {
            sfxHit2.pause();
            sfxHit2.currentTime = 0;
            
            sfxHit2.play();
        }
    } else if (sfxType === "End") {
        if (sfxEndNum === 1) {
            sfxEnd1.pause();
            sfxEnd1.currentTime = 0;

            sfxEnd1.play();
        }
    }
}

/**
 *for showing title screen
 */
function titleScreen() {
    if (textLanguage === "Kr") {
        explainText.innerHTML = `
        <b>
            소나기를 피해 정자에 들어가듯이<br>
            호흡명상을 통해 괴로움의 비를 피한다.<br>
            <br>
            정자에 서서 내리는 비를 바라보는 것처럼<br>
            괴로움 밖에서 고요히 괴로움을 관찰하라.<br>
            <br>
            그대는 곧 자유가 될 것이다!
        </b>
        `;
    } else if (textLanguage === "En") {
        explainText.innerHTML = `
        <b>
            Like going into the pavilion to escape the rain, <br>
            avoid the rain of distress through breathing meditation.<br>
            <br>
            Like standing in the pavilion watching the rain, <br>
            observe the suffering silently outside the suffering.<br>
            <br>
            You will soon be free!
        </b>
        `;
    }

    inhaleTimeInput.onchange = () => {
        /* check if inhaleTimeInput's value is bigger than 0 */
        if (parseFloat(inhaleTimeInput.value) > 0) {
            /* set the inhaleTime as inhaleTimeInput's value */
            inhaleTime = parseFloat(inhaleTimeInput.value) * 1000;
        }
        
        /* reset the inhaleTimeInput's value as inhaleTime */
        inhaleTimeInput.value = inhaleTime / 1000;
    }

    exhaleTimeInput.onchange = () => {
        /* check if exhaleTimeInput's value is bigger than 0 */
        if (parseFloat(exhaleTimeInput.value) > 0) {
            /* set the exhaleTime as exhaleTimeInput's value */
            exhaleTime = parseFloat(exhaleTimeInput.value) * 1000;
        }
        
        /* reset the exhaleTimeInput's value as exhaleTime */
        exhaleTimeInput.value = exhaleTime / 1000;
    }

    insightButton.onclick = () => {
        screenState = "insight";
    }

    startButton.onclick = () => {
        timeDifference = 0;
        screenState = "start";
        sfxCircleDirection = "down";

        circleObj.push(new circle);
    }
}

/**
 *for showing insight screen
 */
function insightScreen() {
    insightBackButton.onclick = () => {
        screenState = "title";
    }
}

/**
 *for showing main screen
 */
function mainScreen() {
    resumeButton.onclick = () => {
        startTime = timeStamp - timeDifference;

        if (screenState === "end") {
            sfxEnd1.pause();
            sfxEnd1.currentTime = 0;

            startTime = timeStamp;

            doneSets = 0;
            doneReps = 0;
        }

        screenState = "resume";
    }
    
    setsInput.onchange = () => {
        /* check if setsInput's value (INT) is bigger than doneSets */
        if (parseInt(setsInput.value) > doneSets) {
            /* set the setSets as setsInput's value (INT) */
            setSets = parseInt(setsInput.value);
        }

        /* reset the setsInput's value as setSets */
        setsInput.value = setSets;
    }

    repsInput.onchange = () => {
        /* check if repsInput's value (INT) is bigger than doneReps */
        if (parseInt(repsInput.value) > doneReps) {
            /* set the setReps as repsInput's value (INT) */
            setReps = parseInt(repsInput.value);
        }

        /* reset the repsInput's value as setReps */
        repsInput.value = setReps;
    }

    /* play sfx */
    if (doneSets >= setSets) {
        if (screenState !== "end") {
            playSFX("End");
        }

        screenState = "end";

        sfxCircleDirection = "down"
    } else if (screenState === "resume") {
        if (sfxCircleDirection === "down" && elapsed <= inhaleTime - 250) {
            playSFX("Hit");
    
            sfxCircleDirection = "up";
        } else if (sfxCircleDirection === "up" && 
                   inhaleTime - 100 < elapsed && elapsed <= inhaleTime + exhaleTime - 250) {
            playSFX("Hit");
    
            sfxCircleDirection = "down";
        }
    }    

    /* draw board */
    boardWidth = unit * 2.5;
    boardHeight = unit * 0.25;
    boardHight = unit;

    if (!isSVG) {
        ctx.fillStyle = "#76CBE5";
    
        ctx.fillRect(canvas.width / 2 - boardWidth / 2, boardHight, boardWidth, boardHeight);
        ctx.fillRect(canvas.width / 2 - boardWidth / 2, canvas.height - boardHight - boardHeight, boardWidth, boardHeight);
    } else {
        drawRotatedImage(boardImg, 0, 0, boardImg_X_Size, boardImg_Y_Size,
                         canvas.width / 2, boardHight + boardHeight / 2,
                         boardWidth, boardHeight,
                         0);

        drawRotatedImage(boardImg, 0, 0, boardImg_X_Size, boardImg_Y_Size,
                         canvas.width / 2, canvas.height - boardHight - boardHeight / 2,
                         boardWidth, boardHeight,
                         Math.PI);
    }

    // TODO : fix circle rotation bug when it pauses

    /* update circle */
    for (let i = 0; i < circleObj.length; i++) {
        ctx.globalAlpha = circleObj[i].alpha;

        circleObj[i].draw();
        
        /* check if sets are NOT done */
        circleObj[i].x = canvas.width / 2;

        circleObj[i].radius = unit / 4;

        if (screenState === "resume") {
            circleObj[i].move();
        } else if (screenState === "start" || screenState === "end") {
            startTime = timeStamp;

            circleObj[i].y = canvas.height - boardHight - boardHeight - circleObj[i].radius;
        }

        if (circleObj[i].alpha <= 0) {
            circleObj.splice(i, 1);
        }
    }

    ctx.globalAlpha = 1;

    /* set SetsAndRepsText's text as "'doneSets' Sets | Enter | 'doneReps' Reps" */
    SetsAndRepsText.innerText = `${doneSets} Sets\n${doneReps} Reps`;

    pauseButton.onclick = () => {
        timeDifference = timeStamp - startTime;

        screenState = "pause";
    }

    mainBackButton.onclick = () => {
        circleObj = [];

        screenState = "title";
    
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
        titleTextSub.style.fontSize = "4vw";

        if (textLanguage === "Kr") {
            explainText.style.transform = "translate(-45%, -50%)";
            explainText.style.width = "60vw";
        } else if (textLanguage == "En") {
            explainText.style.transform = "translate(-50%, -50%)";
            explainText.style.width = "82.5vw";
        }

        explainText.style.fontSize = "3vw";

        inhaleTimeText.style.top = "calc(55vh - 4vw)";
        inhaleTimeText.style.fontSize = "4vw";

        exhaleTimeText.style.top = "calc(55vh - 4vw)";
        exhaleTimeText.style.fontSize = "4vw";

        inhaleTimeInput.style.top = "calc(55vh + 4vw)";
        inhaleTimeInput.style.fontSize = "4vw";
        inhaleTimeInput.style.width = "16vw";
        inhaleTimeInput.style.height = "8vw";
        inhaleTimeInput.style.borderRadius = "4vw";

        exhaleTimeInput.style.top = "calc(55vh + 4vw)";
        exhaleTimeInput.style.fontSize = "4vw";
        exhaleTimeInput.style.width = "16vw";
        exhaleTimeInput.style.height = "8vw";
        exhaleTimeInput.style.borderRadius = "4vw";

        insightButton.style.top = "70vh";
        insightButton.style.fontSize = "4vw";

        startButton.style.fontSize = "6vw";
        startButton.style.width = "24vw";
        startButton.style.height = "12vw";
        startButton.style.borderRadius = "4vw";

        /* insight screen */
        insightBackButton.style.top = "8vw";
        insightBackButton.style.left = "75vw";
        insightBackButton.style.fontSize = "4.5vw";
        insightBackButton.style.width = "12vw";
        insightBackButton.style.height = "6vw";
        insightBackButton.style.borderRadius = "1vw";

        if (textLanguage === "Kr") {
            insightText.style.width = "80vw";
        }

        insightText.style.fontSize = "2.5vw";

        /* main screen */
        setsText.style.top = `calc(${boardHight * 0.5}px - 3vw)`;
        setsText.style.left = `calc(50vw - ${boardWidth / 2 * 0.75}px)`;
        setsText.style.fontSize = "3vw";

        repsText.style.top = `calc(${boardHight * 0.5}px - 3vw)`;
        repsText.style.fontSize = "3vw";

        setsInput.style.top = `calc(${boardHight * 0.5}px + 3vw)`;
        setsInput.style.left = `calc(50vw - ${boardWidth / 2 * 0.75}px)`;
        setsInput.style.fontSize = "3vw";
        setsInput.style.width = "12vw";
        setsInput.style.height = "6vw";
        setsInput.style.borderRadius = "3vw";

        repsInput.style.top = `calc(${boardHight * 0.5}px + 3vw)`;
        repsInput.style.fontSize = "3vw";
        repsInput.style.width = "12vw";
        repsInput.style.height = "6vw";
        repsInput.style.borderRadius = "3vw";

        SetsAndRepsText.style.top = `${boardHight * 0.5}px`;
        SetsAndRepsText.style.left = `calc(50vw + ${boardWidth / 2 * 0.75}px)`;
        SetsAndRepsText.style.fontSize = "4vw";
        
        resumeButton.style.top = `${canvas.height - boardHight * 0.5}px`
        resumeButton.style.left = `calc(50vw - ${boardWidth / 2 * 0.5}px)`;
        resumeButton.style.fontSize = "3vw";
        resumeButton.style.width = "12vw";
        resumeButton.style.height = "6vw";
        resumeButton.style.borderRadius = "1vw";
        
        pauseButton.style.top = `${canvas.height - boardHight * 0.5}px`
        pauseButton.style.left = `calc(50vw - ${boardWidth / 2 * 0.5}px)`;
        pauseButton.style.fontSize = "3vw";
        pauseButton.style.width = "12vw";
        pauseButton.style.height = "6vw";
        pauseButton.style.borderRadius = "1vw";

        mainBackButton.style.top = `${canvas.height - boardHight * 0.5}px`
        mainBackButton.style.left = `calc(50vw + ${boardWidth / 2 * 0.5}px)`;
        mainBackButton.style.fontSize = "4.5vw";
        mainBackButton.style.width = "12vw";
        mainBackButton.style.height = "6vw";
        mainBackButton.style.borderRadius = "1vw";
    } else {
        /* for not phone */
        /* title screen */
        titleText.style.fontSize = "3vw";
        titleTextSub.style.fontSize = "1.5vw";

        if (textLanguage === "Kr") {
            explainText.style.transform = "translate(-45%, -50%)";
            explainText.style.fontSize = "1.125vw";
            explainText.style.width = "22.5vw"
        } else if (textLanguage == "En") {
            explainText.style.transform = "translate(-50%, -50%)";
            explainText.style.fontSize = "1vw";
            explainText.style.width = "27.5vw";
        }

        inhaleTimeText.style.top = "calc(55vh - 1.5vw)";
        inhaleTimeText.style.fontSize = "1.5vw";

        exhaleTimeText.style.top = "calc(55vh - 1.5vw)";
        exhaleTimeText.style.fontSize = "1.5vw";

        inhaleTimeInput.style.top = "calc(55vh + 1.5vw)";
        inhaleTimeInput.style.fontSize = "1.5vw";
        inhaleTimeInput.style.width = "6vw";
        inhaleTimeInput.style.height = "3vw";
        inhaleTimeInput.style.borderRadius = "3vw";

        exhaleTimeInput.style.top = "calc(55vh + 1.5vw)";
        exhaleTimeInput.style.fontSize = "1.5vw";
        exhaleTimeInput.style.width = "6vw";
        exhaleTimeInput.style.height = "3vw";
        exhaleTimeInput.style.borderRadius = "1.5vw";

        insightButton.style.fontSize = "1.5vw";
        insightButton.style.borderRadius = "1.5vw";

        startButton.style.fontSize = "2.25vw";
        startButton.style.width = "9vw";
        startButton.style.height = "4.5vw";
        startButton.style.borderRadius = "1.5vw";

        /* insight screen */
        insightBackButton.style.top = "3vw";
        insightBackButton.style.left = "59.375vw";
        insightBackButton.style.fontSize = "1.6875vw";
        insightBackButton.style.width = "4.5vw";
        insightBackButton.style.height = "2.25vw";
        insightBackButton.style.borderRadius = "0.375vw";
        
        if (textLanguage === "Kr") {
            insightText.style.width = "30vw";
        }
        
        insightText.style.fontSize = "0.9375vw";

        /* main screen */
        setsText.style.top = `calc(${boardHight * 0.5}px - 1.125vw)`;
        setsText.style.left = `calc(50vw - ${boardWidth / 2 * 0.75}px)`;
        setsText.style.fontSize = "1.125vw";

        repsText.style.top = `calc(${boardHight * 0.5}px - 1.125vw)`;
        repsText.style.fontSize = "1.125vw";
        
        setsInput.style.top = `calc(${boardHight * 0.5}px + 1.125vw)`;
        setsInput.style.left = `calc(50vw - ${boardWidth / 2 * 0.75}px)`;
        setsInput.style.fontSize = "1.125vw";
        setsInput.style.width = "4.5vw";
        setsInput.style.height = "2.25vw";
        setsInput.style.borderRadius = "1.125vw";
        
        repsInput.style.top = `calc(${boardHight * 0.5}px + 1.125vw)`;
        repsInput.style.fontSize = "1.125vw";
        repsInput.style.width = "4.5vw";
        repsInput.style.height = "2.25vw";
        repsInput.style.borderRadius = "1.125vw";
        
        SetsAndRepsText.style.top = `${boardHight * 0.5}px`;
        SetsAndRepsText.style.left = `calc(50vw + ${boardWidth / 2 * 0.75}px)`;
        SetsAndRepsText.style.fontSize = "1.5vw";
        
        resumeButton.style.top = `${canvas.height - boardHight * 0.5}px`
        resumeButton.style.left = `calc(50vw - ${boardWidth / 2 * 0.5}px)`;
        resumeButton.style.fontSize = "1.125vw";
        resumeButton.style.width = "4.5vw";
        resumeButton.style.height = "2.25vw";
        resumeButton.style.borderRadius = "0.375vw";
        
        pauseButton.style.top = `${canvas.height - boardHight * 0.5}px`
        pauseButton.style.left = `calc(50vw - ${boardWidth / 2 * 0.5}px)`;
        pauseButton.style.fontSize = "1.125vw";
        pauseButton.style.width = "4.5vw";
        pauseButton.style.height = "2.25vw";
        pauseButton.style.borderRadius = "0.375vw";
        
        mainBackButton.style.top = `${canvas.height - boardHight * 0.5}px`
        mainBackButton.style.left = `calc(50vw + ${boardWidth / 2 * 0.5}px)`;
        mainBackButton.style.fontSize = "1.6875vw";
        mainBackButton.style.width = "4.5vw";
        mainBackButton.style.height = "2.25vw";
        mainBackButton.style.borderRadius = "0.375vw";
    }
    
    /* set visibility of UI */
    if (screenState !== "title" && screenState !== "insight") {
        /* started */
        /* title screen */
        titleText.style.visibility = "hidden";
        titleTextSub.style.visibility = "hidden";

        explainText.style.visibility = "hidden";

        inhaleTimeText.style.visibility = "hidden";
        exhaleTimeText.style.visibility = "hidden";
        inhaleTimeInput.style.visibility = "hidden";
        exhaleTimeInput.style.visibility = "hidden";

        insightButton.style.visibility = "hidden";

        startButton.style.visibility = "hidden";

        /* insight screen */
        insightBackButton.style.visibility = "hidden";
        insightText.style.visibility = "hidden";

        /* main screen */
        setsText.style.visibility = "visible";
        repsText.style.visibility = "visible";
        setsInput.style.visibility = "visible";
        repsInput.style.visibility = "visible";
        SetsAndRepsText.style.visibility = "visible";
        
        setsText.style.color = "black";
        repsText.style.color = "black";
        
        if (screenState === "resume") {
            resumeButton.style.visibility = "hidden";
            pauseButton.style.visibility = "visible";
        } else {
            resumeButton.style.visibility = "visible";
            pauseButton.style.visibility = "hidden";
        }

        mainBackButton.style.visibility = "visible";
    } else if (screenState === "title") {
        /* stopped */
        /* title screen */
        titleText.style.visibility = "visible";
        titleTextSub.style.visibility = "visible";
        
        explainText.style.visibility = "visible";

        inhaleTimeText.style.visibility = "visible";
        exhaleTimeText.style.visibility = "visible";
        inhaleTimeInput.style.visibility = "visible";
        exhaleTimeInput.style.visibility = "visible";

        insightButton.style.visibility = "visible";
    
        startButton.style.visibility = "visible";

        /* insight screen */
        insightBackButton.style.visibility = "hidden";
        insightText.style.visibility = "hidden";
    
        /* main screen */
        resumeButton.style.visibility = "hidden";
        pauseButton.style.visibility = "hidden";
        mainBackButton.style.visibility = "hidden";

        setsText.style.visibility = "hidden";
        repsText.style.visibility = "hidden";
        setsInput.style.visibility = "hidden";
        repsInput.style.visibility = "hidden";
        SetsAndRepsText.style.visibility = "hidden";

        titleText.style.color = "black";

        inhaleTimeText.style.color = "black";
        exhaleTimeText.style.color = "black";
    } else if (screenState === "insight") {
        /* started */
        /* title screen */
        titleText.style.visibility = "hidden";
        titleTextSub.style.visibility = "hidden";

        explainText.style.visibility = "hidden";

        inhaleTimeText.style.visibility = "hidden";
        exhaleTimeText.style.visibility = "hidden";
        inhaleTimeInput.style.visibility = "hidden";
        exhaleTimeInput.style.visibility = "hidden";

        insightButton.style.visibility = "hidden";

        startButton.style.visibility = "hidden";

        /* insight screen */
        insightBackButton.style.visibility = "visible";
        insightText.style.visibility = "visible";

        /* main screen */
        resumeButton.style.visibility = "hidden";
        pauseButton.style.visibility = "hidden";
        mainBackButton.style.visibility = "hidden";

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