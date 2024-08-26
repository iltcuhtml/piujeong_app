document.body.style.backgroundColor = "whitesmoke";    // set body color as skyblue

canvas = document.getElementById("canvas"); // set canvas
const ctx = canvas.getContext("2d");        // set ctx as canvas

/* title screen */
const titleText = document.getElementById("titleText"); // set titleText

const explainText = document.getElementById("explainText"); // set explainText

const inhaleTimeText = document.getElementById("inhaleTimeText");   // set inhaleTimeText
const exhaleTimeText = document.getElementById("exhaleTimeText");   // set exhaleTimeText
const inhaleTimeInput = document.getElementById("inhaleTimeInput"); // set inhaleTimeInput
const exhaleTimeInput = document.getElementById("exhaleTimeInput"); // set exhaleTimeInput

const volumeText = document.getElementById("volumeText");   // set volumeText
const volumeInput = document.getElementById("volumeInput"); // set volumeInput

const startButton = document.getElementById("startButton");   // set startButton

/* main screen */
const resumeButton = document.getElementById("resumeButton");   // set resumeButton
const pauseButton = document.getElementById("pauseButton");     // set pauseButton
const backButton = document.getElementById("backButton");       // set backButton

const setsText = document.getElementById("setsText");   // set setsText
const repsText = document.getElementById("repsText");   // set repstText
const setsInput = document.getElementById("setsInput"); // set setsInput
const repsInput = document.getElementById("repsInput"); // set repsInput
const SetsAndRepsText = document.getElementById("SetsAndRepsText"); // set SetsAndRepsText

let isSVG = true;   // set isSVG as true 
                    // (true : show circle and board as svg image)
                    //
                    // (false : don't show circle and board as svg image)

let debugMod = false;   // set debugMod as true
                        // (true : show debug text)
                        //
                        // (false : don't show debug text)

let timeStamp = 0, timeDifference = 0, 
    startTime = 0, elapsed = 0;         // init timeStamp, timeDifference, startTime and elapsed as 0

let isStarted = false;  // set isStarted as false
                        // (true : started and circle and board will be shown)
                        //
                        // (false : stoped and UI will be shown)

let mainScreenState = "start";  // set mainScreenState as "pause"
                                // ("start" : the main screen is paused and this state will be set 
                                //            when the main screen just starts)
                                //
                                // ("resume" : the main screen is working and this state will be set 
                                //             if you press resume button while mainScreenState is "pause")
                                //
                                // ("pause" : the main screen is paused and this state will be set 
                                //            if you press pause button)
                                //
                                // ("end" : the main screen is end and this state will be set
                                //          if circle stops moving because 'doneSets >= setSets')

let inhaleTime = 5000, exhaleTime = 5000; // init inhaleTime & exhaleTime as 5000 (ms)
let setSets = 1, setReps = 10;    // init setSets as 1 & setReps as 10

let doneSets = 0, doneReps = 0;    // init doneSets as 1 & doneReps as 10

let circleObj = []; // set circle_Obj as empty object

const boardImg = new Image();               // init boardImg as new Image
      boardImg.src = "images/board.svg";    // set boardImg as board.svg

const circleImg = new Image();              // init circleImg as new Image
      circleImg.src = "images/circle.svg";  // set circleImg as circle.svg

const sfx = new Audio();        // init sfx as new Audio
      sfx.src = "sfx/sfx.m4a";  // set sfx adress as sfx.m4a
      sfx.volume = 0.75;        // set sfx volume as 0.75

let sfxCircleDirection = "up";  // set sfxCircleDirection as "up"
                                // ("up" : "down" sfx has been played and the circle is moving up)
                                //
                                // (down" : "up" sfx has been played and the circle is moving down)