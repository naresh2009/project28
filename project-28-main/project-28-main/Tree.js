class Tree {
constructor() {
var options = {
isStatic : true

}
//this.tree = Bodies.rectangle(200,200,20,20);
this.image = loadImage("sprites/tree.png");
//this.image.setScale(0.5);
//World.add(world,this.image);


}

display(){
//rect(this.tree.position.x,this.tree.position.y,20,20);
image(this.image,500,380,300,300);




}





}
 