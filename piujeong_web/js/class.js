/**
*for making circles
*/
class circle {
    constructor() {
        this.x = canvas.width / 2;

        this.y = canvas.height
                 - canvas.width / 8
                 - unit;

        this.radius = unit / 4;

        this.alpha = 1;
    }

    /**
    *for drawing the circle
    */
    draw() {
        if (!isSVG) {
            ctx.fillStyle = "#D495C0";
    
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();

        } else {
            if (elapsed <= inhaleTime) {
                drawRotatedImage(circleImg, 0, 0, circleImg_XY_Size, circleImg_XY_Size,
                                 this.x, this.y,
                                 this.radius * 2, this.radius * 2,
                                 (elapsed / inhaleTime) * Math.PI - Math.PI * 35 / 180);

            } else if (elapsed <= inhaleTime + exhaleTime) {
                drawRotatedImage(circleImg, 0, 0, circleImg_XY_Size, circleImg_XY_Size,
                                 this.x, this.y,
                                 this.radius * 2, this.radius * 2,
                                 ((elapsed - inhaleTime) / exhaleTime + 1) * Math.PI - Math.PI * 35 / 180);

            } else {
                drawRotatedImage(circleImg, 0, 0, circleImg_XY_Size, circleImg_XY_Size,
                                 this.x, this.y,
                                 this.radius * 2, this.radius * 2,
                                 - Math.PI * 35 / 180);
            }
        }
    }

    /**
    *for moving the circle
    */
    move() {
        if (elapsed <= inhaleTime) {
            /* moving up */
            this.y = (canvas.height - boardHight - boardHeight - this.radius)
                     - (canvas.height - (boardHight + boardHeight + this.radius) * 2) * (elapsed / inhaleTime);

        } else if (elapsed <= inhaleTime + exhaleTime) {
            /* moving down */
            this.y = (boardHight + boardHeight + this.radius)
                     + (canvas.height - (boardHight + boardHeight + this.radius) * 2) * ((elapsed - inhaleTime) / exhaleTime);
                     
        } else {
            /* done one cycle */
            startTime = timeStamp;

            doneReps++;

            if (doneReps >= setReps) {
                doneSets++;
                doneReps = 0;
            }
        }
    }
};