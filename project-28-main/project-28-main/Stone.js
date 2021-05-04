class Stone {
constructor(){
var options = {
isStatic : false,
restitution : 0,
friction :1,
density:1.2

}
this.image=loadImage("sprites/stone.png");


}
display(){
image(this.image,150,600,40,40);
}



}