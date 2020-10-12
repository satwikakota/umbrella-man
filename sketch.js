const Engine= Matter.Engine; 
const World= Matter.World; 
const Bodies=Matter.Bodies; 
const Body=Matter.Body
var thunder1, thunder2, thunder3, thunder4; 
var drop=[]
var umbrella1; 
function preload(){
    thunder1=loadImage("images/thunderbolt/1.png");
    thunder2=loadImage("images/thunderbolt/2.png");
    thunder3=loadImage("images/thunderbolt/3.png");
    thunder4=loadImage("images/thunderbolt/4.png"); 
}

function setup(){
    createCanvas(400,600);
    engine=Engine.create();
    world=engine.world; 
    for(var i=0; i<100; i++){
        drop.push(new Drops(random(0,600),random(0,400)))
    }
    umbrella1=new Umbrella(300,400);
}

function draw(){
    background("black"); 
    Engine.update(engine);
    spawnThunders(); 
    for(var i=0; i<drop.length; i++){
        console.log(drop[i]);
        drop[i].display();
        drop[i].update();
    }
    umbrella1.display();
    drawSprites();
}   
function spawnThunders(){
    var remainder=frameCount%12
    if(remainder ==0){
        var thunderIMG=createSprite(random(20,400),random(10,30),10,10);
        thunderIMG.scale=0.5;
        thunderIMG.lifetime=3;
        thunderIMG.addImage("thunder", thunder1);
        var rand= random(1,4);
        switch(rand){
            case 1: thunderIMG.addImage("thunder", thunder1);
                break; 
            case 2: thunderIMG.addImage("thunderone", thunder2);
                break; 
            case 3: thunderIMG.addImage("thundertwo", thunder3); 
                break; 
            case 4: thunderIMG.addImage("thunderthree", thunder4); 
                break; 
        }
    }
}
