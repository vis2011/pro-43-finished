var bg,bg2,form,system,code,security;
var score=0;
var lifetime=3;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  bg3 = loadImage("aladdin_cave2.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
  text("Lifetime: " + lifetime, 700, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  if(lifetime===4){
    lifetime=lifetime-1;
  }

  if(lifetime === 0) {
    security.clear();
    background(bg3)
    fill("black")
    textSize(40);
    text("TREASURE LOCKED",250,200);
    text("YOU'R LOST",350, 250);
  }
  drawSprites()
}