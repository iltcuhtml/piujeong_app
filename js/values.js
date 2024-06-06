canvas = document.getElementById(`canvas`);     // set canvas

canvas.width = screen.width;                    // set canvas width as screen width
canvas.height = screen.height;                  // set canvas height as screen height

const ctx = canvas.getContext(`2d`);            // set ctx

let debugMod = true;                            // set debugMod

let dateBefore = Date.now();                    // set dateBefore
let FPS_Counter = 0, FPS = -1;                  // init FPS_Counter and FPS

const gap = 32;                                 // set the gap size

let cycle = 15;                                 // init circle's moving cycle

let circle = {                                  // /* set circle */
    x : canvas.width <= canvas.height ?         // set circle's x position as the middle of the screen
        canvas.width * 3 / 8 + gap: 
        canvas.width / 2 - canvas.height / 16 + gap,

    y : canvas.width <= canvas.height ?         // set circle's y position as the bottom of the screen
        canvas.height - canvas.width / 4 - gap: 
        canvas.height * 7 / 8 - gap, 

    size : canvas.width <= canvas.height ?      // set circle's size
           canvas.width / 4  - gap * 2 : 
           canvas.height / 8 - gap * 2,

    isMovingUP : true                           // set circle's direction
};