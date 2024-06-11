/**
*for making circles
*/
class circle {
    constructor() {                                             // /* init circle */
        this.x = canvas.width / 2,                              // set circle's x position as the middle of the screen

        this.y = canvas.height
                 - Math.min(canvas.width, canvas.height) / 16
                 - gap,                                         // set circle's y position as the bottom of the screen

        this.size = Math.min(canvas.width, canvas.height) / 16, // set circle's size

        this.alpha = 1;
    }

    /**
    *for drawing the circle
    */
    draw() {
        ctx.fillStyle = "#660099";

        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    /**
    *for moving the circle
    */
    move() {
        this.x = canvas.width / 2;

        if (elapsed <= upTime) {
            this.y = (canvas.height - this.size - gap)
                     - (canvas.height - gap * 2 - this.size * 2) * (elapsed / upTime);
        } else if (elapsed <= upTime + downTime) {
            this.y = (gap + this.size)
                     + (canvas.height - gap * 2 - this.size * 2) * ((elapsed - upTime) / downTime);
        } else {
            startTime = timeStamp;
        }

        this.size = Math.min(canvas.width, canvas.height) / 16;
    }
};