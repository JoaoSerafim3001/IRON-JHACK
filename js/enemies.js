class Enemy {
  constructor(x, y, direction) {
    this.h = lineGap - 20;
    this.w = this.h / 2;
    this.x = x;
    this.y = y;

    this.direction = direction;
  }

  draw() {
    image(enemyOneImg, this.x, this.y, this.w, this.h);
  }

  move() {
    if (this.direction === "right") {
      this.x = this.x + gameSpeed + 0.5;

      if (this.x > windowWidth) {
        this.x = 0 - this.w;
        this.y = this.y + lineGap;
      }

      if (this.y > windowHeight) {
        this.y = 15;
      }
    } else {
      this.x = this.x - gameSpeed - 0.5;

      if (this.x < -holeW) {
        this.x = windowWidth;
        this.y = this.y - lineGap;
      }

      if (this.y < 0) {
        this.y = windowHeight - lineGap + 15;
      }
    }
  }
}
