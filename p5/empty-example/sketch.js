let x = 0;
let y = 0;

function setup() {
  createCanvas(1024,768)
  background(100);
  line(15, 25, 70, 90);
}

function draw() {

  for (var i = 0; i < 100; i++) {
    let x1 = Math.floor(Math.random() * 1024);
    let y1 = Math.floor(Math.random() * 768);
    let x2 = Math.floor(Math.random() * 1024);
    let y2 = Math.floor(Math.random() * 768);

    //stroke(getRandomHexColor());
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255);

    //r = r - (255-b) > 0 ? r - (255-b) : r;
    g = g - (255-b) > 0 ? g - (255-b) : g;
    b = b - (255-b) > 0 ? b - (255-b) : b;


    let a = Math.random();

    let sRgba = 'rgba('+ r +','+ g +','+ b +',.3)'
    stroke(sRgba);

    line(x1,y1,x2,y2);

  }
}

function getRandomHexColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
