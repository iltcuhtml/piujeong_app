// /**
// *for get FPS value
// */
// function getFPS() {
//     if (Date.now() <= dateBefore + 1000) {
//         FPS_Counter++;
//     } else {
//         FPS = FPS_Counter;

//         dateBefore = Date.now();
//         FPS_Counter = 0;
//     }
// }

// /**
// *for drawing text
// */
// function drawText(text) {
//     if (document.body.style.backgroundColor === "skyblue") {
//         ctx.fillStyle = "white";
//     } else {    
//         ctx.fillStyle = "gray";
//     }
        
//     ctx.font = "64px Arial";
//     ctx.textAlign = "center";
//     ctx.fillText(text, canvas.width / 2, canvas.height / 2);
// }

/**
*for showing title screen
*/
function titleScreen() {
    // allTimeInput.oninput = () => {
    //     inTimeInput.value = allTimeInput.value;
    //     exTimeInput.value = allTimeInput.value;
    // }

    // backgroundColor.oninput = () => {
    //     document.body.style.backgroundColor = backgroundColor.value;
    // }

    startButton.onclick = () => {
        if (parseInt(inTimeInput.value) > 0 && parseInt(exTimeInput.value) > 0) {
            startTime = timeStamp;

            inTime = parseInt(inTimeInput.value) * 1000;
            exTime = parseInt(exTimeInput.value) * 1000;

            circleObj.push(new circle);

            isStarted = true;
        }
    }
}

/**
*for showing main screen
*/
function mainScreen() {    
    // if (elapsed <= inTime) {
    //     drawText("Breathe In");
    // } else {
    //     drawText("Breathe Out");
    // }

    ctx.fillStyle = "#7fff00";

    ctx.fillRect(canvas.width * 0.5 - unit * 1.25, unit * 0.75, unit * 2.5, unit * 0.25);
    ctx.fillRect(canvas.width * 0.5 - unit * 1.25, canvas.height - unit, unit * 2.5, unit * 0.25);

    for (let i = 0; i < circleObj.length; i++) {
        ctx.globalAlpha = circleObj[i].alpha;
            
        circleObj[i].draw();
        circleObj[i].move();

        // circleObj[i].alpha -= 0.01;

        if (circleObj[i].alpha <= 0) {
            circleObj.splice(i, 1);
        }
    }
            
    ctx.globalAlpha = 1;

    stopButton.onclick = () => {
        circleObj = [];
        
        isStarted = false;
    }
}

/**
*for controling css
*/
function style() {
    if (canvas.width < canvas.height) {
        inTimeSet.style.fontSize = "4vw";
        exTimeSet.style.fontSize = "4vw";

        inTimeInput.style.top = "calc(30vh + 8vw)";
        inTimeInput.style.fontSize = "4vw";
        inTimeInput.style.width = "16vw";
        inTimeInput.style.height = "8vw";
        inTimeInput.style.borderRadius = "4vw";

        exTimeInput.style.top = "calc(30vh + 8vw)";
        exTimeInput.style.fontSize = "4vw";
        exTimeInput.style.width = "16vw";
        exTimeInput.style.height = "8vw";
        exTimeInput.style.borderRadius = "4vw";

        startButton.style.fontSize = "8vw";
        startButton.style.width = "32vw";
        startButton.style.height = "16vw";
        startButton.style.borderRadius = "8vw";

        stopButton.style.fontSize = "3vw";
        stopButton.style.width = "12vw";
        stopButton.style.height = "6vw";
        stopButton.style.borderRadius = "3vw";
    } else {
        inTimeSet.style.fontSize = "2vw";
        exTimeSet.style.fontSize = "2vw";

        inTimeInput.style.top = "calc(30vh + 4vw)";
        inTimeInput.style.fontSize = "2vw";
        inTimeInput.style.width = "8vw";
        inTimeInput.style.height = "4vw";
        inTimeInput.style.borderRadius = "4vw";

        exTimeInput.style.top = "calc(30vh + 4vw)";
        exTimeInput.style.fontSize = "2vw";
        exTimeInput.style.width = "8vw";
        exTimeInput.style.height = "4vw";
        exTimeInput.style.borderRadius = "2vw";

        startButton.style.fontSize = "4vw";
        startButton.style.width = "16vw";
        startButton.style.height = "8vw";
        startButton.style.borderRadius = "4vw";

        stopButton.style.fontSize = "1.5vw";
        stopButton.style.width = "6vw";
        stopButton.style.height = "3vw";
        stopButton.style.borderRadius = "1.5vw";
    }

    if (isStarted) {
        // allTimeSet.style.visibility = "hidden";
        inTimeSet.style.visibility = "hidden";
        exTimeSet.style.visibility = "hidden";

        // allTimeInput.style.visibility = "hidden";
        inTimeInput.style.visibility = "hidden";
        exTimeInput.style.visibility = "hidden";

        // backgroundColorSetText.style.visibility = "hidden";
        // backgroundColor.style.visibility = "hidden";

        startButton.style.visibility = "hidden";

        stopButton.style.visibility = "visible";
    } else {
        // allTimeSet.style.visibility = "visible";
        inTimeSet.style.visibility = "visible";
        exTimeSet.style.visibility = "visible";
    
        // allTimeInput.style.visibility = "visible";
        inTimeInput.style.visibility = "visible";
        exTimeInput.style.visibility = "visible";
    
        // backgroundColorSetText.style.visibility = "visible";
        // backgroundColor.style.visibility = "visible";
    
        startButton.style.visibility = "visible";
    
        stopButton.style.visibility = "hidden";
    
        if (document.body.style.backgroundColor === "skyblue") {    
            // allTimeSet.style.color = "white";
            inTimeSet.style.color = "white";
            exTimeSet.style.color = "white";
    
            // backgroundColorSetText.style.color = "white";
        } else {    
            // allTimeSet.style.color = "black";
            inTimeSet.style.color = "black";
            exTimeSet.style.color = "black";
    
            // backgroundColorSetText.style.color = "black";
        }
    }
}

/**
*for debugging
*/
function debug() {
    ctx.font = "16px Arial";

    if (document.body.style.backgroundColor === "skyblue") {
        ctx.fillStyle = "white";
    } else {    
        ctx.fillStyle = "black";
    }

    ctx.textAlign = "start";
    
    ctx.fillText(`Canvas Width : ${canvas.width}`, 10, 200);
    ctx.fillText(`Canvas Height : ${canvas.height}`, 10, 250);

    ctx.fillText(`timeStamp : ${timeStamp}`, 10, 300);
    ctx.fillText(`startTime : ${startTime}`, 10, 350);
    ctx.fillText(`elapsed : ${elapsed}`, 10, 400);

    ctx.fillText(`isStarted : ${isStarted}`, 10, 450);

    ctx.fillText(`inTime : ${inTime}`, 10, 500);
    ctx.fillText(`exTime : ${exTime}`, 10, 550);
}