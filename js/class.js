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
        ctx.fillStyle = "#e900ff";

        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    /**
    *for moving the circle
    */
    move() {
        this.x = canvas.width / 2;

        if (elapsed <= inTime) {
            this.y = (canvas.height - this.size - unit)
                     - (canvas.height - unit * 2 - this.size * 2) * (elapsed / inTime);
        } else if (elapsed <= inTime + exTime) {
            this.y = (unit + this.size)
                     + (canvas.height - unit * 2 - this.size * 2) * ((elapsed - inTime) / exTime);
        } else {
            startTime = timeStamp;
        }

        this.size = unit / 4;
    }
};