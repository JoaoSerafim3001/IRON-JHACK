class Hole {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.w = holeW;
    this.h = 5;
    this.direction = direction;
  }

  draw() {
    fill(bgColor);
    stroke(bgColor);
    strokeWeight(2);
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    if (this.direction === "right") {
      this.x = this.x + gameSpeed;

      if (this.x > windowWidth) {
        this.x = 0 - this.w;
        this.y = this.y + lineGap;
      }

      if (this.y > windowHeight - lineGap) {
        this.y = 0;
      }
    } else {
      this.x = this.x - gameSpeed;

      if (this.x < -holeW) {
        this.x = windowWidth;
        this.y = this.y - lineGap;
      }

      if (this.y < 0) {
        this.y = windowHeight - lineGap;
      }

      // if (this.x > windowWidth) {
      //   this.x = 0 - this.w;
      //   this.y = this.y + lineGap;
      // }
    }
  }
}
