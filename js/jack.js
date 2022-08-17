class Jack {
  constructor() {
    this.w = 30
    this.h = this.w
    this.x = windowWidth / 2 - this.w / 2
    this.y = windowHeight - this.w

    this.speed = 5
  }

  draw() {
    noStroke()
    fill(0)
    Image(jackImg, this.x, this.y - this.w - 25, this.w, this.h * 2)
    // rect(this.x, this.y - this.w - 25, this.w, this.h * 2)

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

  jump() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.speed
    }
  }

  moveAndDraw() {
    this.moveRight();
    this.moveLeft();
    this.jump()
    if (this.x > windowWidth) {
      this.x = 0 - this.w
    }

    if (this.x + this.w < 0) {
      this.x = windowWidth
    }
    // this.x = constrain(this.x, 0, width - this.w);
    // this.y = constrain(this.y, 0, height)
    this.draw();
  }
}