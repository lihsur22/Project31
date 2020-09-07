class divs {
    constructor(x, y, h) {
        var options = {
            isStatic: true
        };
        this.body = Bodies.rectangle(x, y, 10, h, options);
        this.h = h;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, 10, this.h);
    }
};