
function getFPS() {
    let FPS = 0;
    let dateBefore = Date.now();

    while (Date.now === dateBefore + 1000) {
        FPS++;
    }

    console.log(dateBefore);
    console.log(Date.now());

    return FPS;
}

console.log(getFPS());