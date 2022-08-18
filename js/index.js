let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let jack
let jackImg
let horizontalLine
let holes = []
let lineGap = 80

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
    this.x = windowWidth / 2 - holeW / 2
    this.y = windowHeight - lineGap
    this.w = holeW
    this.h = 4
  }

  draw() {
    fill('lightBlue')
    noStroke()
    rect(this.x, this.y, this.w, this.h)
    rect(this.x, this.y - lineGap, this.w, this.h)
    rect(this.x, this.y - lineGap * 2, this.w, this.h)

  }


  move() {
    this.x = this.x + this.speed

    if (this.x > windowWidth) {
      this.x = 0 - this.w
    }  }
}




function draw() {
  background('lightBlue')

  // GROUND //

  // LINES //
  // stroke('red')
  // strokeWeight(lineStroke)
  // line(x1, y1, x2, y2)

  // SCORE TEXT //
  fill("wihte");
  noStroke()
  textAlign(CENTER)
  textFont('Helvetica')
  textStyle('bold')
  textSize(20)
  text(`SCORE: ${score}`, 0, 20, width);


  jack.moveAndDraw()
  horizontalLine.draw()
  holes.draw()
  holes.move()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}