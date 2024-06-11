/**
*for making circles
*/
class circle {
    constructor() {                                             // /* init circle */
        this.x = canvas.width <= canvas.height ?                // set circle's x position as the middle of the screen
                canvas.width * 3 / 8 + gap: 
                canvas.width / 2 - canvas.height / 16 + gap,

        this.y = canvas.width <= canvas.height ?                // set circle's y position as the bottom of the screen
                canvas.height - canvas.width / 4 - gap: 
                canvas.height * 7 / 8 - gap, 

        this.size = Math.min(canvas.width, canvas.height) / 4,  // set circle's size

        this.isMovingUP = 1,                                    // set circle's direction

        this.alpha = 0.5;
    }

    /**
    *for drawing the circle
    */
    draw() {               
        ctx.drawImage(circleImage, 0, 0, 1, 1, this.x, this.y, this.size, this.size);
    }

    /**
    *for moving the circle
    */
    move() {
        this.y -= (canvas.height - gap * 2 - this.size) / FPS / (cycle / 2) * this.isMovingUP;
    }

    /**
    *for setting the direction of the circle
    */
    setDirection() {
        if (this.y + this.size > canvas.height - gap) {
            this.isMovingUP = 1;
        } else if (this.y < gap) {
            this.isMovingUP = -1;
        }
    }
};