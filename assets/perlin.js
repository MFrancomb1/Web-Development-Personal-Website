let particles = [];
let position = 0;
const num = 10;
let n = 1;


function setup() {
    var canvas = createCanvas(200, 200);
    canvas.parent('canv');
    noiseSeed(100);
    for(i=0; i<num; i++) {
        let coordinates = createVector(0, random(0, 2*height));
        let offset = createVector(0, random(height));
        particles[i] = new Particle(coordinates, offset);
    }
}

function draw() {
    background(0, 5);
    noStroke();
    for(i=0; i<n; i++) {
        particles[i].display();
        particles[i].move();
    }
    position += 0.002;
    if(frameCount%50 === 0 && n<num) {
        n+=1;
    }
}

class Particle {
    constructor(coords, offset) {
        this.coords = coords;
        this.offset = offset;
    }
    display() {
        fill(255);
        circle(this.coords.x, this.coords.y, 5);
    }
    move() {
        this.coords.x += 2;
        this.coords.y = map(noise(position+this.offset.y), 0, 1, 0, height);
        if(this.coords.x>width) {
            this.coords.x = -10;
        }
    }
}