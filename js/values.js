canvas = document.getElementById("canvas"); // set canvas

canvas.width = window.innerWidth;           // set canvas width as innerWidth
canvas.height = window.innerHeight;         // set canvas height as innerWidth

const ctx = canvas.getContext("2d");        // set ctx as canvas

const timeInput = document.getElementById("timeInput"); // set timeInput
const label = document.getElementById("label"); // set label
const startButton = document.getElementById("start");   // set startButton
const stopButton = document.getElementById("stop");   // set stopButton

let debugMod = false;    // set debugMod as true

let dateBefore = Date.now();    // set dateBefore
let FPS_Counter = 0, FPS = -1;  // init FPS_Counter as 0 and FPS as -1

const gap = 32; // set the gap size as 32

let isStarted = false;

let cycle = 15; // init circle's moving cycle as 15

let circleObj = new circle; // set circle_Obj as new circle