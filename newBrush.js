//ABSTRACT by Georgina Yeboah
//An Application that translates intital strokes to an installation displaying 
// a variety of strokes in different orinetations. 
//Some parts of code used from the CC18 experiment 4/P5/PunNub/Example 5 Common Canvas Dots 

// server variables
var dataServer;
var pubKey = 'pub-c-3557ba95-f7b0-4d5e-9ac6-d83253a53e79'; 
var subKey = 'sub-c-3debba58-ebcf-11e8-ba08-f2848cfa311c';

//variables for the size and color of your circle


var brushR;
var brushG;
var brushB;
//var brushRad;
var diffS;
var eFill;
var eBrushRad;

//var bubbleStroke;
//var strokeUp; //up stroke
//var strokeDia; //diagonal stroke

//size of the active area


//name used to sort your messages. used like a radio station. can be called anything
var channelName = "Abstract";
function setup() 
{
  getAudioContext().resume();
  createCanvas(windowWidth, windowHeight);
  
  
  
  //pick your random size + color
  
   brushR = floor(random(0,255));
  brushG = floor(random(0,255));
  brushB = floor(random(0,255));
  transB = floor(20);
  //eFill = floor(random(60, 255));

  diffS = 20;
  //bubbleStroke = ellipse(mouseX, mouseY, 50,50);
  //brushRad = floor(random(5,50));
  eBrushRad = 50;
   // initialize pubnub
  dataServer = new PubNub(
  {
    publish_key   : pubKey,  //get these from the pubnub account online
    subscribe_key : subKey,  
    ssl: true  //enables a secure connection. This option has to be used if using the OCAD webspace
  });
  
  //attach callbacks to the pubnub object to handle messages and connections
    dataServer.addListener({ message: readIncoming,  readIncoming, presence: whoisconnected })

  dataServer.subscribe({channels: [channelName]});


  //draw a frame that is the same color as your brush

  //stroke(255);
  //strokeWeight(10);
  // line(pmouseX, pmouseY, mouseX, mouseY);
  //noFill();
 
  background(0);


}

function draw() 
{
	
///all the drawing is happing in the readIncoming function

}



function intBrush() {

	  stroke(255);
  strokeWeight(10);
   line(pmouseX, pmouseY, mouseX, mouseY);


}

///uses built in mouseDragged function to send the data to the pubnub server
function mouseDragged() {
  // Send Data to the server to draw it in all other canvases
 intBrush();

  //noFill();

  dataServer.publish(
    {
    	//channel object
      channel: channelName,

      message: 
      {       //set the message objects property name and value combos    
      
        x: mouseX,
        y: mouseY,
        pX: pmouseX,
        pY: pmouseY,
        sW: diffS, 
        r: brushR,
        g: brushG,
        b: brushB,
     // rad: brushRad, 
      }

        //new Brush Object
        
      



    });

}

function readIncoming(inMessage) //when new data comes in it triggers this function, 
{                               // this works becsuse we subscribed to the channel in setup()
  
  // draw a circle on the screen if the user is someone else
  if(inMessage.channel == channelName)
  {
    //noStroke();
    //fill(inMessage.message.r, inMessage.message.g, inMessage.message.b);  //read the color values from the message
  //  ellipse(inMessage.message.x, inMessage.message.y, inMessage.message.rad, inMessage.message.rad);  //read the size and postion data and draw the ellipse
   //stroke(inMessage.message.r, inMessage.message.g, inMessage.message.b);


//Line

 strokeWeight(inMessage.message.sW);
 stroke(inMessage.message.r, inMessage.message.g, inMessage.message.b);
 line(inMessage.message.pX, inMessage.message.pY, inMessage.message.x, inMessage.message.y);

 //Ellipse


  }
}

function whoisconnected(connectionInfo)
{

}