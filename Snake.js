class Snake{
 constructor(x,y){
   this.x = x
   this.y = y
   this.xSpeed = 1
   this.ySpeed = 0
 }
 
 update(){
    this.x += this.xSpeed * scale
    this.y += this.ySpeed * scale
    this.x = constrain(this.x, 0, width-scale)
    this.y = constrain(this.y, 0, height-scale)
 }
 
 show(){
   fill(255)
   rect(this.x, this.y, scale, scale) 
 }
 
 dir(x, y){
   this.xSpeed = x
   this.ySpeed = y
 }
 
 eat(pos){
  const d = dist(this.x, this.y, pos.x, pos.y)
  if(d < 1){
    return true
  }else{
   return false 
  }
 }
}
