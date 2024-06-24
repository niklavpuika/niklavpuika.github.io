

let gridSize = 1; // Initial grid size
let step = 50; // Distance between steps
let positions = [];
let diceRolls = [];
let currentIndex = 0;
let totalShapes = 0;

function setup() {
  createCanvas(800, 800);
  generateDiceRolls();
  generatePositions(gridSize);
  totalShapes = gridSize * gridSize;
  frameRate(4.5); // Increase the frame rate to make it 1.5 times faster
}

function draw() {
  if (currentIndex < diceRolls.length) {
    let pos = positions[currentIndex];
    let dice = diceRolls[currentIndex];
    let t = currentIndex / totalShapes; // Calculate interpolation factor
    let col = lerpColor(color(0, 0, 255), color(255, 0, 0), t); // Interpolate color from blue to red
    drawShape(dice, pos.x, pos.y, step, col);
    currentIndex++;
  } else {
    gridSize++;
    generateDiceRolls();
    generatePositions(gridSize);
    totalShapes = gridSize * gridSize;
    currentIndex = 0;
  }
}

function generateDiceRolls() {
  diceRolls = [];
  for (let i = 0; i < gridSize * gridSize; i++) {
    diceRolls.push(floor(random(1, 7)));
  }
}

function generatePositions(size) {
  positions = [];
  let startX = width / 2 - (size / 2) * step;
  let startY = height / 2 - (size / 2) * step;

  for (let ring = 0; ring < (size + 1) / 2; ring++) {
    let x = startX + ring * step;
    let y = startY + ring * step;

    // Top row (left to right)
    for (let i = 0; i < size - 2 * ring; i++) {
      positions.push({ x: x + i * step, y: y });
    }

    // Right column (top to bottom)
    for (let i = 1; i < size - 2 * ring; i++) {
      positions.push({ x: x + (size - 2 * ring - 1) * step, y: y + i * step });
    }

    // Bottom row (right to left)
    for (let i = 1; i < size - 2 * ring; i++) {
      positions.push({ x: x + (size - 2 * ring - 1) * step - i * step, y: y + (size - 2 * ring - 1) * step });
    }

    // Left column (bottom to top)
    for (let i = 1; i < size - 2 * ring - 1; i++) {
      positions.push({ x: x, y: y + (size - 2 * ring - 1) * step - i * step });
    }
  }
}

function drawShape(dice, x, y, size, col) {
  stroke(col);
  strokeWeight(2);
  switch (dice) {
    case 1:
      line(x - size / 2, y, x + size / 2, y);  // Horizontal line
      break;
    case 2:
      line(x, y - size / 2, x, y + size / 2);  // Vertical line
      break;
    case 3:
      line(x - size / 2, y - size / 2, x + size / 2, y + size / 2);  // Diagonal TL to BR
      line(x + size / 2, y - size / 2, x - size / 2, y + size / 2);  // Diagonal TR to BL
      break;
    case 4:
      rect(x - size / 2, y - size / 2, size, size);  // Square
      break;
    case 5:
      line(x - size / 2, y - size / 2, x + size / 2, y + size / 2);  // Diagonal TL to BR
      break;
    case 6:
      line(x + size / 2, y - size / 2, x - size / 2, y + size / 2);  // Diagonal TR to BL
      break;
  }
}
