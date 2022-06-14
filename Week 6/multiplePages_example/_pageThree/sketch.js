/* This file redirects users to page 1 or 3*/

function setup() {

    createCanvas(windowWidth, windowHeight);

    textSize(60);
    textAlign(CENTER);
    fill(0,0,255);

    text("This is page 3", windowWidth/2, windowHeight/2);

    let page1 = createA('/../index.html', 'Go to page 1');
    page1.position(100, 300);
    let page2 = createA('/../_pageTwo/index.html', 'Go to page 2');
    page2.position(100, 400);
  
  }
  
  function draw() {
  
  
  }
  
  function windowResized() { // this function detects when the window is moved, and resizes the canvas
  
    resizeCanvas(windowWidth, windowHeight); 
  
  }