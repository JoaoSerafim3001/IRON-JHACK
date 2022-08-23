let windowW = window.innerWidth;
let windowH = window.innerHeight;
let bgColor = "lightgray";
let jack;
let jackImg;
let jackImgLeft;
let horizontalLine;
let holes = [];
let lineGap = windowH / 8;
let holeW = lineGap;

const ironHackBlue = "#009bff";

let gameSpeed = 4;
let score = 0;
let gameTime = 100;
let bonusTime = 10;

let spaceBarKey = 32;
let gameState = "playing";

function preload() {
  jackImg = loadImage("assets/images/jhack.png");
  jackImgLeft = loadImage("assets/images/jhack_left.png");
  jackImgRight = loadImage("assets/images/jhack_right.png");
}

function setup() {
  const canvas = createCanvas(windowW, windowH);
  canvas.parent("game-board");
  initializeGame();
  noLoop();
}

function draw() {
  if (gameState === "playing") {
    playGame();
    return;
  }
  if (gameState === "gameover") {
    gameOver();
  }
  if (gameState === "win") {
    win();
  }
}
function getHolesDirectlyAbove() {
  return holes.filter((hole) => {
    const dif = jack.y - hole.y;
    // const difBelow = jack.y + jack.h + hole.y;
    if (dif < 0 || dif > lineGap) {
      return false;
    }
    return true;
  });
}

// function getHolesDirectlyBelow() {
//   return hole.filter((hole) => {
//     const difBelow = jack.y - hole.y;
//     if (difBelow < 0 && difBelow > lineGap) {
//       return true;
//     }
//     if (difBelow > lineGap) {
//       return false;
//     }
//     return false;
//   });
// }

function collidesHoleBelow() {
  const holesDirectyBelowUs = getHolesDirectlyBelow();
  const collidingHoleBelow = holesDirectyBelowUs.find((hole) => {
    return collisionDetection(hole, jack);
  });
  if (collidingHoleBelow) {
    jack.y += lineGap;
  }
}

function keyPressed() {
  if (keyCode === spaceBarKey || keyCode === UP_ARROW) {
    const holesDirectyAboveUs = getHolesDirectlyAbove();
    const collidingHole = holesDirectyAboveUs.find((hole) => {
      return collisionDetection(hole, jack);
    });
    if (collidingHole) {
      jack.jump();
      holes.push(
        new Hole(random(0, windowW), floor(random(9)) * lineGap, "right"),
        new Hole(random(0, windowW), floor(random(9)) * lineGap, "left")
      );
      score = score + 5;
    }
  }
}

function collisionDetection(rect1, rect2) {
  return rect1.x < rect2.x && rect1.x + rect1.w > rect2.x + rect2.w;
}

function windowResized() {
  resizeCanvas(windowW, windowH);
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

function playGame() {
  background(bgColor);
  // SCORE //
  fill(ironHackBlue);
  noStroke();
  textAlign(LEFT);
  textFont("zx_spectrum-7");
  textStyle("bold");
  textSize(20);
  text(`SCORE:${score}`, 5, 20);

  // TIMER //
  fill(0, 155, 255);
  noStroke();
  textAlign(RIGHT);
  textFont("zx_spectrum-7");
  textSize(20);
  text(`TIME:${gameTime}`, windowW - 5, 20);

  if (frameCount % 60 === 0 && gameTime > 0) {
    gameTime--;
  }
  if (gameTime === 0) {
    gameState = "gameover";
  }

  jack.moveAndDraw();
  horizontalLine.draw();
  holes.forEach((hole) => {
    hole.draw();
    hole.move();
  });
}

function startGame() {
  const gameIntro = document.getElementsByClassName("game-intro");
  gameIntro[0].classList.toggle("hidden");
  const gameBoard = document.getElementById("game-board");
  gameBoard.classList.toggle("hidden");
  loop();
}

function initializeGame() {
  gameState = "playing";
  jack = new Jack();
  horizontalLine = new Line();
  holes.push(new Hole(random(0, windowW), lineGap * 6, "right"));
  holes.push(new Hole(random(0, windowW), lineGap * 2, "left"));
}

function gameOver() {
  background(bgColor);
  noStroke();
  textSize(40);
  textAlign(CENTER, CENTER);
  fill("black");
  text("TIME UP", width / 2, height / 2 - lineGap / 2);
  textSize(20);
  // text(`SCORE:${score}`, width / 2, height / 2 + (lineGap * 2) / 2);
  text(`YOU SCORED:${score}`, width / 2, height / 2 + lineGap / 2);
  fill(ironHackBlue);

  text(
    "PRESS ENTER TO RESTART THE GAME",
    width / 2,
    height / 2 + (lineGap * 4) / 2
  );
  restartGame();
}

function win() {
  background(bgColor);
  noStroke();
  image(
    jackImg,
    width / 2 - jack.w / 2,
    height / 4,
    jack.w * 1.5,
    jack.h * 1.5
  );
  textSize(40);
  textAlign(CENTER, CENTER);
  fill(ironHackBlue);
  text("YOU WIN!", width / 2, height / 2 - lineGap / 2);
  fill("black");
  textSize(20);
  text(
    `SCORE:${score} · TIME BONUS:${gameTime * bonusTime}`,
    width / 2,
    height / 2 + lineGap / 2
  );
  text(
    `YOU SCORED:${score + gameTime * bonusTime}`,
    width / 2,
    height / 2 + (lineGap * 2) / 2
  );
  fill(ironHackBlue);
  text(
    "PRESS ENTER TO RESTART THE GAME",
    width / 2,
    height / 2 + (lineGap * 4) / 2
  );
  restartGame();
}

function restartGame() {
  if (keyIsDown(ENTER)) {
    initializeGame();
    loop();
  }
}
