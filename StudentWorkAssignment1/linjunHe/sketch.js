let counter=0
function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20)
  text("KEEP WHITE OR LOSE",1/3*windowWidth,windowHeight)
}

function draw(){
fill(random(0,255),random(0,255),random(0,255))
ellipse(random(5,2/3*windowWidth),random(5,2/3*windowHeight),random(1,10))
textSize(random(1,8))
text("You"+"Clicked " + counter + " times", random(2/3*windowWidth), random(2/3*windowHeight))
 noStroke();
}


function mousePressed(){
  fill(255,255,255);
  ellipse(random(5,2/3*windowWidth),random(5,2/3*windowHeight),random(50,200))
  square(random(5,2/3*windowWidth),random(5,2/3*windowHeight),random(50,200));
  counter++;
  console.log(counter);
}
