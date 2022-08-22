let windowW = window.innerWidth;
let windowH = window.innerHeight;
let bgColor = "lightgray";
let jack;
let jackImg;
let jackImgLeft;
let horizontalLine;
let holes = [];
let lineGap = windowH / 8;
let holeW = 70;

const ironHackBlue = "#009bff";

let gameSpeed = 4;
let score = 0;
let gameTime = 60;
let bonusTime = 10;

let spaceBarKey = 32;

function preload() {
  jackImg = loadImage("assets/images/jhack.png");
}

function setup() {
  const canvas = createCanvas(windowW, windowH);
  canvas.parent("game-board");
  jack = new Jack();
  horizontalLine = new Line();
  holes.push(new Hole(random(0, windowW), lineGap * 6, "right"));
  holes.push(new Hole(random(0, windowW), lineGap * 3, "left"));
  noLoop();
}

function draw() {
  background(bgColor);

  // GROUND //

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
    gameOver();
    restartGame();
  }

  jack.moveAndDraw();
  horizontalLine.draw();
  holes.forEach((hole) => {
    hole.draw();
    hole.move();
  });
}

// function removeHoles() {
//   return holes.filter((hole) => {
//     hole.x + hole.w < windowW;
//     if (!inScreen) {
//       score++;
//     }
//     return inScreen;
//   });
// }

function getHolesDirectlyAbove() {
  return holes.filter((hole) => {
    const dif = jack.y - hole.y;
    // const difBelow = jack.y + jack.h + hole.y;
    if (dif < 0) {
      return false;
    }
    if (dif > lineGap) {
      return false;
    }
    return true;
  });
}

function keyPressed() {
  if (keyCode === spaceBarKey || keyCode === UP_ARROW) {
    const holesDirectyAboveUs = getHolesDirectlyAbove();
    const collidingHole = holesDirectyAboveUs.find((hole) => {
      return collisionDetection(hole, jack);
    });
    if (collidingHole) {
      jack.jump();
      holes.push(new Hole(random(0, windowW), jack.y + jack.h - lineGap * 3));
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

function restartGame() {
  if (keyIsDown(82)) {
    console.log("tecla r");
    return startGame();
  }
}

function startGame() {
  const gameIntro = document.getElementsByClassName("game-intro");
  gameIntro[0].classList.toggle("hidden");
  const gameBoard = document.getElementById("game-board");
  gameBoard.classList.toggle("hidden");
  loop();
}

function gameOver() {
  // noLoop();
  textSize(30);
  textAlign(CENTER, CENTER);
  fill("black");
  text("TIME UP!", width / 2, height / 2 - lineGap / 2);
  textSize(20);
  text(
    `SCORE:${score} · TIME BONUS:${gameTime * bonusTime}`,
    width / 2,
    height / 2 + lineGap / 2
  );
  text(`YOU SCORED:${score}`, width / 2, height / 2 + lineGap + lineGap / 2);
  restartGame();
  // text(
  //   "PRESS ENTER TO RESTART THE GAME",
  //   width / 2,
  //   height / 2 + (lineGap * 2) / 2
  // );

  // if (keyIsDown(13)) {
  //   return setup();
}

function win() {
  noLoop();
  textSize(30);
  textAlign(CENTER, CENTER);
  fill(ironHackBlue);
  text("YOU WIN", width / 2, height / 2 - lineGap / 2);
  textSize(20);
  text(
    `SCORE:${score} · TIME BONUS:${gameTime * bonusTime}`,
    width / 2,
    height / 2 + lineGap / 2
  );
  text(
    `YOU SCORED:${score + gameTime * bonusTime}`,
    width / 2,
    height / 2 + lineGap + lineGap / 2
  );
  restartGame();
  // text(
  //   "PRESS ENTER TO RESTART THE GAME",
  //   width / 2,
  //   height / 2 + (lineGap * 2) / 2
  // );

  // if (keyIsDown(13)) {
  //   return setup();
  // }
}
