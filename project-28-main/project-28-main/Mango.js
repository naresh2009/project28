class Mango {
constructor() {
var options = {
isStatic:true,
restitution:0,
firction:1

}
this.image=loadImage("sprites/mango.png");


}
display() {

image(this.image,600,480,40,40);


}

}