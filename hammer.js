class hammer{
    constructor(x,y){
var options={ 
friction:1.0,
 restitution:0.5,
 density:4
  } 
this.body=Bodies.rectangle(x,y,140,40,options)
this.width=140
this.height=40
World.add(world,this.body)
} 
display(){
var pos=this.body.position
pos.x=mouseX
pos.y=mouseY
var angle=this.body.angle
push ()
translate(pos.x,pos.y)
rotate (angle)
fill ("yellow")
stroke ("brown")
strokeWeight (4)
rectMode (CENTER)
rect (0,0,this.width,this.height)
pop ()
}
}