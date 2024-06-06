const FPS = getFPS();

/**
*main function
*/
function main() {
    if (debugMod) {
        debug();
    }

    requestAnimationFrame(main);
}

main();