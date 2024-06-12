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
    timeSetText.style.visibility = "visible";

    allTimeSet.style.visibility = "visible";
    upTimeSet.style.visibility = "visible";
    downTimeSet.style.visibility = "visible";

    allTimeInput.style.visibility = "visible";
    upTimeInput.style.visibility = "visible";
    downTimeInput.style.visibility = "visible";

    backgroundColorSetText.style.visibility = "visible";
    backgroundColor.style.visibility = "visible";

    startButton.style.visibility = "visible";

    stopButton.style.visibility = "hidden";

    if (document.body.style.backgroundColor === "skyblue") {
        timeSetText.style.color = "white";

        allTimeSet.style.color = "white";
        upTimeSet.style.color = "white";
        downTimeSet.style.color = "white";

        backgroundColorSetText.style.color = "white";
    } else {
        timeSetText.style.color = "black";

        allTimeSet.style.color = "black";
        upTimeSet.style.color = "black";
        downTimeSet.style.color = "black";

        backgroundColorSetText.style.color = "black";
    }

    allTimeInput.oninput = () => {
        upTimeInput.value = allTimeInput.value;
        downTimeInput.value = allTimeInput.value;
    }

    backgroundColor.oninput = () => {
        document.body.style.backgroundColor = backgroundColor.value;
    }

    startButton.onclick = () => {
        if (parseInt(upTimeInput.value) > 0 && parseInt(downTimeInput.value) > 0) {
            startTime = timeStamp;

            upTime = parseInt(upTimeInput.value) * 1000;
            downTime = parseInt(downTimeInput.value) * 1000;

            circleObj.push(new circle);

            isStarted = true;
        }
    }
}

/**
*for showing main screen
*/
function mainScreen() {
    timeSetText.style.visibility = "hidden";

    allTimeSet.style.visibility = "hidden";
    upTimeSet.style.visibility = "hidden";
    downTimeSet.style.visibility = "hidden";

    allTimeInput.style.visibility = "hidden";
    upTimeInput.style.visibility = "hidden";
    downTimeInput.style.visibility = "hidden";

    backgroundColorSetText.style.visibility = "hidden";
    backgroundColor.style.visibility = "hidden";

    startButton.style.visibility = "hidden";

    stopButton.style.visibility = "visible";
    
    // if (elapsed <= upTime) {
    //     drawText("Breathe In");
    // } else {
    //     drawText("Breathe Out");
    // }

    ctx.fillStyle = "#7fff00";

    ctx.fillRect(gap * 1.5, gap - canvas.height / 128, canvas.width - gap * 3, canvas.height / 128);
    ctx.fillRect(gap, canvas.height - gap, canvas.width - gap * 3, canvas.height / 128);

    for (let i = 0; i < circleObj.length; i++) {

        ctx.globalAlpha = circleObj[i].alpha;
            
        circleObj[i].draw();
        circleObj[i].move();

        circleObj[i].alpha -= 0.01;

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

    ctx.fillText(`upTime : ${upTime}`, 10, 500);
    ctx.fillText(`downTime : ${downTime}`, 10, 550);
}