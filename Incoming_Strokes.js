//ABSTRACT by Georgina Yeboah
//An Application that translates intital simple strokes to a digital online canvas in real-time. 
//Some parts of the code were used from the CC18 experiment 4/P5/PunNub/Example 5 Common Canvas Dots by
//Kate Hartman and Nick Puckett. 

// server variables
var dataServer;
//var pubKey = 'pub-c-3557ba95-f7b0-4d5e-9ac6-d83253a53e79'; 
var subKey = 'sub-c-3debba58-ebcf-11e8-ba08-f2848cfa311c';

//variables for the size and color of your circle


//name used to sort your messages. used like a radio station. can be called anything
var channelName = "Abstract";
var canvas;
function setup() 
{
  getAudioContext().resume();
 canvas = createCanvas(windowWidth/2, windowHeight);
  
canvas.position(windowWidth/4,0);
  //pick your random size + color
  
   brushR = floor(random(0,255));
  brushG = floor(random(0,255));
  brushB = floor(random(0,255));
  transB = (80);
  //eFill = floor(random(60, 255));

  diffS = 20;
  //bubbleStroke = ellipse(mouseX, mouseY, 50,50);
  //brushRad = floor(random(5,50));
  eBrushRad = 40;
   // initialize pubnub
  dataServer = new PubNub(
  {
   // publish_key   : pubKey,  //get these from the pubnub account online
    subscribe_key : subKey,  
    ssl: true  //enables a secure connection. This option has to be used if using the OCAD webspace
  });
  
  //attach callbacks to the pubnub object to handle messages and connections
    dataServer.addListener({ message: readIncoming,  readIncoming, presence: whoisconnected })

  dataServer.subscribe({channels: [channelName]});


  //draw a frame that is the same color as your brush

 
  background(0);


  //BUBBLE ARRAY

}
function draw() 
{

///all the drawing is happing in the readIncoming function

}





function readIncoming(inMessage) //when new data comes in it triggers this function, 
{                               // this works becsuse we subscribed to the channel in setup()
  canvas.id('background');

  // draw a circle on the screen if the user is someone else
  if(inMessage.channel == channelName)
  {
    //noStroke();
    //fill(inMessage.message.r, inMessage.message.g, inMessage.message.b);  //read the color values from the message
  //  ellipse(inMessage.message.x, inMessage.message.y, inMessage.message.rad, inMessage.message.rad);  //read the size and postion data and draw the ellipse
   //stroke(inMessage.message.r, inMessage.message.g, inMessage.message.b);


//Line

 //lineBrush();
 //Ellipse
 //bubbleStroke.[i].display();
 //bubbleStroke.[i].fade();
//push();
//translate(300, 0);
fill(inMessage.message.r,inMessage.message.g,inMessage.message.b, inMessage.message.tB);  //read the color values from the message
noStroke();
ellipse(inMessage.message.eX, inMessage.message.eY, inMessage.message.eRad, inMessage.message.eRad); 

fill(random(inMessage.message.eX), random(inMessage.message.eY), inMessage.message.b, inMessage.message.triP);
triangle(inMessage.message.eX, inMessage.message.eY, inMessage.message.pX+20, inMessage.message.pY,inMessage.message.eX+25, inMessage.message.eY);
//pop();



  }
  
  
}



function whoisconnected(connectionInfo)
{

}