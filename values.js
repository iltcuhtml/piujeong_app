const FPS  = getFPS(); // set FPS

canvas = document.getElementById(`canvas`); //  /
                                            //  |
canvas.width = screen.width;                // /
canvas.height = screen.height;              // \  Set Canvas
                                            //  |
const ctx = canvas.getContext(`2d`);        //  \

let debugMod = true; // set debugMod