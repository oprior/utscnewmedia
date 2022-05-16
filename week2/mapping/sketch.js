function setup() {
  createCanvas(windowWidth, windowHeight); // create the Canvas
}

function draw() {
  
  let speed = abs(winMouseX - pwinMouseX); // get the speed of the cursor moving
  //console.log(speed);
  let r = map(mouseX, 0, windowWidth, 0, 255); // map the values of red with the x-axis
  let g = map(mouseY, 0, windowHeight, 0, 255); // map the values of green with the y-axis
  let b = map(speed, 0, 50, 0, 255); // map the values of blue from the speed of the cursor
  background(r, g, b); // dynamically create the background
}
