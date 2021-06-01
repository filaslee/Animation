let spritesheet;
let spritedata;

let animation = [];

let horses = [];

function preload() {
  spritedata = loadJSON('horse/horse.json');
  spritesheet = loadImage('horse/horse.png'); 
}

function setup() {
  createCanvas(1920, 350);
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

  for (let i = 0; i < 3; i++) {
    horses[i] = new Sprite(animation, 0, i * 75, random(0.1, 0.4));
  }
}

function draw() {
  background(239, 192, 80);

  for (let horse of horses) {
    horse.show();
    horse.animate();
  }
}