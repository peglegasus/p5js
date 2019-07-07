let x = 0;
let y = 0;

function setup() {
  createCanvas(1024,768)
  background(100);
  line(15, 25, 70, 90);
}

function draw() {
  ellipse(x, height/2+y, 20, 20);
   x+=1;
   y+=1;
}
