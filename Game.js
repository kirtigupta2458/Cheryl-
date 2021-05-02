class Game{
    constructor(){

    }

    getState(){
        database.ref("gameState").on("value", (data) =>{
            gameState = data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState:state
        })
    }

    start(){
        if(gameState === 0){
            intro = new Intro()
            intro.display();
        }

    }

    Level1(){

        Background = createSprite(2400,displayHeight/2,100,100 )
        Background.addImage(bg)
        Background.scale = 2

        PCLvl1 = createSprite(100, displayHeight-300, 10,10)
        PCLvl1.addImage(player1)
        PCLvl1.scale = 0.5

        camera.position.x = PCLvl1.x
        camera.position.y = displayHeight/2

        if(keyDown(RIGHT_ARROW) )[
        PCLvl1.x = PCLvl1.x+10
        ]
        if(keyDown(LEFT_ARROW) )[
        PCLvl1.x = PCLvl1.x-10
        ]

        if(keyDown("space")){
        drops = new Drops();
        drops.display()
        
        }
        drawSprites();

    }

    
}