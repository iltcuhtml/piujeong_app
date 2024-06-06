const FPS  = getFPS(); // set FPS

function main() {
    console.log(getFPS());

    if (debugMod) {
        debug();
    }

    requestAnimationFrame(main);
}

console.log(FPS);
main();