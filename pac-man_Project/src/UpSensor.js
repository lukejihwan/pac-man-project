class UpSensor extends Sensor{
    constructor(container, color, x, y, width, height, velX, velY){
        super(container, color, x, y, width, height, velX, velY);
    }

    tick(){
        //barArray[0]=new Sensor(document.body, "purple", mario.x+2, mario.y-1, mario.width*(80/100), 1);//상         
        
        this.x=enemy1.x+1;
        this.y=enemy1.y;

        for(let a=0; a<tileArray.length; a++){
                if(collisionCheck(this, tileArray[a])){
                    // enemy1.y=(tileArray[a].y+tileArray[a].height);
                    console.log("위쪽센서 감지");
                } else {
                    // console.log("위쪽센서 미감지");
                }
        }

    }

}