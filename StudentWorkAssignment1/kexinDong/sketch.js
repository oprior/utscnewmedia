let phase = 0;
let zoff = 0;
let vertices = [];
let lines = ["March 11, 2020 - COVID-19 declared a pandemic", "June, 2020 - Retail sales supass pre-COVID-19 levels", "September, 2020 - Secod wave (Beta variant) begins", "December, 2020 - COVID-19 vaccinations begins", "March/April, 2021 - Third wave (Gamma variant) begins", "December, 2021 - Fifth wave (Omicron variant) begins", "January, 2022 - Canada surpasses 33,000 deaths for Covid-19"];
let counter = 0; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  
   background(102, 51, 0);
  stroke(153, 76, 0);
  fill(200);
  textFont("Georgia");
  textSize(12);
  text(lines[counter], width/3, height/9.5);
  translate(width / 2, height / 2);
  stroke(153, 76, 0);
  strokeWeight(9);
  noFill(); 
  
let noiseMax = 1.2;
  for (let a = 0; a < TWO_PI; a += radians(5)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, height/4, height / 2);
    let x = r * cos(a);
    let y = r * sin(a);
    vertices.push([x, y]);
  }
    phase += 0.003;
  zoff += 0.01;
// noLoop();
  
  for (let j = 1; j > 0.04; j -= 0.05) {
    push();
    scale(j);
    beginShape();
    for (let i = 0; i < vertices.length; i++) {
    vertex(vertices[i][0], vertices[i][1]);
    }
    vertex(vertices[0][0], vertices[0][1]);
    endShape(CLOSE);
  }
  
}

function draw() {
  
}

function mousePressed() {
  if (counter < lines.length-1) {
  counter++;
  } else {
  counter = 0;}
  
  background(102, 51, 0);
  stroke(153, 76, 0);
  fill(200);
  textFont("Georgia");
  textSize(12);
  text(lines[counter], width/3, height/9.5);
  translate(width / 2, height / 2);
  stroke(153, 76, 0);
  strokeWeight(9);
  noFill(); 
  
let noiseMax = 1.2;
  for (let a = 0; a < TWO_PI; a += radians(5)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, height/4, height / 2);
    let x = r * cos(a);
    let y = r * sin(a);
    vertices.push([x, y]);
  }
    phase += 0.003;
  zoff += 0.01;
// noLoop();
  
  for (let j = 1; j > 0.04; j -= 0.05) {
    push();
    scale(j);
    beginShape();
    for (let i = 0; i < vertices.length; i++) {
    vertex(vertices[i][0], vertices[i][1]);
    }
    vertex(vertices[0][0], vertices[0][1]);
    endShape(CLOSE);
  }
} 