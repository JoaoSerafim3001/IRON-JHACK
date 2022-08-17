let holes = []

class Line {
  constructor() {
    this.w = windowWidth
    this.h = 10
    this.x = 0
    this.y = windowHeight - 100
  }

  draw(){
    fill('red')
    rect(this.x,this.y,this.w,this.h)
  }

  


}