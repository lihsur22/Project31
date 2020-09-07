class partic{
    constructor(x, y) {
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:1,
            density:1.2
        }

        this.x = x;
        this.y = y;
        this.color = [random(20,255),random(20,255),random(20,255)];
        this.body = Bodies.circle(this.x, this.y, 10, options);
        World.add(world, this.body);
    }    

    display() {
        var pos = this.body.position

        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        
        fill(this.color);
        
        ellipseMode(CENTER);
        ellipse(0, 0, 20, 20);
        strokeWeight(2);
        pop();
    }
};