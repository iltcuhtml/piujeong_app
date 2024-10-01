document.body.style.backgroundColor = "whitesmoke";

canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let unit;

/* title screen */
const titleText = document.getElementById("titleText");
const titleTextSub = document.getElementById("titleTextSub");

const explainText = document.getElementById("explainText");

const inhaleTimeText = document.getElementById("inhaleTimeText");
const exhaleTimeText = document.getElementById("exhaleTimeText");
const inhaleTimeInput = document.getElementById("inhaleTimeInput");
const exhaleTimeInput = document.getElementById("exhaleTimeInput")

const insightButton = document.getElementById("insightButton");

const startButton = document.getElementById("startButton");

/* main screen */
const setsText = document.getElementById("setsText");
const repsText = document.getElementById("repsText");
const setsInput = document.getElementById("setsInput");
const repsInput = document.getElementById("repsInput");
const SetsAndRepsText = document.getElementById("SetsAndRepsText");

const resumeButton = document.getElementById("resumeButton");
const pauseButton = document.getElementById("pauseButton");
const backButton = document.getElementById("backButton");

let isSVG = true; // (true : show circle and board as svg image)
                  //
                  // (false : don't show circle and board as svg image)

let debugMod = false;   // (true : show debug text)
                        //
                        // (false : don't show debug text)

let explainTextLanguage = "Kr";     // ("Kr" : Korean)
                                    // ("En" : English)

let timeStamp = 0, timeDifference = 0, 
    startTime = 0, elapsed = 0;

let screenState = "title";      // ("title"   : the title screen is showen)
                                // ("insight" : the ingiht screen is showen)
                                // ("start"   : the main screen is showen and started)
                                // ("resume"  : the main screen is showen and working)
                                // ("pause"   : the main screen is showen and paused)
                                // ("end"     : the main screen is showen and end)

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

let sfxHitNum = 1, sfxEndNum = 1;

const sfxHit1 = new Audio();
      sfxHit1.src = "sfx/sfxHit1.m4a";
      sfxHit1.volume = 1;           // set sfxHit1 volume as 1 (100%)

const sfxHit2 = new Audio();
      sfxHit2.src = "sfx/sfxHit2.m4a";
      sfxHit2.volume = 1;           // set sfxHit2 volume as 1 (100%)

const sfxEnd1 = new Audio();
      sfxEnd1.src = "sfx/sfxEnd1.m4a";
      sfxEnd1.volume = 1;           // set sfxEnd1 volume as 1 (100%)

let sfxCircleDirection = "down";    // set sfxCircleDirection as "down"
                                    // ("up" : "down" sfx has been played and the circle is moving up)
                                    //
                                    // (down" : "up" sfx has been played and the circle is moving down)