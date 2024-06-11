let img1;
let img2;
let img3;
let img4;
let img5;

let game;
let win = "";
let img1x, img1y;
let img2x, img2y;
let x = 0;

let placed1;

// Load the image.
function preload() {
  img1 = loadImage('./Details/1.png');
  img2 = loadImage('./Details/2.png');
  img3 = loadImage('./Details/3.png');
  img4 = loadImage('./Details/4.png');
  img5 = loadImage('./Details/5.png');

  base_img = loadImage('./shell.jpeg');
  site_background = loadImage('./brick.jpeg');

  x = 0;
  game = "begining";
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  image(site_background, 0 ,0, windowWidth, windowHeight);

  rect(20, windowHeight - 600, 430, 120 )
  image(base_img, (windowWidth - 450) / 2, (windowHeight - 600) /2, 450, 600);
  textSize(40);
  text('Memorize the painting,', 40, windowHeight - 550);
  text(' then click to Start!', 30 , windowHeight - 500);

  // image(img1, 0, 0, width, height, 0, 0, img1.width, img1.height, CONTAIN);
  // image(img2, 0, 0, width, height, 0, 0, img1.width, img1.height, CONTAIN);
  // image(img3, 0, 0, width, height, 0, 0, img1.width, img1.height, CONTAIN);
  // image(img4, 0, 0, width, height, 0, 0, img1.width, img1.height, CONTAIN);
  // image(img5, 0, 0, width, height, 0, 0, img1.width, img1.height, CONTAIN);

}

function draw() {
  if (win === "win") {
    print("win");

    image(site_background, 0, 0, windowWidth, windowHeight);
    image(base_img, (windowWidth - 450) / 2, (windowHeight - 600) /2, 450, 600);
    rect(20, windowHeight - 600, 550, 120 )
    fill(0);  
    textSize(40);
    text('YOU WIN!!!', 40, windowHeight - 550);
    text('Refresh the site to play again!', 30 , windowHeight - 500);
    fill(50, 50);

    rect((windowWidth - 170) / 2, (windowHeight - 500) /2, 175, 160);
    rect((windowWidth + 150) / 2, (windowHeight - 150) /2, 150, 200);
    rect((windowWidth - 450) / 2, (windowHeight - 150) /2, 200, 150);
    rect((windowWidth - 350) / 2, (windowHeight + 100) /2, 200, 150);
    rect((windowWidth + 100) / 2, (windowHeight - 600) /2, 175, 160);
    fill(255);  
      image(img1, img1x, img1y, img1.width / 1.5, img1.height / 1.5);
      image(img2, img2x, img2y, img1.width / 1.2, img1.height / 1.2);
      image(img3, img3x, img3y, img1.width / 1.2, img1.height / 1.2);
      image(img4, img4x, img4y, img1.width / 1.2, img1.height / 1.2);
      image(img5, img5x, img5y, img1.width / 1.5, img1.height / 1.5);
  } else if (win === "lose") {
    print("lose");
    image(site_background, 0, 0, windowWidth, windowHeight);
    fill(0);
    rect(20, windowHeight - 600, 550, 120 )
    fill(255);
    textSize(40);
    text('YOU LOST :(', 40, windowHeight - 550);
    text('Refresh the site to play again!', 30 , windowHeight - 500);
  }
}

