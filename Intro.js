class Intro{
    constructor(){
        
    }

    display(){
        PlayButton = createSprite(650,400,10,10)
        PlayButton.addImage(Play)
        PlayButton.scale = 0.5

        textSize(50)
        fill("darkblue")
        textAlign(CENTER)
        text("COVID APOCALYPSE",displayWidth/2,200)
    
        if(mousePressedOver(PlayButton)){
            game.update(1)
      
          }
          drawSprites();
    }
}