
let dataServer;
let pubKey = "PASTE YOUR PUBLISH KEY HERE";
let subKey = "PASTE YOUR SUBSCRIBE KEY HERE";
let secretKey = "PASTE YOUR SECRET KEY HERE";

let channelName = "YOUR CHANNEL NAME HERE";


let occupancy = 0; // variable we use to sense how many people are on the page

/**THIS SECTION BELOW IS NEW AND WILL ALLOW YOU TO RANDOMLY GENERATE USER NAMES**/

let you; // variable to randomly generate new UUIDs upon load

function preload() { 

// logic to create a random UUID
  you = random(0,1000000); 
  console.log(you);
  you = int(you);
  console.log(you);
  you = you.toString();

}
/** END OF NEW CONTENT**/ 

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(255);
    
    // initialize our PubNub Server
    dataServer = new PubNub({
      subscribeKey: subKey,
      publishKey: pubKey,
      uuid: you,
      secretKey: secretKey,
      heartbeatInterval: 0,
    });

    dataServer.subscribe({ channels: [channelName],   withPresence: true });
    // listen for messages coming through the subcription feed on this specific channel. 
    dataServer.addListener({ message: readIncoming, presence: whoisconnected });
   
}

function draw() {

    background(255);

    text("There are " +  occupancy + " people online", windowWidth/2, windowHeight/2);

    sendTheMessage(); 
     
}
function mousePressed() {

    sendTheMessage();// send the message of the cursor location every click. 
    
}

/// PubNub logic below
function sendTheMessage() {
    // Send Data to the server to draw it in all other canvases
    dataServer.publish({
      channel: channelName,
      message: {
        x: mouseX,
        y: mouseY,
      },
    });
  }
  
  function readIncoming(inMessage) {
    // when new data comes in it triggers this function,
    // we call this function in the setup
  
    /*since an App can have many channels, we ensure that we are listening
    to the correct channel */
  
    if (inMessage.channel == channelName) {
  
     x = inMessage.message.x // get the mouseX value from the other people
     y = inMessage.message.y // get the mouseY value from the other people
     who = inMessage.publisher; // who sent the message
  
    }
  }

  function whoisconnected(connectionInfo) {

    console.log(connectionInfo);
  
    occupancy = connectionInfo.occupancy;
  
    console.log(occupancy);
  
  }
