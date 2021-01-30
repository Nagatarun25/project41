class Drops {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':0.1,
          'density':1.0,
           isStatic: false
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius = radius;
      World.add(world, this.body);
    }

    update(){
        if(this.body.position.y > 800){
            Matter.Body.setPosition(this.body,{x:random(0,400), y:random(-10,0)})
    
       }
    }

    display(){
        push();
        var pos =this.body.position;
        noStroke()
        fill("blue");
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.radius,this.radius)
        pop()
    }
};


  



