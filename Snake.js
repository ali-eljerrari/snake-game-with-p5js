class Snake{
 constructor(x,y){
   this.x = x
   this.y = y
   this.xSpeed = 1
   this.ySpeed = 0
   this.total = 0
   this.tail = []
 }
 
 update(){
   if(this.total === this.tail.length){
     for(let i =0; i < this.tail.length-1; i++){
       this.tail[i]=this.tail[i+1]
     }
   }
     this.tail[this.total-1] = createVector(this.x, this.y)
   
    this.x += this.xSpeed * scale
    this.y += this.ySpeed * scale
    
    this.x = constrain(this.x, 0, width-scale)
    this.y = constrain(this.y, 0, height-scale)
 }
 
 show(){
    fill(255)
   for(let i =0; i < this.tail.length; i++){
     rect(this.tail[i].x, this.tail[i].y, scale, scale) 

   }
   rect(this.x, this.y, scale, scale) 
 }
 
 dir(x, y){
   this.xSpeed = x
   this.ySpeed = y
 }
 
 eat(pos){
  const d = dist(this.x, this.y, pos.x, pos.y)
  if(d < 1){
    this.total++
    return true
  }else{
   return false 
  }
 }
 
 death(){
  for( let i =0; i< this.tail.length; i++){
     const pos = this.tail[i]
     const d = dist(this.x, this.y, pos.x, pos.y)
     if(d < 1){
       this.total = 0
       this.tail=[]
     }
     
     
  }
 }
}
