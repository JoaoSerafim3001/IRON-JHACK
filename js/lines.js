class Line {
  constructor() {
    this.w = windowWidth
    this.h = 4
    this.x = 0
    this.y = windowHeight - lineGap
  }

  draw() {
    fill('red')
    noStroke()
    rect(this.x, this.y, this.w, this.h)
    rect(this.x, this.y - lineGap, this.w, this.h)
    rect(this.x, this.y - lineGap * 2, this.w, this.h)

  }
}