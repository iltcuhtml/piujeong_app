document.body.style.backgroundColor = "whitesmoke";

canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let unit;

/* title screen */
const titleText = document.getElementById("titleText");

const explainText = document.getElementById("explainText");

const inhaleTimeText = document.getElementById("inhaleTimeText");
const exhaleTimeText = document.getElementById("exhaleTimeText");
const inhaleTimeInput = document.getElementById("inhaleTimeInput");
const exhaleTimeInput = document.getElementById("exhaleTimeInput")

const volumeText = document.getElementById("volumeText");
const volumeInput = document.getElementById("volumeInput");

const startButton = document.getElementById("startButton");

/* main screen */
const resumeButton = document.getElementById("resumeButton");
const pauseButton = document.getElementById("pauseButton");
const backButton = document.getElementById("backButton");

const setsText = document.getElementById("setsText");
const repsText = document.getElementById("repsText");
const setsInput = document.getElementById("setsInput");
const repsInput = document.getElementById("repsInput");
const SetsAndRepsText = document.getElementById("SetsAndRepsText");

let isSVG = true;   // set isSVG as true 
                    // (true : show circle and board as svg image)
                    //
                    // (false : don't show circle and board as svg image)

let debugMod = false;   // set debugMod as true
                        // (true : show debug text)
                        //
                        // (false : don't show debug text)

let explainTextLanguage = "Kr"  // set explainTextLanguage as "Kr"
                                // ("Kr" : Korean)
                                // ("En" : English)

let timeStamp = 0, timeDifference = 0, 
    startTime = 0, elapsed = 0;

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
let setSets = 1, setReps = 10;

let doneSets = 0, doneReps = 0;

let boardImg_X_Size = 1967, boardImg_Y_Size = 361;
let boardWidth, boardHeight, boardHight;

let circleImg_XY_Size = 1200;

let circleObj = [];

const boardImg = new Image();
      boardImg.src = "images/board.svg";

const circleImg = new Image();
      circleImg.src = "images/circle.svg";

const sfx = new Audio();
      sfx.src = "sfx/sfx.m4a";
      sfx.volume = 0.75;        // set sfx volume as 0.75 (75%)

let sfxCircleDirection = "up";  // set sfxCircleDirection as "up"
                                // ("up" : "down" sfx has been played and the circle is moving up)
                                //
                                // (down" : "up" sfx has been played and the circle is moving down)