/**
*main function
*/
function main() {
    ctx.reset();
    
    getFPS();               // set FPS

    if (FPS !== -1) {
        if (circle.isMovingUP) {
            circle.y -= (canvas.height - gap * 2 - circle.size) / FPS / (cycle / 2);
        } else {
            circle.y += (canvas.height - gap * 2 - circle.size) / FPS / (cycle / 2);
        }

        if (circle.y + circle.size> canvas.height - gap) {
            circle.isMovingUP = true;
        } else if (circle.y < gap) {
            circle.isMovingUP = false;
        }

        draw();             // draw the circle if FPS is set
    }

    if (debugMod) {
        debug();            // show debug info if debugMod is on
    }

    requestAnimationFrame(main);
}

main();