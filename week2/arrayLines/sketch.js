/* In this exmaple, we take a set of data and map it on the page in numerical order, distributing the numbers in an equal distance from eachother*/

let array1 = [1993, 1993, 1993, 2002, 2013, 1973, 2021, 1989]; // our array 
let count; // varibale to determine how long the array is
let difference; // difference between largest and smaller number in array
let spacing; // spacing on the pace
let d; // diameter for ellipse

function setup() {
  createCanvas(windowWidth, windowHeight); // canvas to the size of the page
}

function draw() {

  count = array1.length; // length returns how many elements are in the array 
  
  array1 = sort(array1, count); // sort the array
  
  line(0, windowHeight/2, windowWidth, windowHeight/2); // draw a line halfway through the page
  
  difference = max(array1) - array1[0]; // find the difference between the largest and smallest number in the array 

   spacing = windowWidth/difference; // divide the width of the page by the difference of the largest and smallest number 
   d = difference/array1.length; // dynamically set the size of the ellipses based on how many entries there are in the array


   for (let i = 0; i < difference; i++) { // create as many lines equal to the difference
      
    line(spacing * (i+1), (windowHeight/2) - 25, spacing * (i+1),(windowHeight/2) +25); // muptiply the x position in each by the position in the for loop that it is in
  
  }

    for (let i = 0; i < array1.length; i++) { // for every entry in the array
    
    fill(0); // fill the ellipse to be black
    
    if (array1[i] == array1[i+1]){ // if the number that the element is looping in is equal to the number before, make that circle bigger
        d = d * 2;
        console.log(d);
    } else {
        d = difference/array1.length; // if not reset the size of the diameter
    }
    ellipse(e*spacing, windowHeight/2, d); // draw the ellipse
    
    }
  
}