var mouseGiftImg, mouseGift, mouseMovingImg, mouseMoving, mouseInspectImg, mouseInspect,gardenImg,garden
var catSitImg, catSit, catMovingImg, catMoving, catStopImg, catStop
var tom, cat

function preload() {
    //load the images here
    mouseGiftImg= loadImage("mouse1.png")
    mouseMovingImg= loadImage("mouse2.png","mouse3.png")
    mouseInspectImg= loadImage("mouse4.png")
    gardenImg= loadImage("garden.png")
    catSitImg= loadImage("cat1.png")
    catMovingImg= loadImage("cat2.png","cat3.png")
    catStopImg= loadImage("cat4.png")
    gardenImg= loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden= createSprite(500,400)
    garden.addImage("garden",gardenImg)
    //tom= createSprite()

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
