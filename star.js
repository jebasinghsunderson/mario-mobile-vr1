class Star{
    constructor(x,y){
         var options={
             isStatic:true,
             
         }
      this.x=x;
      this.y=y
      this.r=30;
     
      this.body=Bodies.circle(this.x, this.y, 30, options)
      World.add(world, this.body);
         
    }
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r*2, this.r*2)
        pop();
       
    }
}