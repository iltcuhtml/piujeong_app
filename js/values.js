canvas = document.getElementById(`canvas`); //  /
                                            //  |
canvas.width = screen.width;                // /
canvas.height = screen.height;              // \  Set Canvas
                                            //  |
const ctx = canvas.getContext(`2d`);        //  \

let debugMod = true;                        // set debugMod

let dateBefore = Date.now();                // set dateBefore
let FPS_Counter = 0, FPS = -1;              // init FPS_Counter and FPS