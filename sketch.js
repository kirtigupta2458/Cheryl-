var bg, player1, PCLvl1
var gameState = "Intro"
var lives = 3
var score = 0

function preload(){
 bg = loadImage("PCs/BackgroundLvl1.jpg")
player1 = loadImage("playerLvl1.png")
dropIMG = loadImage("Vaccine.png")
Play = loadImage("PlayButton.png")
germIMG = loadImage("Germ.png")
Next=loadImage("next.jpg")
}

function setup(){
 
canvas = createCanvas(displayWidth, displayHeight-200)

  Background = createSprite(2400,displayHeight/2,100,100 )
  Background.addImage(bg)
  Background.scale = 2

 PCLvl1 = createSprite(100, displayHeight-300, 10,10)
 PCLvl1.addImage(player1)
 PCLvl1.scale = 0.5

 PlayButton = createSprite(650,400,10,10)
 PlayButton.addImage(Play)
 PlayButton.scale = 0.5

 NextButton = createSprite(650,600,10,10)
 NextButton.addImage(Next)
 NextButton.scale = 0.1

 dropsGroup= new Group()
 germsGroup = new Group()

 
}

function draw(){
  background("cream")



  if(gameState==="Intro"){

    Background.visible = false;
    PCLvl1.visible=false;
    NextButton.visible = false
    PlayButton.visible = true
    
    textSize(50)
    fill("darkblue")
    textAlign(CENTER)
    text("COVID APOCALYPSE",displayWidth/2,200)

    if(mousePressedOver(PlayButton)&&gameState==="Intro"){
      gameState = "Intro-Level1"

    }

  }





  if(gameState==="Intro-Level1"){
    Background.visible = false;
    PCLvl1.visible=false;
    NextButton.visible = true
    PlayButton.visible = false
    
    textSize(50)
    fill("darkblue")
    textAlign(CENTER)
    text("Level !",displayWidth/2,200)
    textSize(30)
    text("Use Space key to shoot the germs.",displayWidth/2,350)
    text("Use Arrow keys to move the player",displayWidth/2,450)

    if(mousePressedOver(NextButton)&&gameState==="Intro-Level1"){
      gameState = "Level1"

    }
  }






  if(gameState==="Level1"){
    Background.visible = true;
    PCLvl1.visible=true;
    NextButton.visible = false
    PlayButton.visible = false;

   
    camera.position.y = displayHeight/2

    if(keyDown(RIGHT_ARROW) )[
      PCLvl1.x = PCLvl1.x+10
    ]
    if(keyDown(LEFT_ARROW) )[
      PCLvl1.x = PCLvl1.x-10
    ]
    if(keyDown(UP_ARROW) )[
      PCLvl1.y = PCLvl1.y-10
    ]
    if(keyDown(DOWN_ARROW) )[
      PCLvl1.y = PCLvl1.y+10
    ]

    if(keyDown("space")){
      if(frameCount%5===0){
        Drops();
      }
    }
    if(frameCount%10===0){
    Germs();
    }
    Background.velocityX=-2

    if(dropsGroup.isTouching(germsGroup)){
      dropsGroup[0].destroy()
      germsGroup[0].destroy()
    }

    if(Background.x<-2200){
      gameState="Intro-Level2"
    }

    console.log(Background.x)
 
  }







  
  if(gameState==="Intro-Level2"){



  }




 
  drawSprites()

}

function Germs(){
  if(frameCount%80===0&&Background.x>-2200){
    var y = random(200,displayHeight-200)
    germ = createSprite(displayWidth,y,10,10)
    germ.addImage(germIMG)
    germ.scale = 0.2
    germ.velocityX=-2
    germsGroup.add(germ)
  }
}

function Drops(){
 
  drops = createSprite(PCLvl1.x+20,PCLvl1.y-40,30,30)
  drops.addImage(dropIMG)
  drops.scale = 0.1
  drops.velocityX = 5
  dropsGroup.add(drops)
  
}