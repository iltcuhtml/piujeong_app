/**
*main function
*/
function main() {
    getFPS();               // set FPS

    if (FPS !== -1) {
        draw();             // draw the circle if FPS is set
    }

    if (debugMod) {
        debug();            // show debug info if debugMod is on
    }

    requestAnimationFrame(main);
}

loadImage();
main();