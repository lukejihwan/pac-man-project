class Enemy{
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
        //충돌체크는 객체간에만 가능하다! 주의하자.
        
        this.x+=this.velX; //여기서 주의! 여기는 px이 들어갈 필요가 없다.
        this.y+=this.velY; 


            //이것을 따로 함수를 만들어서 main에서 호출하면 문제가
            //enemy.tick호출되는 상황에서 서로 부딪히게 된다.
            //그래서 enemy.tick안으로 넣어주자
            
            
        //적군이 벽에 부딪힐 때 방향 전환하는 중요한 코드!!
        for(let i=0; i<tileArray.length; i++){ //이렇게 하면 메모리에 상당한 무리가 갈것 같은데 어떨까?
            let result=collisionCheck(this, tileArray[i]);
            // console.log(result);
            //적군을 기준으로 오른쪽 벽에 부딪힐 때
            if(this.velX==enemySpeed && result){ 
                let n=getRandom(4);  
                //0이 나오면 velX에 -를 넣고 1이나오면 velY에 +를 줌.
                if(n==0){ //위쪽으로진행
                    this.velX=0;
                    this.velY=(-enemySpeed);
                    this.x = tileArray[i].x-this.width-resolveError;
                }else if(n==1){ //왼쪽으로 진행
                    this.velY=0;
                    this.velX=(-enemySpeed);
                    this.x = tileArray[i].x-this.width-resolveError;
                    this.img.style.transform="scaleX(-1)";
                }else if(n==2){ //아래쪽으로 진행
                    this.velX=0;
                    this.velY=enemySpeed;
                    this.x = tileArray[i].x-this.width-resolveError;
                }else if(n==3){ //오른쪽으로 진행
                    this.velY=0;
                    this.velX=enemySpeed;
                    this.x = tileArray[i].x-this.width-resolveError;
                    this.img.style.transform="scaleX(1)";
                }
            }else if(this.velY==enemySpeed && result){ //적군을 기준으로 아래쪽 벽에 부딪힐 때
                let n=getRandom(4);
                console.log("아래쪽으로 다가와 부딪히며", n);
                if(n==0){ //위쪽으로 진행
                    this.velX=0;
                    this.velY=(-enemySpeed);
                    this.y = tileArray[i].y-this.height-resolveError;
                }else if(n==1){ //왼쪽으로 진행
                    this.velY=0;
                    this.velX=(-enemySpeed);
                    this.y = tileArray[i].y-this.height-resolveError;
                    this.img.style.transform="scaleX(-1)";
                }else if(n==2){ //아래쪽으로 진행
                    this.velX=0;
                    this.velY=enemySpeed;
                    this.y = tileArray[i].y-this.height-resolveError;
                    this.img.style.transform="scaleX(-1)";
                }else if(n==3){ //오른쪽으로 진행
                    this.velY=0;
                    this.velX=enemySpeed;
                    this.y = tileArray[i].y-this.height-resolveError;
                    this.img.style.transform="scaleX(1)";
                }
            }else if(this.velX==(-enemySpeed) && result){ //적군을 기준으로 왼쪽 벽에 부딪힐 때
                let n=getRandom(4);
                console.log("왼쪽으로 다가와 부딪히며", n);
                if(n==0){ //위쪽으로 진행
                    this.velX=0;
                    this.velY=(-enemySpeed);
                    this.x = tileArray[i].x+map_Width+resolveError;
                }else if(n==1){ //왼쪽으로 진행
                    this.velY=0;
                    this.velX=(-enemySpeed);
                    this.x = tileArray[i].x+map_Width+resolveError;
                    this.img.style.transform="scaleX(-1)";
                }else if(n==2){ //아래쪽으로 진행
                    this.velX=0;
                    this.velY=enemySpeed;
                    this.x = tileArray[i].x+map_Width+resolveError;
                }else if(n==3){ //오른쪽으로 진행
                    this.velY=0;
                    this.velX=enemySpeed;
                    this.x = tileArray[i].x+map_Width+resolveError;
                    this.img.style.transform="scaleX(1)";
                }
            }else if(this.velY==(-enemySpeed) && result){ //적군을 기준으로 위쪽 벽에 부딪힐 때
                let n=getRandom(4);
                console.log( "위쪽으로 다가와 부딪히며", n);
                if(n==0){ //위쪽으로 진행
                    this.velX=0;
                    this.velY=(-enemySpeed);
                    this.y = tileArray[i].y+map_height+resolveError;
                }else if(n==1){//왼쪽으로 진행
                    this.velY=0;
                    this.velX=(-enemySpeed);
                    this.y = tileArray[i].y+map_height+resolveError;
                    this.img.style.transform="scaleX(-1)";
                }else if(n==2){//아래쪽으로 진행
                    this.velX=0;
                    this.velY=enemySpeed;
                    this.y = tileArray[i].y+map_height+resolveError;
                }else if(n==3){//오른쪽으로 진행
                    this.velY=0;
                    this.velX=enemySpeed;
                    this.y = tileArray[i].y+map_height+resolveError;
                    this.img.style.transform="scaleX(1)";
                }
            }
        }

        
        
        // for(let i=0; i<array4functionArray.length; i++){
        //     if(collisionCheck(this, array4functionArray[i])){
        //         //헐...array4functionArray[i]가 맞는 거였다......하....
                
        //             let n=getRandom(3);  
        //             // console.log(n);
        //             //0이 나오면 velX에 -를 넣고 1이나오면 velY에 +를 줌.
        //             if(n==0){
        //                 this.velY=0;
        //                 this.velX=(-enemySpeed);
        //                 this.x = array4functionArray[i].x-this.width-resolveError;
        //                 this.img.style.transform="scaleX(-1)";
        //                 console.log("0번반응");
        //             }else if(n==1){
        //                 this.velX=0;
        //                 this.velY=enemySpeed;
        //                 this.x = array4functionArray[i].x-this.width-resolveError;
        //                 console.log("1번반응");
        //             }else if(n==2){
        //                 console.log("2번반응");
        //             }
        //     }
        // }

        this.killHero();
    }

    killHero(){//팩맨과 적군이 부딪히면 죽기는 하나 그 다음, removeChild오류가 발생한다.
        //추측하기로는, 지워졌는데, 또 지우려고 하기 때문으로 보인다. 그래서
        //killHero가 부딪혔을때만 실행되게 하려한다.
        let result=collisionCheck(this, hero);
        
        if(result){
            wrapper.removeChild(hero.img); //유령과 팩맨이 부딪히면 팩맨이 사라짐.

            hp_area.removeChild(hpArray[num]);
            hpArray.splice(num, 1); //hp이미지를 지워줄 뿐만아니라 배열에서도 지워야함.
            if(num==0){ //적군이 팩맥을 죽여 hp가 0이되면 gameover가 뜨게 하겠다.
                alert("gameover");
                document.location.reload();
            }
            console.log(num);
            num--;
            console.log(num);
            hero=new Hero(wrapper, 0, 255, 30, 30, 0, 0, "pacman.png") //팩맨 부활!
            console.log("die");
            // document.location.reload();
        }
    }

    finishGame(){
        
    }
    
    render(){ //그래픽 처리
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}