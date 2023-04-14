let snake;
const scale = 20;

let food;

function setup() {
  createCanvas(600,600)
  frameRate(10)
  snake = new Snake(200,200)
   pickLocation()
}

function pickLocation(){
   const cols = floor(width/scale)
   const rows = floor(height/scale)
   food = createVector(floor(random(cols)), floor(random(rows)))
   food.mult(scale)


}

function draw() {
  background(0)
  
    if(snake.eat(food)){
    pickLocation()
  }
  
  snake.death()
  snake.update()
  snake.show()

  rect(food.x, food.y, scale, scale)
}

function mousePressed(){
    snake.total++
}


function keyPressed(){
  if(keyCode === UP_ARROW){
    snake.dir(0, -1)
  }else if(keyCode === DOWN_ARROW){
    snake.dir(0,1)
  }
  else if(keyCode === LEFT_ARROW){
    snake.dir(-1,0)
  }
  else if(keyCode === RIGHT_ARROW){
    snake.dir(1,0)
  }
}
