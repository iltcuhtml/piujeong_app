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

            circleObj.draw();
            circleObj.move();
            circleObj.setDirection();

            stopButton.onclick = () => {
                circleObj = new circle;
        
                isStarted = false;
            }
        } else {
            label.style.visibility = "visible";
            timeInput.style.visibility = "visible";
            startButton.style.visibility = "visible";
            stopButton.style.visibility = "hidden";

            startButton.onclick = () => {
                if (!isStarted) {
                    cycle = parseInt(timeInput.value);

                    isStarted = true;
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