class Umbrella{
    constructor(x,y){
    
    this.body = Bodies.circle(x,y);
    this.animation = loadAnimation("images/walking_1.png,images/walking_2.png,images/walking_3.png,images/walking_4.png,images/walking_5.png,images/walking_6.png,images/walking_7.png,images/walking_8.png,");
    World.add(world, this.body);
    }
display(){
    imageMode(CENTER);
    image(this.image,0,0);


}
}


