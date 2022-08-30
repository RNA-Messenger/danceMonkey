let button, colBG, colFill, left;

function setup() {
  createCanvas(300, 300);
  rectMode(CENTER);
  colBG = color(255);
  colFill = color(255);
  left = true;
  button = createButton("Dance Monkey");
  button.position(100, 340);
  button.mousePressed(changeBG);
}

function move() {
  left = !left;
}

function changeBG() {
  move();
  colBG = color(random(255), random(255), random(255));
  colFill = color(random(255), random(255), random(255));
}

function draw() {
  background(colBG);
  fill(colFill);
  rect(150, 200, 20, 100);
  ellipse(150, 120, 60, 60);
  ellipse(140, 120, 16, 32);
  ellipse(160, 120, 16, 32);
  left ? line(135, 155, 80, 190) : line(135, 155, 190, 190);
  left ? line(170, 155, 120, 190) : line(163, 155, 220, 190);
}
