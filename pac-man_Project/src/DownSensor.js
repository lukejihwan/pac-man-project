class DownSensor extends Sensor{
    constructor(container, color, x, y, width, height, velX, velY){
        super(container, color, x, y, width, height, velX, velY);
    }

    tick(){
        //barArray[1]=new Sensor(document.body, "purple", mario.x+2, mario.height+1, mario.width*(80/100), 1);//하         
        // console.log(enemy1.width);
        this.x=enemy1.x+1;
        this.y=enemy1.y+enemy1.height-2;//이미지 크기에 벗어나지 않도록 설정할것!
        
        for(let a=0;a<tileArray.length;a++){
                if(collisionCheck(this, tileArray[a])){
                    // enemy1.y=(tileArray[a].y - enemy1.height);
                    console.log("아래쪽 센서 감지");
                } else {
                    // console.log("아래쪽센서 미감지");
                }
            
        }
        
    }
}