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
//         ctx.fillStyle = "whitesmoke";
//     } else {    
//         ctx.fillStyle = "gray";
//     }
        
//     ctx.font = "64px Arial";
//     ctx.textAlign = "center";
//     ctx.fillText(text, canvas.width / 2, canvas.height / 2);
// }

function drawRotatedCircle(degrees) {
    var w = image.width * scale;
    var h = image.height * scale;

    ctx.save();
    
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(degrees * Math.PI / 180);
    
    ctx.drawImage(circleImg, 0, 0, 1, 1, 
        this.x - this.radius, this.y - this.radius, 
        this.radius * 2, this.radius * 2);
    
    ctx.restore();
}

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

        playLev = 1;
        sfx.volume = parseInt(volumeInput.value) / 100;
    }
}

/**
*for showing main screen
*/
function mainScreen() {
    if (playLev === 1 && elapsed <= inTime - 100) {
        sfx.pause();
        sfx.currentTime = 0;
        
        sfx.play();

        playLev = 2;
    } else if (playLev === 2 && 
               inTime - 100 < elapsed && elapsed <= inTime + exTime - 100) {
        sfx.pause();
        sfx.currentTime = 0;
        
        sfx.play();

        playLev = 1;
    }

    // if (elapsed <= inTime) {
    //     drawText("Breathe In");
    // } else {
    //     drawText("Breathe Out");
    // }

    ctx.fillStyle = "#60ff60";

    ctx.fillRect(canvas.width * 0.5 - unit * 1.25, unit * 0.75, unit * 2.5, unit * 0.25);
    ctx.fillRect(canvas.width * 0.5 - unit * 1.25, canvas.height - unit, unit * 2.5, unit * 0.25);
    
    // circleObj.push(new circle);

    for (let i = 0; i < circleObj.length; i++) {
        ctx.globalAlpha = circleObj[i].alpha;

        // ctx.translate(150, 75);
        // ctx.rotate(Math.PI / 2);
        // ctx.translate(-150, -75);

            
        circleObj[i].draw();
        circleObj[i].move();

        // circleObj[i].alpha -= 1 / 16;
        // circleObj[i].radius -= unit / 64;

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
        title.style.fontSize = "8vw";

        inTimeSet.style.top = "calc(40vh - 4vw)";
        inTimeSet.style.fontSize = "4vw";

        exTimeSet.style.top = "calc(40vh - 4vw)";
        exTimeSet.style.fontSize = "4vw";

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

        volumeSet.style.top = "calc(60vh - 2vw)";
        volumeSet.style.fontSize = "4vw";

        volumeInput.style.top = "calc(60vh + 2vw)";
        volumeInput.style.fontSize = "4vw";
        volumeInput.style.borderRadius = "4vw";

        startButton.style.fontSize = "8vw";
        startButton.style.width = "32vw";
        startButton.style.height = "16vw";
        startButton.style.borderRadius = "8vw";

        stopButton.style.fontSize = "3vw";
        stopButton.style.width = "12vw";
        stopButton.style.height = "6vw";
        stopButton.style.borderRadius = "3vw";
    } else {
        title.style.fontSize = "4vw";

        inTimeSet.style.top = "calc(40vh - 2vw)";
        inTimeSet.style.fontSize = "2vw";

        exTimeSet.style.top = "calc(40vh - 2vw)";
        exTimeSet.style.fontSize = "2vw";

        inTimeInput.style.top = "calc(40vh + 2vw)";
        inTimeInput.style.fontSize = "2vw";
        inTimeInput.style.width = "8vw";
        inTimeInput.style.height = "4vw";
        inTimeInput.style.borderRadius = "4vw";

        exTimeInput.style.top = "calc(40vh + 2vw)";
        exTimeInput.style.fontSize = "2vw";
        exTimeInput.style.width = "8vw";
        exTimeInput.style.height = "4vw";
        exTimeInput.style.borderRadius = "2vw";

        volumeSet.style.top = "calc(60vh - 1vw)";
        volumeSet.style.fontSize = "2vw";

        volumeInput.style.top = "calc(60vh + 1vw)";
        volumeInput.style.fontSize = "2vw";
        volumeInput.style.borderRadius = "2vw";

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
        title.style.visibility = "hidden";

        // allTimeSet.style.visibility = "hidden";
        inTimeSet.style.visibility = "hidden";
        exTimeSet.style.visibility = "hidden";

        // allTimeInput.style.visibility = "hidden";
        inTimeInput.style.visibility = "hidden";
        exTimeInput.style.visibility = "hidden";

        // backgroundColorSetText.style.visibility = "hidden";
        // backgroundColor.style.visibility = "hidden";

        volumeSet.style.visibility = "hidden";

        volumeInput.style.visibility = "hidden";

        startButton.style.visibility = "hidden";

        stopButton.style.visibility = "visible";
    } else {
        title.style.visibility = "visible";

        // allTimeSet.style.visibility = "visible";
        inTimeSet.style.visibility = "visible";
        exTimeSet.style.visibility = "visible";
    
        // allTimeInput.style.visibility = "visible";
        inTimeInput.style.visibility = "visible";
        exTimeInput.style.visibility = "visible";
    
        // backgroundColorSetText.style.visibility = "visible";
        // backgroundColor.style.visibility = "visible";

        volumeSet.style.visibility = "visible";

        volumeInput.style.visibility = "visible";
    
        startButton.style.visibility = "visible";
    
        stopButton.style.visibility = "hidden";
    
        if (document.body.style.backgroundColor === "skyblue") {    
            title.style.color = "whitesmoke";
            
            // allTimeSet.style.color = "whitesmoke";
            inTimeSet.style.color = "whitesmoke";
            exTimeSet.style.color = "whitesmoke";
    
            // backgroundColorSetText.style.color = "whitesmoke";
        } else {
            title.style.color = "black";

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
        ctx.fillStyle = "whitesmoke";
    } else {    
        ctx.fillStyle = "black";
    }

    ctx.textAlign = "start";
    
    ctx.fillText(`Canvas Width : ${canvas.width}`, 10, 200);
    ctx.fillText(`Canvas Height : ${canvas.height}`, 10, 220);

    ctx.fillText(`timeStamp : ${timeStamp}`, 10, 260);
    ctx.fillText(`startTime : ${startTime}`, 10, 280);
    ctx.fillText(`elapsed : ${elapsed}`, 10, 300);

    ctx.fillText(`isStarted : ${isStarted}`, 10, 340);

    ctx.fillText(`inTime : ${inTime}`, 10, 380);
    ctx.fillText(`exTime : ${exTime}`, 10, 400);

    if (circleObj[0] !== undefined) {
        ctx.fillText(`circleObj[0].x : ${circleObj[0].x}`, 10, 440);
        ctx.fillText(`circleObj[0].y : ${circleObj[0].y}`, 10, 460);
        ctx.fillText(`circleObj[0].radius : ${circleObj[0].radius}`, 10, 480);
        ctx.fillText(`circleObj[0].alpha : ${circleObj[0].alpha}`, 10, 500);
    }

    ctx.fillText(`sfx.volume : ${sfx.volume}`, 10, 540);

    ctx.fillText(`playLev : ${playLev}`, 10, 580);
}