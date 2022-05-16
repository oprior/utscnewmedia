let cam; 
let circleArray = [0,]

function setup() {
  createCanvas(windowWidth, windowHeight); 

}

function draw() {

  for (let i = 1; i < 10; i++ ) {
     ellipse(25 * i, 25 * i, 25, 25);
  }

}