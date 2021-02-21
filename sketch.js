const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg, ground, b1, b2, b3, b4, b5, b6, rock1, chain1, chain2, chain3, chain4, chain5, collision, flag
var crash

function preload() {
    bg = loadImage("images/bg.jpg")
    crash = loadSound("sound/train_crossing.mp3")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600, 380, 1200, 20)
    b1 = new Boggie(50, 170, 50, 50)
    b2 = new Boggie(150, 170, 50, 50)
    b3 = new Boggie(250, 170, 50, 50)
    b4 = new Boggie(350, 170, 50, 50)
    b5 = new Boggie(450, 170, 50, 50)
    b6 = new Boggie(550, 170, 50, 50)
    rock1 = new Rock(1100, 200, 100, 100)
    chain1 = new Chain(b1.body, b2.body)
    chain2 = new Chain(b2.body, b3.body)
    chain3 = new Chain(b3.body, b4.body)
    chain4 = new Chain(b4.body, b5.body)
    chain5 = new Chain(b5.body, b6.body)
}

function draw(){
    background(bg)
    Engine.update(engine);  
    ground.display()
    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()
    b6.display()
    rock1.display()
    chain1.display()
    chain2.display()
    chain3.display()
    chain4.display()
    chain5.display()

    collision = Matter.SAT.collides(b6.body, rock1.body)

    if (collision.collided){
        flag = 1
    }
    
    if(flag === 1){
        textSize(32)
        text("The Train has Crashed", 200, 200)
        crash.play()
    }
}

function keyPressed(){
    if (keyCode === RIGHT_ARROW){
        Matter.Body.applyForce(b6.body, {x:b6.body.position.x, y:b6.body.position.y}, {x:0.5, y:0})
    }
}