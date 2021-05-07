class g{
    constructor(x,y,width,height){
var o={ isStatic: true} 
this.body=Bodies.rectangle(x,y,width,height,o)
this.width=width
this.height=height
World.add(world,this.body)
} 
display(){
var p=this.body.position
fill ("green")
stroke ("red")
strokeWeight (5)
rectMode (CENTER)
rect (p.x,p.y,this.width,this.height)
}
}