/*슈팅게임의 주인공을 정의한다*/
class GameObject{
    constructor(container, color, x, y, width, height, velX, velY){
        this.container=container; //이 주인공의 div가 붙을 부모요소
        this.div=document.createElement("div");
        this.color=color;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;
        
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
        this.x+=this.velX;
        this.y+=this.velY;
    }

    //그래픽 처리 : 비행기가 화면에 어떻게 그려질지를 처리하는 메서드
    render(){
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
    }
}