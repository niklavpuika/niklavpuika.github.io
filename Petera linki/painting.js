let x, y;

let img1;
let img2;
let img3;
let img4;
let img5;

let site_background;

// Load the image.
function preload() {
  img1 = loadImage('1.png');
  img2 = loadImage('2.png');
  img3 = loadImage('3.png');
  img4 = loadImage('4.png');
  img5 = loadImage('5.png');
  site_background = loadImage('sand.JPG');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  image(site_background, 0, 0, windowWidth, windowHeight);
  frameRate(5);
}

function draw() {
  
  x = random(0, windowWidth);
  y = random(0, windowHeight);
  image(img1, x, y);
  x = random(0, windowWidth);
  y = random(0, windowHeight);
  image(img2, x, y);
  x = random(0, windowWidth);
  y = random(0, windowHeight);
  image(img3, x, y);
  x = random(0, windowWidth);
  y = random(0, windowHeight);
  image(img4, x, y);
  x = random(0, windowWidth);
  y = random(0, windowHeight);
  image(img5, x, y);

}
