const FPS = getFPS();

/**
*main function
*/
function main() {
    console.log(getFPS());

    if (debugMod) {
        debug();
    }

    requestAnimationFrame(main);
}

main();