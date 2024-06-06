/**
*main function
*/
function main() {
    ctx.reset();
    
    getFPS();

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

        ctx.drawImage(circleImage, 0, 0, 1, 1, circle.x, circle.y, circle.size, circle.size);
    }

    if (debugMod) {
        debug();
    }

    requestAnimationFrame(main);
}

loadCircleImage();
main();