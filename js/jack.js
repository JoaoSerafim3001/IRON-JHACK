class Jack {
  constructor() {
    this.h = lineGap - 20;
    this.w = this.h / 2;
    this.x = windowW / 2 - this.w / 2;
    this.y = windowH - this.h;
    this.floor = 0;
    this.speed = gameSpeed;
    this.img = jackImg;
  }

  draw() {
    image(this.img, this.x, this.y, this.w, this.h);

    // This draws a man icon shape //

    // noStroke();
    // fill(0);
    // ellipse(this.x + this.w / 2, this.y - this.h * 2.5, this.w/1.5, this.w/1.5)
    // fill(0)
    // rect(this.x, this.y - this.w * 2, this.w, this.h, this.w / 5, this.w / 5, this.w / 5,this.w / 5)
    // fill(0)
    // rect(this.x+this.w/6, this.y - this.w, this.w / 1.5, this.h, 0, 0, this.w / 5, this.w / 5)
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
      this.img = jackImgLeft;
      // jackIsMoving();
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
      this.img = jackImgRight;
      // jackIsMoving();
    } else {
      this.img = jackImg;
    }

    if (this.x > windowW) {
      this.x = 0 - this.w;
    }

    if (this.x + this.w < 0) {
      this.x = windowW;
    }

    // PLAYER REACHES TOP LINE //
    if (this.y < 0) {
      winSound.setVolume(0.2);
      winSound.play();
      gameState = "win";
    }
  }

  jump() {
    this.y -= lineGap;
    jumpSound.setVolume(0.2);
    jumpSound.play();
  }

  moveAndDraw() {
    this.move();
    this.draw();
  }
}

// function jackIsMoving() {
//   const moveLeft = (this.x -= this.speed);
//   const moveRight = (this.x += this.speed);
//   if (this.x === moveLeft || this.x === moveRight) {
//     moveSound.play();
//   } else {
//     moveSound.pause();
//   }
// }
