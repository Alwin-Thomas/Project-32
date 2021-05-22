const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

var response
var responseJSON1
    
var datetime1
var hour


function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);

    
    // add condition to check if any background image is there to add
    fill("black")
    textSize(30)

    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100)
    }else if(hour==0){
        text("Time : 12 AM", 100,100)
    }else{
        text("Text : "+ hour + " AM", 50,100)
       
    }

    Engine.update(engine);

    // write code to display time in correct format here
    

}

async function getBackgroundImg(){

    // write code to fetch time from API
     response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
     responseJSON1=await response.json()
    
     datetime1=responseJSON1.datetime
    //console.log(responsejson)
    console.log(datetime1)

     hour=datetime1.slice(11,13)
    console.log(hour)
    console.log(hour%12)

    if(hour>=04 && hour<06){
       bg ="sunrise1.png"
    }else if(hour>=06 && hour<=08){
        bg ="sunrise2.png"
    }else if(hour>=08 && hour<=10){
        bg="sunrise3.png"
    }else if(hour>=10 && hour<=12){
        bg="sunrise4.png"
    }else if(hour>=12 && hour<=14){
        bg="sunrise5.png"
    }else if(hour>=14 && hour<=16){
        bg="sunrise6.png"
    }else if(hour>=16 && hour<=18){
        bg="sunset7.png"
    }else if(hour>=18 && hour<=20){
        bg="sunset9.png"
    }else if(hour>=23 && hour<=0){
        bg ="sunset10.png"
    }else if(hour>=0 && hour<=02){
        bg ="sunset11.png"
    }else{
        bg ="sunset12.png"
    }
    
    backgroundImg=loadImage(bg)

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
