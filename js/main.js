/**
*main function
*/
function main() {
    ctx.reset();
    
    getFPS();

    if (FPS !== -1) {
        if (isStarted) {
            label.style.visibility = "hidden";
            timeInput.style.visibility = "hidden";
            startButton.style.visibility = "hidden";
            stopButton.style.visibility = "visible";

            if (circleObj.isMovingUP === 1) {
                drawText("Breathe In");
            } else {
                drawText("Breathe Out");
            }

            ctx.globalAlpha = circleObj[1].alpha;
            circleObj[1].draw();
            circleObj[1].move();
            circleObj[1].setDirection();

            stopButton.onclick = () => {
                circleObj = [];
        
                isStarted = false;
            }
        } else {
            label.style.visibility = "visible";
            timeInput.style.visibility = "visible";
            startButton.style.visibility = "visible";
            stopButton.style.visibility = "hidden";

            startButton.onclick = () => {
                if (parseInt(timeInput.value) > 0) {
                    cycle = parseInt(timeInput.value);

                    isStarted = true;

                    circleObj.push(new circle);
                }
            }
        }        
    }

    if (debugMod) {
        debug();
    }

    requestAnimationFrame(main);
}

loadCircleImage();

main();