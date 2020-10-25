class Elastic{
    constructor(bodyA,pointB){
        var options={
             bodyA:bodyA,
             pointB:pointB,
             stiffness:0.04,
             length:1
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.elastic=Constraint.create(options);
        World.add(world,this.elastic);
    }
    attach(bodyA){
        this.elastic.bodyA=bodyA;
    }
     fly(){
         this.elastic.bodyA=null;
     }
     display(){
         if(this.elastic.bodyA){

         
      pointA=this.elastic.bodyA.position;
      pointB=this.pointB;
      line(pointA.x,pointA.y,pointB.x,pointB.y);
     }
    }
}