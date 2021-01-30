
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rain,person

var engine, world;

var maxDrops=100

var drops =[]





function setup(){
createCanvas(500, 800);

engine = Engine.create();
world = engine.world;

rain = new Drops(400,300,5)
person = new Umbrella(300,600,200)

thunderbolt=new Thunder(200,100,300,300)


if(frameCount % 100 ==0){
for(var i=0; i<maxDrops; i++){
    drops.push(new Drops(random(0,400),random(0,400),5))
}
}

}

function draw(){
    background(0);
    Engine.update(engine);
    
    person.display();

    if(frameCount%100==0){
    thunderbolt.display();
    }


    for(var i=0; i<maxDrops; i++){
        drops[i].update()
        drops[i].display()
        
    }

    
}   



