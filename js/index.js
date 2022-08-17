let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let jack
let lines
let score = 0


function setup() {
  createCanvas(windowWidth, windowHeight)
  // background('white')
  // canvas.parent('gameBoard')
  jack = new Jack()
  lines = new Line()
  // noLoop()
}



function draw() {
  background('lightBlue')
  fill(64)
  rect(0, windowHeight - 25, windowWidth, 25)

  //SCORE text
  fill("wihte");
  textAlign(CENTER)
  textFont('Helvetica')
  textStyle('bold')
  textSize(20)
  text(`SCORE: ${score}`, 0, 20, width);


  jack.moveAndDraw()
  lines.draw()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

window.onresize = function () {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  canvas.size(windowWidth, windowHeight);
}