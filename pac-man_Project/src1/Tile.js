class Tile{
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
}