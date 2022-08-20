let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let bgColor = 'lightGrey'
let jack
let jackImg
let jackImgLeft
let horizontalLine
let holes = []
let lineGap = windowHeight / 8

let gameSpeed = 5
let score = 0
let timer = 60

function preload() {
  jackImg = loadImage('assets/jhack.png')
}

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight)
  canvas.parent('gameBoard')
  jack = new Jack()
  horizontalLine = new Line()
  setInterval(() => { holes.push(new Hole()) }, 10000)
}

class Hole {
  constructor() {
    const holeW = 80
    this.x = 0 - holeW
    this.y = windowHeight
    this.w = holeW
    this.h = 4
  }

  draw() {
    fill(bgColor)
    stroke(bgColor)
    rect(this.x, this.y, this.w, this.h)
  }

  move() {
    this.x = this.x + gameSpeed

    if (this.x > windowWidth) {
      this.x = 0 - this.w
      this.y = this.y + lineGap
    }

    if (this.y > windowHeight - lineGap) {
      this.y = 0 + lineGap
    }
  }
}

function draw() {
  background(bgColor)
  holes = holes.filter((hole) => {
    hole.y += 1
  })

  // GROUND //

  // LINES //
  // stroke('red')
  // strokeWeight(lineStroke)
  // line(x1, y1, x2, y2)

  // SCORE TEXT //
  fill(0, 155, 255);
  noStroke()
  textAlign(LEFT)
  textFont('zx_spectrum-7')
  textStyle('bold')
  textSize(20)
  text(`SCORE:${score}`, 5, 20);

  // TIME TEXT //
  fill(0, 155, 255);
  noStroke()
  textAlign(RIGHT)
  textFont('zx_spectrum-7')
  textStyle('bold')
  textSize(20)
  text(`TIME:${timer}`, windowWidth - 5, 20);

  if (frameCount % 60 === 0 && timer > 0) {
    timer--
  }
  if (timer === 0) {
    textAlign(CENTER, CENTER)
    text('GAME OVER', width / 2, height * 0.3)
  }

  jack.moveAndDraw()
  horizontalLine.draw()
  holes.forEach((hole) => {
    hole.draw()
    hole.move()
  })
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
