class stone{
    constructor(x,y,width,height){
var options={ 
friction:1.0,
 restitution:0.5,
 density:4
  } 
this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=this.height
World.add(world,this.body)
} 
display(){
var pos=this.body.position
var angle=this.body.angle
push ()
translate(pos.x,pos.y)
rotate (angle)
fill ("red")
stroke ("orange")
strokeWeight (4)
rectMode (CENTER)
rect (0,0,this.width,this.height)
pop ()
}
}