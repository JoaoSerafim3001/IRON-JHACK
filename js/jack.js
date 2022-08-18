class Jack {
  constructor() {
    this.w = 30
    this.h = this.w * 2
    this.x = windowWidth / 2 - this.w / 2
    this.y = windowHeight - this.h

    this.speed = gameSpeed
  }

  draw() {
    noStroke()
    fill(0)
    image(jackImg, this.x, this.y, this.w, this.h)

    // This draws a man icon shape

    // ellipse(this.x + this.w / 2, this.y - this.h * 2.5, this.w/1.5, this.w/1.5)
    // fill(0)
    // rect(this.x, this.y - this.w * 2, this.w, this.h, this.w / 5, this.w / 5, this.w / 5,this.w / 5)
    // fill(0)
    // rect(this.x+this.w/6, this.y - this.w, this.w / 1.5, this.h, 0, 0, this.w / 5, this.w / 5)
  }

  moveLeft() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed
    }
  }

  moveRight() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed
    }
  }

  // JUMP //

  // jump() {
  //   if (keyIsDown(UP_ARROW)) {
  //     this.y = this.y - lineGap
  //   }
  // }


  keyPressed() {
    if (keyCode === 32) {
      this.y = windowHeight - this.h - lineGap
    }
  }

  moveAndDraw() {
    this.moveRight();
    this.moveLeft();
    // this.jump()
    this.keyPressed()

    if (this.x > windowWidth) {
      this.x = 0 - this.w
    }

    if (this.x + this.w < 0) {
      this.x = windowWidth
    }

    this.draw();
  }
}
