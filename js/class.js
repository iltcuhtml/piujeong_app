/**
*for making circles
*/
class circle {
    constructor() {                 // /* init circle */
        this.x = canvas.width / 2;  // set circle's x position as the middle of the screen

        this.y = canvas.height
                 - canvas.width / 8
                 - unit;            // set circle's y position as the bottom of the screen

        this.size = unit / 4;       // set circle's size

        this.alpha = 1;             // set circle's aplha value as 1
    }

    /**
    *for drawing the circle
    */
    draw() {
        ctx.fillStyle = "#ff80ff";

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    /**
    *for moving the circle
    */
    move() {
        this.x = canvas.width / 2;

        if (elapsed <= inTime) {
            this.y = (canvas.height - unit / 4 - unit)
                     - (canvas.height - unit * 2 - unit / 2) * (elapsed / inTime);
                     //+ Math.sin(this.alpha * Math.PI) * unit / 4
        } else if (elapsed <= inTime + exTime) {
            this.y = (unit + unit / 4)
                     + (canvas.height - unit * 2 - unit / 2) * ((elapsed - inTime) / exTime);
                     //- Math.sin(this.alpha * Math.PI) * unit / 4
        } else {
            startTime = timeStamp;
        }
    }
};