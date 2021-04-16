class Umbrella{
    constructor(x,y){
    var options={
        isStatic:true,
    }
    this.body = Bodies.circle(x,y,options);
    this.animation = loadAnimation("images/Walking Frame/walking_1.png,images/Walking Frame/walking_2.png,images/Walking Frame/walking_3.png,images/Walking Frame/walking_4.png,images/Walking Frame/walking_5.png,images/Walking Frame/walking_6.png,images/Walking Frame/walking_7.png,images/Walking Frame/walking_8.png,");
    World.add(world, this.body);
    }
display(){
    imageMode(CENTER);
    this.animation(this.animation,0,0);


}
}


