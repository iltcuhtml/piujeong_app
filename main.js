
function getFPS() {
    let FPS = 0;
    let dateBefore = Date.now();

    while (Date.now === dateBefore + 1000) {
        FPS++;
    }

    return FPS;
}

console(getFPS());