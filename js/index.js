let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let bgColor = 'lightGrey'
let jack
let jackImg
let horizontalLine
let holes = []
let lineGap = windowHeight / 4

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
    fill(bgColor)
    stroke(bgColor)
    rect(this.x, this.y, this.w, this.h)
    rect(this.x, this.y - lineGap, this.w, this.h)
    rect(this.x, this.y - lineGap * 2, this.w, this.h)
  }


  move() {
    this.x += this.x + 2
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

  const colliding = collisionBetweenTwoRectangles(horizontalLine, jack)
  if (colliding) {
    fill(100)
    textAlign(CENTER, CENTER)
    text('COLLIDES')
  }
}

function collisionBetweenTwoRectangles(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}