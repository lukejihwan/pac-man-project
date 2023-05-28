/* 모든 게임에 등장할 객체들의 공통된 기능을 보유한
최상위 객체를 정의한다 */

class GameObject{
    constructor(container, color, x, y, width, height, velX, velY){
        this.contrainer = container;
        this.color = color;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;
        this.div = document.createElement("div");

        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.backgroundColor = this.color;

        this.container.appendChild(this.div);
    }

    tick(){
        this.x += this.velX;
        this.y += this.velY;
    }

    render(){
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
}
