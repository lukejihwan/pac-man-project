class Hero{
    constructor(container, x, y, width, height, velX, velY, src){
        this.container=container;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;
        this.src=src;

        this.img=document.createElement("img");
        this.img.style.position="absolute";
        this.img.src="./images/"+this.src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.container.appendChild(this.img);
    }

    tick(){
        //여기에다가 hero충돌감지 코드를 짜는 것은 어떨까??
        //충돌체크는 객체간에만 가능하다! 주의하자.
        
        this.x+=this.velX; //여기서 주의! 여기는 px이 들어갈 필요가 없다.
        this.y+=this.velY; 

        
        for(let i=0; i<tileArray.length; i++){ //이렇게 하면 메모리에 상당한 무리가 갈것 같은데 어떨까?
            let result=collisionCheck(this, tileArray[i]);
            if(this.velX==Speed && result){
                this.velX=0;
                this.x = tileArray[i].x-this.width-resolveError;
            }else if(this.velY==Speed && result){
                this.velY=0;
                this.y = tileArray[i].y-this.height-resolveError;
            }else if(this.velX==(-Speed) && result){
                this.velX=0;
                this.x = tileArray[i].x+map_Width+resolveError;
            }else if(this.velY==(-Speed) && result){
                this.velY=0;
                this.y = tileArray[i].y+map_height+resolveError;
            }
                //hero에 속도가 있을 때 부딪히면 속도가 0이 되게 하겠다는 원리
                // console.log(hero);
                // console.log("잘 돌아가");
                //이렇게만하면 벽을 만나 멈춰도 또 누를면 한 걸음씩 갈듯하다.
                //그래서 이미지 너비 만큼 밖으로 나오게 해주었다.
        }
        this.removeFood();    
    }
    removeFood(){
        for(let i=0; i<foodArray.length; i++){
            let result=collisionCheck(this, foodArray[i]);
            if(result){ //충돌했다면..
                //1)화면에서 제거
                console.log(foodArray[i], i)
                wrapper.removeChild(foodArray[i].img);
                // this.container.removeChild(foodArray[i].img);
                //그래픽처리를 먼저하고 지워야 하는 거 잊지말자.
                //2)배열에서 제거
                foodArray.splice(i,1);
                //removeChild는 descendant를 삭제할 수는 없는 것이다.
                //this.container의 child가 맞는지 확인해보자.
            
            }
        }
        this.GetScore();
    }

    GetScore(){
        let score=document.getElementById("score_area");
        score.style.textAlign="center";
        score.style.fontSize=30+"px";
        //foodArray.length를 이용하여 점수를 올려보자.
        score.innerText=((102-foodArray.length)*10+"점");
    }
        
    
    render(){ //그래픽 처리
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}