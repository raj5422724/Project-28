class ground {
    constructor() {
        this.body = Bodies.rectangle(400,580,800,10,{isStatic:true});
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,800,10);
    }
}