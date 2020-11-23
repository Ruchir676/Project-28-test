class Tree{
    constructor(x, y, width, height,) {
        var options = {
            isStatic: true
          }
        this.bottomBody = Bodies.rectangle(x,y,450,10,options);
        this.leftBody = Bodies.rectangle(0,y-300,10,300,options);
        this.rightBody = Bodies.rectangle(x+225,y-300,10,600,options);
        this.x= x;
        this.y= y;
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking mangoes/tree.png");
        World.add(world, this.bottombody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
      }
      display(){
        var pos = this.bottomBody.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0,-300,225,600);
        pop();
      }
}