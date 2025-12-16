function printText() {
   fill(color(0));
   text("Press any key to clear text", 20, 50);
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Start with a white background
  background(color(255));
  noStroke(); // ;We will use fill to define the color of our 'line'
  printText(); 
}

function draw() {
}

function fillColor() {
  var colors1 = ["#264653", "#287271", "#2a9d8f", "#8ab17d", "#e9c46a", "#f4a261", "#e76f51"]
  // Set the fill color and thickness (strokeWeight can also be used with line() function)
  var Color1 = color(colors1[Math.floor(random(0, colors1.length))]);
  fill(Color1);
}

// This function is called every time the mouse is dragged
function mouseDragged() {
  // Calculate the distance (speed) between the current and previous mouse position
  let speed = dist(mouseX, mouseY, pmouseX, pmouseY);
  
  // Map the speed to a thickness range (e.g., from 1 to 30 pixels)
  // Inverse mapping: faster movement = smaller thickness
  let lineThickness = map(speed, 0, 50, 30, 1); 
  lineThickness = constrain(lineThickness, 1, 30); // Keep thickness within bounds
  fillColor();
  ellipse(mouseX, mouseY, lineThickness, lineThickness); // Draw an ellipse as our "line" segment
}

// This function allows for drawing a single point if the user just clicks
function mousePressed() {
    fillColor();
    ellipse(mouseX, mouseY, 15, 15);
    rect(mouseX, mouseY, 15, 15);
}

// Press 'c' key to clear the canvas or cycle colors
function keyPressed() {
   background(255); // Clear to white
   printText();
}

