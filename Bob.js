class Bob {
    constructor(x,y,z){
        var options={
            isStatic:false,
            friction:0.4,
            density:3,
           restitution:1.2,
        }
        this.x=x;
        this.y=y;
        this.z=z;

        this.body=Bodies.circle(this.x,this.y,this.z/2,options)
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate (this.body.angle)
        fill (255);

        ellipseMode(CENTER);
        ellipse(0,0,this.z,this.z)
        pop ()
    }
}