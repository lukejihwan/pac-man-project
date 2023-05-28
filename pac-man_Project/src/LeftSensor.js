class LeftSensor extends Sensor{
    constructor(container, color, x, y, width, height, velX, velY){
        super(container, color, x, y, width, height, velX, velY);
    }
    
    //barArray[2]=new Sensor(document.body, "purple", mario.x-1, mario.y+2, 1, mario.height*(80/100));//좌
    tick(){
        this.x=enemy1.x;
        this.y=enemy1.y+1;
        
        for(let a=0;a<tileArray.length;a++){
                if(collisionCheck(this, tileArray[a])){
                    console.log("왼쪽센서 감지");
                    // enemy1.x=tileArray[a].x+tileArray[a].width;
                } else {
                    // console.log("왼쪽센서 미감지");
                }
        }     

    }
}