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
        if (parseFloat(inhaleTimeInput.value) > 0) {
            inhaleTime = parseFloat(inhaleTimeInput.value) * 1000;
        }

        inhaleTimeInput.value = inhaleTime / 1000;
    }

    exhaleTimeInput.onchange = () => {
        if (parseFloat(exhaleTimeInput.value) > 0) {
            exhaleTime = parseFloat(exhaleTimeInput.value) * 1000;
        }

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
    if (textLanguage === "Kr") {
        insightText.innerHTML = `
            <h1>&#60;명상의 기본 원리&#62;</h1>
            <hr>
            <h2>제3의 길</h2>
            <p>
                우리는 어떤 문제상황에서 화가 일어납니다.<br>
                화를 일으킨 좌절된 욕구를 알아차리기도 전에<br>
                화라는 감정에 물이 듭니다.<br>
                그리고 화를 내느냐, 화를 참느냐는<br>
                갈림길에 섭니다.<br>
                그러나 화를 내면 상대가 상처를 받을 것이고,<br>
                화를 참으면 내 상처가  깊어집니다.<br>
                그런데 여기 제 3의 길이 있습니다.<br>
                갑자기 내리는 소나기를 피해 집 처마에 들어가듯이<br>
                들숨, 날숨의 호흡을 통해 괴로움의 비를 피할 수 있습니다.<br>
                처마에 서서 내리는 비를 바라보는 것처럼<br>
                호흡을 통해 괴로움 밖에서 괴로움을 관찰할 수 있습니다.<br>
                이런 이치를 알고 평소에 호흡명상을 숙달해두면<br>
                우리 몸이 자동으로 기억해 괴로운 감정에 대처합니다.<br>
            </p>
            <hr>
            <h2>감각과 생각</h2>
            <p>
                ‘괴롭다’라는 것은 지금 당신이 뭔가 ‘괴로운 생각’ 속에<br>
                빠져 있다는 뜻입니다.<br>
                이때 당신의 ‘주의(attention)’를<br>
                신체의 감각으로 데려와 보세요.<br>
                마음이 한결 편안해 질 겁니다.<br>
                감각의 집중을 통해<br>
                괴로운 생각에서 빠져나왔기 때문입니다.<br>
                들숨, 날숨이 닿을 때마다 느껴지는 코의 감각에<br>
                온전히 주의를 집중해 보세요.<br>
                당신은 분명 마음의 평화를 얻게 될 것입니다.<br>
            </p>
            <hr>
            <h2>감정, 몸에 대한 해석</h2>
            <p>
                감정은 어떤 자극에 대한 자동 반응입니다.<br>
                그래서 쉽게 통제할 수 없습니다.<br>
                그러나 실은 이 감정은<br>
                신체의 미묘한 움직임에 대한 자동 해석입니다.<br>
                예를 들어 극단의 불안과 공포를 주는 공황발작 같은 경우에<br>
                심장을 천천히 뛰게 하는 약으로 불안과 공포를 줄여준다고 합니다.<br>
                진정된 몸에 대한 ‘자동 해석’으로<br>
                편안한 감정이란 ‘반응’이 나타난 것입니다.<br>
                따라서 바른 자세를 하고,<br>
                일정한 간격으로 들숨과 날숨을 반복하면,<br>
                몸과 마음은 저절로 편안해집니다.<br>
            </p>
            <hr>
            <b>GENERAL DIRECTOR : KIM GWON TAE</b><br>
            <b>SYSTEM ENGINEER : JO YE CHAN</b><br>
            <b>GRAPHIC DESIGNER : PARK JIN SOO</b><br>
            <b>TO INQUIRE : <a href="mailto:munsachul@naver.com">munsachul@naver.com</a></b>
        `;
    }

    insightBackButton.onclick = () => {
        screenState = "title";

        insightText.innerHTML = `
            Not Loaded
        `;
    }
}

/**
 *for showing main screen
 */
function mainScreen() {
    resumeButton.onclick = () => {
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
        if (parseInt(setsInput.value) > doneSets) {
            setSets = parseInt(setsInput.value);
        }
        
        setsInput.value = setSets;
    }

    repsInput.onchange = () => {
        if (parseInt(repsInput.value) > doneReps) {
            setReps = parseInt(repsInput.value);
        }
        
        repsInput.value = setReps;
    }

    if (screenState === "pause") {
        startTime = timeStamp - timeDifference;
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

    /* update circle */
    for (let i = 0; i < circleObj.length; i++) {
        ctx.globalAlpha = circleObj[i].alpha;

        circleObj[i].draw();
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
            explainText.style.fontSize = "3vw";
            explainText.style.width = "60vw";
        } else if (textLanguage == "En") {
            explainText.style.transform = "translate(-50%, -50%)";
            explainText.style.fontSize = "3vw";
            explainText.style.width = "82.5vw";
        }

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
        insightBackButton.style.top = "7vw";
        insightBackButton.style.left = "75vw";
        insightBackButton.style.fontSize = "4.5vw";
        insightBackButton.style.width = "12vw";
        insightBackButton.style.height = "6vw";
        insightBackButton.style.borderRadius = "1vw";

        if (textLanguage === "Kr") {
            insightText.style.transform = "translate(-50%, 0%)";
            insightText.style.fontSize = "2vw";
            insightText.style.width = "62.5vw";
        }

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
        /* not for phone */
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
        insightBackButton.style.top = "2.5vw";
        insightBackButton.style.left = "59.375vw";
        insightBackButton.style.fontSize = "1.6875vw";
        insightBackButton.style.width = "4.5vw";
        insightBackButton.style.height = "2.25vw";
        insightBackButton.style.borderRadius = "0.375vw";
        
        if (textLanguage === "Kr") {
            insightText.style.transform = "translate(-50%, 0%)";
            insightText.style.fontSize = "0.75vw";
            insightText.style.width = "25vw";
        }

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