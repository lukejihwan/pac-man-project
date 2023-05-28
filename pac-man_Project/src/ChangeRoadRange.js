class ChangeRoadRange{
    constructor(container, color, x, y, width, height){
        this.container=container; //이 주인공의 div가 붙을 부모요소
        this.div=document.createElement("div");
        this.color=color;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        //마지막에 픽셀로 바꾸어 주어야 함.
        //그냥 x, y, width, height를 이용해 주어도 될듯
       
        //style
        this.div.style.background=this.color;
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        
        //화면에 부착 
        this.container.appendChild(this.div);
    }    

    //비행기의 속성값을 어떻게 변경할지를 처리하는 메서드 
    tick(){
        // this.x+=this.velX;
        // this.y+=this.velY;

        this.changeRoad();
    }

    changeRoad(){
        
        
        for(let i=0; i<enemyArray.length; i++){
            //투명상자 안에 적군이 들어올 때 실행해 주겠다. 즉, 투명상자>enemy1이 되어야만 실행이 됨.
            //주의! 적군과 상자의 크기에 따라 적군의 이상한 움직임이 발생할 수 있으니 주의할 것!
            if((this.x<=enemyArray[i].x) && ((this.x+this.width)>=(enemyArray[i].x+enemyArray[i].width)) && (this.y<=enemyArray[i].y) && (this.y+this.height>=enemyArray[i].y+enemyArray[i].height)) {
                let n=getRandom(4); //적군의 움직임을 발생시킬 4가지 경우를 무작위로 출력함.
                console.log("범위안에 들어옴..");
                console.log(n);
                console.log(enemyArray[i].x);
                if(n==0){
                    enemyArray[i].velX=enemySpeed;
                    enemyArray[i].img.style.transform="scaleX(1)";
                }else if(n==1){
                    enemyArray[i].velX=-enemySpeed;
                    enemyArray[i].img.style.transform="scaleX(-1)";
                }else if(n==2){
                    enemyArray[i].velY=enemySpeed;
                }else if(n==3){
                    enemyArray[i].velY=-enemySpeed;
                }
            } 
        }
    }

    //그래픽 처리 : 비행기가 화면에 어떻게 그려질지를 처리하는 메서드
    render(){
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
    }
}