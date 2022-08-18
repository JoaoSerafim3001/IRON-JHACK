let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let bgColor = 'lightGrey'
let jack
let jackImg
let horizontalLine
let holes = []
let lineGap = 80

let gameSpeed = 5
let score = 0


function preload() {
  jackImg = loadImage('assets/jack.png')
}


function setup() {
  const canvas = createCanvas(windowWidth, windowHeight)
  canvas.parent('gameBoard')
  jack = new Jack()
  horizontalLine = new Line()
  holes = new Hole()
}

class Hole {
  constructor() {
    const holeW = 80
    this.x = 0 - holeW
    this.y = windowHeight - lineGap
    this.w = holeW
    this.h = 4
  }

  draw() {
    fill(bgColor)
    stroke(bgColor)
    rect(this.x, this.y, this.w, this.h)
    rect(this.x, this.y - lineGap, this.w, this.h)
    rect(this.x, this.y - lineGap * 2, this.w, this.h)
  }
  
  move() {
    this.x = this.x + gameSpeed

    if (this.x > windowWidth) {
      this.x = 0 - this.w
      this.y--
    }
  }
}




function draw() {
  background(bgColor)

  // GROUND //

  // LINES //
  // stroke('red')
  // strokeWeight(lineStroke)
  // line(x1, y1, x2, y2)

  // SCORE TEXT //
  fill(0,155,255);
  noStroke()
  textAlign(CENTER)
  textFont('Helvetica')
  textStyle('bold')
  textSize(20)
  text(`SCORE: ${score}`, 0, 20, width);

  jack.moveAndDraw()
  horizontalLine.draw()
  holes.draw()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
