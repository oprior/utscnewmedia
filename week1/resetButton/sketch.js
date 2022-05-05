/* This code counts how many times the user has clicked on the page. Everytime a user clicks, the counter increases 

The user can click the reset button which sets the counter to -1. This is effectively 0, because when the user clicks reset it is counted as one click (1 + (-1)= 0)*/

let counter = 0; // variable we will use to count our clicks
let resetButton; // variable that will hold the reset buttons

function setup() {
    
  createCanvas(windowWidth, windowHeight); // create a canvas the size of the page
  
  fill (0,255,255); // make the text turquoise
  textSize(20); // change font size
  textAlign(CENTER); // align text in the center
  
  resetButton = createButton("Reset Counter"); // Create button makes a button object on the page. We assign that to the variable resetButton
  resetButton.position((windowWidth/2) - (resetButton.width/2), 50+ (windowHeight/2)); // We declare the position of the button. The button is placed in the center of the page and 50 pixels lower than the counter text)
  resetButton.mousePressed(resetCounter); // call function resetCounter when the resetButton is pressed
}

function draw() {
    
  background(0); // make the background black
  if (counter > 0) { // display text once people start clicking
    text('Clicked '+counter+' times', windowWidth/2, windowHeight/2); // display the amount clicked in the center of the page.
    } else { // if no one has clicked the screen yet
        text('Click to start counting', windowWidth/2, windowHeight/2); // prompt folks to start counting

    }
}

function mousePressed() { // when the mouse is pressed

  counter++; // increase the value of the counter by one counter++ is the same as counter + 1
  console.log(counter); // console.log the counter so that you can see what is going on.

}

function resetCounter() { // when resetButton is pressed, call this function
  
  counter = -1; // reset the variable counter to -1
  
}