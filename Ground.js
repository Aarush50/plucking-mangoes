class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(800,650,1600,20,options);
        World.add(world,this.body);
        this.body.width=1600;
        this.body.heigth=20;
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(128,128,128);
        rect(0,0,this.width,this.height);
        pop();
    }
}