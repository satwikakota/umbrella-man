class Drops{
    constructor(x,y){
        var options={
           restution:0.1,
           friction:0.1
        }
        this.body=Bodies.circle(x,y,5,options);
        World.add(world,this.body);
        this.radius=5;
        console.log("bye");
    }
    update(){
        if(this.body.position.y > height){
            Body.setPosition(this.body,{
                x: random(0,400),
                y: 0
            })
        }
    }
    display(){
        fill("blue");
        push();
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y,this.radius, this.radius); 
        pop();
        
    }
}