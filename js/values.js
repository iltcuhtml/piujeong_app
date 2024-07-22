document.body.style.backgroundColor = "whitesmoke";    // set body color as skyblue

canvas = document.getElementById("canvas"); // set canvas
const ctx = canvas.getContext("2d");        // set ctx as canvas

const title = document.getElementById("title"); // set title

const inTimeSet = document.getElementById("inTimeSet"); // set inTimeSet
const exTimeSet = document.getElementById("exTimeSet"); // set exTimeSet

const inTimeInput = document.getElementById("inTimeInput"); // set inTimeInput
const exTimeInput = document.getElementById("exTimeInput"); // set exTimeInput

const volumeSet = document.getElementById("volumeSet"); // set volumeSet

const volumeInput = document.getElementById("volumeInput"); // set volumeInput

const startButton = document.getElementById("start");   // set startButton

const stopButton = document.getElementById("stop");   // set stopButton

let debugMod = false;    // set debugMod as true

let timeStamp = 0, startTime = 0, elapsed = 0;  // init timeStamp, startTime and elapsed as 0

let isStarted = false;

let inTime = 3, exTime = 3; // init circle's up & down moving time as 3

let circleObj = []; // set circle_Obj as empty object

const boardImg = new Image();               // init boardImg as new Image
      boardImg.src = "images/board.svg";    // set boardImg as board.svg

const circleImg = new Image();              // init circleImg as new Image
      circleImg.src = "images/circle.svg";  // set circleImg as circle.svg

const sfx = new Audio();        // init sfx as new Audio
      sfx.src = "sfx/sfx.wav";  // set sfx adress as sfx.wav
      sfx.volume = 0.75;        // set sfx volume as 0.75

let playLev = 1;    // set playLev as 1