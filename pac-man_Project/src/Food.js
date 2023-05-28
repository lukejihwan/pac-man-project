
class Food{
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
    }

    render(){ //그래픽 처리
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}