/**
*for making circles
*/
class circle {
    constructor() {                 // /* init circle */
        this.x = canvas.width / 2;  // set circle's x position as the middle of the screen

        this.y = canvas.height
                 - canvas.width / 8
                 - unit;            // set circle's y position as the bottom of the screen

        this.radius = unit / 4;       // set circle's radius

        this.alpha = 1;             // set circle's aplha value as 1
    }

    /**
    *for drawing the circle
    */
    draw() {
        // ctx.fillStyle = "#ff80ff";

        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // ctx.fill();

        if (elapsed <= inTime) {
            drawRotatedImage(circleImg, 0, 0, 1, 1,
                this.x, this.y,
                this.radius * 2, this.radius * 2,
                (elapsed / inTime) * Math.PI - Math.PI * 35 / 180);

        } else if (elapsed <= inTime + exTime) {
            drawRotatedImage(circleImg, 0, 0, 1, 1,
                this.x, this.y,
                this.radius * 2, this.radius * 2,
                ((elapsed - inTime) / exTime + 1) * Math.PI - Math.PI * 35 / 180);

        } else {
            drawRotatedImage(circleImg, 0, 0, 1, 1,
                this.x, this.y,
                this.radius * 2, this.radius * 2,
                - Math.PI * 35 / 180);
        }
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