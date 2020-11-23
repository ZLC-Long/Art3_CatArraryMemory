let bubbles = [];
let Cats = [];

function preload() {
  for (let i = 0; i < 9; i++) {
    Cats[i] = loadImage(`Cat/cat${i}.jpg`);
    // 'Cat/cat' + i + '.jpg'
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 6; i++) {
  
    let r = random(75, 150);
      let x = random(width-r);
    let y = random(height-r);
    // let cats = random(Cats);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}


function draw() {
  background(0);

  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }

  stroke(255);
  line(mouseX, mouseY, pmouseX, pmouseY);


}

function mousePressed() {
  for (var i = 0; i < bubbles.length; i++) {

    bubbles[i].clicked(mouseX, mouseY);
  }
}

// bubble properties
class Bubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.cats = random(Cats);
  }

  clicked(px, py) {
    // let d = dist(px, py, this.x, this.y)
    // if (d < this.r) {
    if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
      this.cats = random(Cats);
    }
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  show() {
    image(this.cats, this.x, this.y, this.r, this.r);
    // stroke(255);
    // strokeWeight(4);
    // fill(this.brightness, 125 );
    // ellipse(this.x, this.y, this.r * 2);
  }

}