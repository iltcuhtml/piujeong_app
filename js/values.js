document.body.style.backgroundColor = "white";    // set body color as skyblue

canvas = document.getElementById("canvas"); // set canvas
const ctx = canvas.getContext("2d");        // set ctx as canvas

const timeSetText = document.getElementById("timeSetText"); // set timeSetText

const allTimeSet = document.getElementById("allTimeSet");   // set allTimeSet
const upTimeSet = document.getElementById("upTimeSet");     // set upTimeSet
const downTimeSet = document.getElementById("downTimeSet"); // set downTimeSet

const allTimeInput = document.getElementById("allTimeInput");   // set allTimeInput
const upTimeInput = document.getElementById("upTimeInput");     // set upTimeInput
const downTimeInput = document.getElementById("downTimeInput"); // set downTimeInput

const backgroundColorSetText = document.getElementById("backgroundColorSetText");   // set backgroundColorSetText
const backgroundColor = document.getElementById("backgroundColor");                 // set backgroundColor

const startButton = document.getElementById("start");   // set startButton

const stopButton = document.getElementById("stop");   // set stopButton

let debugMod = false;    // set debugMod as true

// let dateBefore = Date.now();    // set dateBefore
// let FPS_Counter = 0, FPS = -1;  // init FPS_Counter as 0 and FPS as -1

let timeStamp = 0, startTime = 0, elapsed = 0;  // init timeStamp, startTime and elapsed as 0

let isStarted = false;

let upTime = 5, downTime = 5; // init circle's up & down moving time as 5

let circleObj = []; // set circle_Obj as empty object