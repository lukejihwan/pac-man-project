class RightSensor extends Sensor{
    constructor(container, color, x, y, width, height, velX, velY){
        super(container, color, x, y, width, height, velX, velY);
    }

    //barArray[3]=new Sensor(document.body, "purple", mario.x+mario.width+1, mario.y+2, 1, mario.height*(80/100));//우
    tick(){
        
        this.x=enemy1.x+enemy1.width-2;
        this.y=enemy1.y+1;

        for(let a=0;a<tileArray.length;a++){
                if(collisionCheck(this, tileArray[a])){
                    // enemy1.x=tileArray[a].x- enemy1.width-3;
                    console.log("오른쪽 센서 감지");
                } else {
                    // console.log("오른쪽센서 미감지");
                }
        }        

    }
}