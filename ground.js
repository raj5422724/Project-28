class ground {
    constructor() {
        this.body = Bodies.rectangle(650,580,1300,10,{isStatic:true});
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,1300,10);
    }
}