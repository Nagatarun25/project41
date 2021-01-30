class Umbrella {
  constructor(x, y, radius) {
    var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':1.0,
         isStatic: true
    }
    this.body = Bodies.circle(x, y,radius, options);
    this.radius = radius;

    this.image = loadImage("images/Walking Frame/walking_8.png")

    World.add(world, this.body);
  }

  display(){
      push();
      var pos =this.body.position;
  
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.radius*2.3,this.radius*2.3);

      pop()
  }
};
