var mar,marimg
var barcobarcoimg
var barcoimg
function preload(){


  barcoimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
marimg = loadImage("sea.png")


}

function setup(){
  createCanvas(400,400);
  mar = createSprite(400,200,10,10)
barco = createSprite(150,200,10,10)

barco.addAnimation("barco",barcoimg)
barco.scale = 0.3

mar.addImage(marimg)
mar.scale = 0.24
mar.velocityX = -4

}

function draw() {
  background("blue");
    drawSprites();

    if(mar.x < 0){
      mar.x = mar.width / 10
    }
}
