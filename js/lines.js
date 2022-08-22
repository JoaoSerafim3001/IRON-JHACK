class Line {
  constructor() {
    this.w = windowW;
    this.h = 5;
    this.x = 0;
    this.y = windowH;
  }

  draw() {
    noStroke();
    fill("limegreen");
    rect(this.x, this.y - lineGap * 8, this.w, this.h);
    fill("red");
    rect(this.x, this.y - lineGap * 7, this.w, this.h);
    rect(this.x, this.y - lineGap * 6, this.w, this.h);
    rect(this.x, this.y - lineGap * 5, this.w, this.h);
    rect(this.x, this.y - lineGap * 4, this.w, this.h);
    rect(this.x, this.y - lineGap * 3, this.w, this.h);
    rect(this.x, this.y - lineGap * 2, this.w, this.h);
    rect(this.x, this.y - lineGap, this.w, this.h);
    rect(this.x, this.y, this.w, this.h);
  }
}
