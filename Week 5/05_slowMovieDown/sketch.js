/**
 * In this example we are tracking how many people are watching the movie with us. 
 * The more people there are, the slower the movie plays. 
 * 
 */

let dataServer;
let pubKey = "pub-c-3f2a3432-47d8-414c-a605-4c9e42f7e6e5";
let subKey = "sub-c-bb8ed550-72ad-4edc-a9f8-38f55157dec6";
let secretKey = "sec-c-ZWI1OGZiNGMtYmVjYi00ZjVjLWI2OTctYTYyOWEzMDA2ZmY0";

//name used to sort your messages. used like a radio station. can be called anything
let channelName = "slowMovieDown";

// used to collect the viewers of the movie
let viewers = [];

let who;  // help us track who is here
let presence; // help up track who is watching

let vid; // variable for video
let playing = false; // make sure the video is not playing right away

let firstClick = false; // the first click sends the message to PubNub

let vidSpeed; // variable to change the video speed

function preload() { // preload our yoyo video
  vid = createVideo("yoyo.mov"); 
  vid.pause();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  // initialize pubnub
  dataServer = new PubNub({
    subscribeKey: subKey,
    publishKey: pubKey,
    uuid: "Olivia",
    secretKey: "secretKey",
    heartbeatInterval: 0,
  });

  //attach callbacks to the pubnub object to handle messages and connections
  dataServer.addListener({message: readIncoming});
  dataServer.subscribe({channels: [channelName]});

  // style content
  background(255);

  textAlign(CENTER);
  textSize(150);

  text("Click to Begin!", windowWidth/2, windowHeight/2);


}

function draw() {

// we are not drawing anything!

}

function mousePressed() {

  if (firstClick == false) { 
    drawVideo();
    firstClick = true;
    sendTheMessage();
    // first click draws the video
  }

}

function sendTheMessage() {
  dataServer.publish({
    channel: channelName,
    message: "hello!" // message does not mean anything here, we just need a message. 
  });
}



function readIncoming(inMessage) {

  if (inMessage.channel == channelName) {
   who = inMessage.publisher;

      let newinput = true;
console.log(viewers);
      // code for compiling a list of users
      for(let i = 0; i<viewers.length;i++) {
        if(who==viewers[i]) {
          newinput = false;   
        }
      }
      if(newinput) {
        viewers.push(who); // if there is a new viewer, change the video speed
        changeVideoSpeed();
      }
  }
}

function changeVideoSpeed() {

  if (viewers.length == 1){ // if there is only one viewer than the video is a normal speed 

    vid.speed(1);

  } else {
console.log(viewers);
    vidSpeed = 1 + (viewers.length * 0.1) 
    vid.speed(vidSpeed);

  }

}

function drawVideo() { // draw the video to play on the canvas. 

  background(255);
  vid.size(windowWidth/2, windowHeight/2); 
  vid.position(0,0);
  vid.play();
  vid.loop();

}
