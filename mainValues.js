canvas = document.getElementById(`canvas`); //  /
                                            //  |
canvas.width = screen.width;                // /
canvas.height = screen.height;              // \  Set Canvas
                                            //  |
const ctx = canvas.getContext(`2d`);        //  \

let debugMod = true;                        // set debugMod

let FPS_counter, FPS = 0;                   // init FPS_counter and FPS