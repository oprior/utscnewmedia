/* This sketch directs users to either pages 2 or pages 3 */

function setup() {

    createCanvas(windowWidth, windowHeight);

    textSize(60);
    textAlign(CENTER);
    fill(255,0,0);

    text("This is page 1", windowWidth/2, windowHeight/2);

    let page2 = createA('/../_pageTwo/index.html', 'Go to page 2'); // make a link
    page2.position(100, 300);
    let page3 = createA('/../_pageThree/index.html', 'Go to page 3'); // make a link
    page3.position(100, 400);


  
  }
  
  function draw() {
  
  
  }
  
  function windowResized() { // this function detects when the window is moved, and resizes the canvas
  
    resizeCanvas(windowWidth, windowHeight); 
  
  }