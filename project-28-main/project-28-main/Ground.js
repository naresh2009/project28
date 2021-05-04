class Ground {
constructor() {
var options = {
    isStatic : true
}
this.ground = Bodies.rectangle(300,690,1000,10,options);
World.add(world,this.ground);

}
display() {

rect(this.ground.position.x,this.ground.position.y,1000,10);


}


}