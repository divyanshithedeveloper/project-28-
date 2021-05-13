class launcher2{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.004,
            length: 10
        }
        this.launcher= Matter.Constraint.create(options);
        World.add(world, this.launcher);
    

    }
    fly() {
        //null means nothing"hehehe"
       this.launcher.bodyA=null;
   }
    display(){
        //!= is eqauls to not equal
        if(this.launcher.bodyA!=null){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.launcher.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    
        }

        }

