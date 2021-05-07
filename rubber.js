class rubber{
    constructor(x,y,r){
var options={ 
friction:1.0,
 restitution:0.5,
 density:4
  } 
this.body=Bodies.circle(x,y,r,options)
this.x=x
this.y=y
this.r=r
World.add(world,this.body)
} 
display(){
var pos=this.body.position

var angle=this.body.angle
push ()
translate(pos.x,pos.y)
rotate (angle)
fill ("blue")
stroke ("yellow")
strokeWeight (4)
ellipse(0,0,this.r)
pop ()
}
}