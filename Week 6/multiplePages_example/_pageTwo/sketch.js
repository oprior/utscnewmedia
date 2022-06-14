/* This js file directs users to either page 2 or page 3*/

function setup() {

    createCanvas(windowWidth, windowHeight);

    textSize(60);
    textAlign(CENTER);
    fill(0,255,0);

    text("This is page 2", windowWidth/2, windowHeight/2);

    let page1 = createA('/../index.html', 'Go to page 1');
    page1.position(100, 300);
    let page3 = createA('/../_pageThree/index.html', 'Go to page 3');
    page3.position(100, 400);
  
  }
  
  function draw() {
  
  //ellipse(width/2,height/2,100,100);  
  }
  
  function windowResized() { // this function detects when the window is moved, and resizes the canvas
  
    resizeCanvas(windowWidth, windowHeight); 
  
  }