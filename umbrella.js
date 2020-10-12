class Umbrella{
    constructor(x,y){
        this.image=loadImage("images/Walking Frame/walking_1.png"); 
        var options={
            isStatic:true
        }
        this.radius=50
        this.body= Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 300,300); 
    }
}