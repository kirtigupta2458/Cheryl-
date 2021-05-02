class Drops{
    constructor(){
    }

display(){

        drops = createSprite(PCLvl1.x+20,PCLvl1.y-40,30,30)
        drops.addImage(dropIMG)
        drops.scale = 0.2
        drops.velocityX = 5
        }
}