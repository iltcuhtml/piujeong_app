const FPS  = getFPS();

function main() {
    console.log(getFPS());

    requestAnimationFrame(main);
}
console.log(FPS);
main();