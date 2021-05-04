class Slingshot {
constructor(bodyA,bodyB) {
    var options = {
      bodyA:bodyA,
      bodyB: bodyB,
      stiffness :0.04,
      lenght :10
    }
    
   this.slingshot = Constraint.create(options);
   World.add(world,this.sling)
   this.pointB=pointB;

}
display(){
var pointA = this.sling.bodyA.position;
var pointB=this.sling.bodyB.position;
strokeWeight(4);
line(pointA.x,pointA.y,pointB.x,pointB.y);


}
fly()
{
   this.lanuncher.bodyA=null;
}




}