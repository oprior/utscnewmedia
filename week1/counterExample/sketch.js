/* This code counts how many times the user has clicked on the page. Everytime a user clicks, the counter increases */

let counter = 0; // variable we will use to count our clicks

function setup() {
    
  createCanvas(windowWidth, windowHeight); // create a canvas the size of the screen
  
  fill (0,255,255); // make the text turquoise
  textSize(20); // change font size
  textAlign(CENTER); // align text in the center
  
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