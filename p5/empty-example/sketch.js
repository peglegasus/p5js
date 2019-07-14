let x = 0;
let y = 0;

function setup() {
  createCanvas(1024,768)
  background(100);
  line(15, 25, 70, 90);
}

function draw() {
  x1 = Math.floor(Math.random() * 1024);
  y1 = Math.floor(Math.random() * 768);
  x2 = Math.floor(Math.random() * 1024);
  y2 = Math.floor(Math.random() * 768);

   line(x1,y1,x2,y2);
   
}