function mousePressed() {

    if (x == 0) {
      fill('white');
      rect(0, 0, 450, 600);
      image(site_background, 0 ,0, windowWidth, windowHeight);
      game = "start";  
      x++;
      rect( (windowWidth - 450) / 2, (windowHeight - 600) /2, 450, 600);
      textSize(25);
      rect(windowWidth - 400, windowHeight - 600, 350, 450)
      fill(0);
      text('Click to place this item', windowWidth - 350 , windowHeight - 550);
      text('in the correct position.', windowWidth - 350, windowHeight - 500);
      fill(255);
      image(img1, windowWidth - 300, windowHeight - 500);
    } else if (x == 1) {
      img1x = mouseX - img1.width / 2;
      img1y = mouseY - img1.height / 2;
      image(img1, img1x, img1y , img1.width / 1.5, img1.height / 1.5);
      x++;
      rect(windowWidth - 400, windowHeight - 600, 350, 450)
      fill(0);
      text('Click to place this item', windowWidth - 350 , windowHeight - 550);
      text('in the correct position.', windowWidth - 350, windowHeight - 500);
      fill(255);
      image(img2, windowWidth - 300, windowHeight - 500);
    } else if (x == 2) {
      img2x = mouseX - img2.width / 2;
      img2y = mouseY - img2.height / 2;
      image(img2, img2x, img2y, img1.width / 1.2, img1.height / 1.2);
      x++;
      rect(windowWidth - 400, windowHeight - 600, 350, 450)
      fill(0);
      text('Click to place this item', windowWidth - 350 , windowHeight - 550);
      text('in the correct position.', windowWidth - 350, windowHeight - 500);
      fill(255);
      image(img3, windowWidth - 350, windowHeight - 500);
    } else if (x == 3) {
      img3x = mouseX - img3.width / 2;
      img3y = mouseY - img3.height / 2;
      image(img3, img3x, img3y, img1.width / 1.2, img1.height / 1.2);
      x++;
      rect(windowWidth - 400, windowHeight - 600, 350, 450)
      fill(0);
      text('Click to place this item', windowWidth - 350 , windowHeight - 550);
      text('in the correct position.', windowWidth - 350, windowHeight - 500);
      fill(255);
      image(img4, windowWidth - 350, windowHeight - 450);
    } else if (x == 4) {
      img4x = mouseX - img4.width / 2;
      img4y = mouseY - img4.height / 2;
      image(img4, img4x, img4y, img1.width / 1.2, img1.height / 1.2);
      x++;
      rect(windowWidth - 400, windowHeight - 600, 350, 450)
      fill(0);
      text('Click to place this item', windowWidth - 350 , windowHeight - 550);
      text('in the correct position.', windowWidth - 350, windowHeight - 500);
      fill(255);
      image(img5, windowWidth - 350, windowHeight - 500);
    } else if (x == 5) {
      img5x = mouseX - img5.width / 2;
      img5y = mouseY - img5.height / 2;
      image(img5, img5x, img5y, img1.width / 1.5, img1.height / 1.5);
      x++;
      rect(windowWidth - 400, windowHeight - 600, 350, 450)
      fill(0);
      text('Click again to see if', windowWidth - 330 , windowHeight - 550);
      text('you won.', windowWidth - 270, windowHeight - 500);
      fill(255);
    } else {

      // Perform collision detection
      if (isColliding(img1x, img1y, img1.width / 1.5, img1.height / 1.5, (windowWidth - 170) / 2, (windowHeight - 500) / 2, 175, 160)
         && isColliding(img2x, img2y, img1.width / 1.5, img1.height / 1.5, (windowWidth + 150) / 2, (windowHeight - 150) /2, 150, 200)
         && isColliding(img3x, img3y, img1.width / 1.5, img1.height / 1.5, (windowWidth - 450) / 2, (windowHeight - 150) /2, 200, 150)
         && isColliding(img4x, img4y, img1.width / 1.5, img1.height / 1.5, (windowWidth + 100) / 2, (windowHeight - 600) /2, 175, 160)
         && isColliding(img5x, img5y, img1.width / 1.5, img1.height / 1.5, (windowWidth - 350) / 2, (windowHeight + 100) /2, 200, 150))
      {
        win = "win";
      } else {
        win = "lose";
      }
    }
}

  function isColliding(x1, y1, w1, h1, x2, y2, w2, h2) {
    return x1 < x2 + w2 &&
           x1 + w1 > x2 &&
           y1 < y2 + h2 &&
           y1 + h1 > y2;
  }

  // function draw() {
  
  //   if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
  //     let x = mouseX - img1.width / 2;
  //     let y = mouseY - img1.height / 2;
  //     image(img1, x, y);
  //   }
  // }