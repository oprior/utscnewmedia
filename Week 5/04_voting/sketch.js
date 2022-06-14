let dataServer;
let pubKey = "pub-c-3f2a3432-47d8-414c-a605-4c9e42f7e6e5";
let subKey = "sub-c-bb8ed550-72ad-4edc-a9f8-38f55157dec6";
let secretKey = "sec-c-ZWI1OGZiNGMtYmVjYi00ZjVjLWI2OTctYTYyOWEzMDA2ZmY0";

//name used to sort your messages. used like a radio station. can be called anything
let channelName = "voteOnColours";

// array that we keep all the cursors in
let cursors = [];

// counters for showing the vote on the screen
let leftCounter = 0;
let rightCounter = 0;
let vote;
let sendVote;

// refresh every 10 seconds variables
let refresh = 10000;
let lastRefresh = 0;

let countDown = 10;
let lastCountDownRefresh = 0;
let countDownRefresh = 1000;

// colour variables
let r;
let g;
let b;

let r2;
let g2;
let b2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  // initialize pubnub
  dataServer = new PubNub({
    subscribeKey: subKey,
    publishKey: pubKey,
    uuid: "Your Name Here",
    secretKey: "secretKey",
    heartbeatInterval: 0,
  });

  //attach callbacks to the pubnub object to handle messages and connections
  dataServer.addListener({ message: readIncoming});
  dataServer.subscribe({ channels: [channelName] });

  // randomly select colours for the screen to show right away
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  r2 = random(0,255);
  g2 = random(0,255);
  b2 = random(0,255);

}

function draw() {

  background(255);
  // every 10 seconds choose new colours and restart the counters and countdown
  if (millis() - lastRefresh > refresh )  {

    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    r2 = random(0,255);
    g2 = random(0,255);
    b2 = random(0,255);

    leftCounter = 0;
    rightCounter = 0;
    countDown = 10;

    lastRefresh = millis();
  }

  // text styles
  textSize(100);
  textAlign(CENTER);

  background(r2, g2, b2);

  fill(r, g, b);
  noStroke();
  rect(0, 0, windowWidth/2, windowHeight); // half the background
  
  fill(255);
  text("THIS ONE", windowWidth*0.25, windowHeight/2);
  text("Votes: " + leftCounter, windowWidth*0.25, (windowHeight/2) + 300);

  
  fill(255);
  text("NO THIS ONE", windowWidth*0.75, windowHeight/2);
  text("Votes: " + rightCounter, windowWidth*0.75, (windowHeight/2) + 300);


  text("Which colour do you like more?", windowWidth/2, windowHeight*0.2);

  textSize(30);
  
  // every 10 seconds restart the countdown for choosing the colours
  if (millis() - lastCountDownRefresh > countDownRefresh) {

    countDown--;
    lastCountDownRefresh = millis();
  }

  text("Count down: " + countDown + " seconds left", windowWidth/2, windowHeight*0.9);
}


function mousePressed() {


  if (mouseX < windowWidth/2) { 
    // if mouse is pressed while on the left side of the screen, send the left vote 

     sendVote = "left";
  } else {
    // if mouse is pressed while on the right side of the screen, send the right vote 

     sendVote = "right";
  }

  sendTheMessage(sendVote); // send the message

} 
/// PubNub logic below

function sendTheMessage(vote) {
  dataServer.publish({
    channel: channelName,
    message: {
      vote: vote
    },
  });
}

function readIncoming(inMessage) {
  
  if (inMessage.channel == channelName) {

   let incomingVote = inMessage.message.vote;
   
   if (incomingVote == "left") {

    leftCounter++;

   } else if (incomingVote == "right") {

    rightCounter++;

   }
 
  }
}
