//  Randomly draw text inputs on the page, increase the size of text based on how many times input values have been added. 

let button1; // create a button
let button2; // create a button

let input1; // create an input
let input2; // create an input

function setup() {

  createCanvas(windowWidth, windowHeight); // canvas the size of the window
  
  noStroke(); // remove stroke
  fill(0); // make a black rectangle half of the canvas
  rect(windowWidth/2,0, windowWidth/2, windowHeight);
  
  fill(255); // make a white rectangle half the canvas
  rect(0,0, windowWidth/2, windowHeight);
  
  button1 = createButton("Click me!!"); // create a button and give it a label
  button2 = createButton("No click me!");  // create a button and give it a label
  input1 = createInput(); // create an input
  input2 = createInput(); // create an input
  
  input1.position(windowWidth*0.1, 200); // position the input on the left hand side
  button1.position(input1.x + 150, 200); // position the button beside the input

  input2.position(windowWidth*0.6, 200); // position the input on the right hand side
  button2.position(input2.x + 150, 200); // position the button beside the input 

  button1.mousePressed(appendValue1); // call function resetCounter when the button1 is pressed
  button2.mousePressed(appendValue2); // call function resetCounter when the button2 is pressed

}

function draw() {
   
}

function appendValue1() {

  fill(255,0,0); // text is red
  
  append(array1, input1.value()); // add the input value to the array

  console.log("Left side: " +  array1); // log the array

  textSize(array1.length * 2); // change the size of the text by how many submissions have been made
  text(input1.value(), random(0, (width/2) - 100), random(0, windowHeight)); // randomly place the text on the left side of the canvas

  input1.value(''); // clear the input values
  
}

function appendValue2() {

  fill(0,0,255); // text is blue

  append(array2, input2.value()); // add the input value to the array

  console.log("Right side: " +  array2); // log the array

  textSize(array2.length * 2); // increase the size of text based on how many submissions have been made
  text(input2.value(), random((width/2)+100,windowWidth), random(0, windowHeight)); // randomly place the text on the right side of the canvas

  input2.value(''); // clear the values

}