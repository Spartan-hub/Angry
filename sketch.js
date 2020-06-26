const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400,height,800,20);

    box1 = new Box(400,350,55,55);
    pig1 = new Pig(460, 350);
    box2 = new Box(520,350,55,55);
    log1 = new Log(460, 320, 180, PI/2);

    box3 = new Box(400, 300, 55, 55);
    box4 = new Box(520, 300, 55, 55);
    pig2 = new Pig(460, 300);
    log2 = new Log(460, 270, 180, PI/2);
    box5 = new Box(460, 220, 55, 55);
    log3 = new Log(420, 220, 120, PI/4);
    log4 = new Log(500, 220, 120, -PI/4);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}