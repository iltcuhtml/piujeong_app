/**
*main function
*/
function main() {
    getFPS();

    if (FPS !== -1) {
        draw();
    }

    if (debugMod) {
        debug();
    }

    requestAnimationFrame(main);
}

loadImages();
main();