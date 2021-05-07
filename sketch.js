var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var score1
  var score2 
  var score3

var particles = [];
var plinkos = [];
var divisions = [];

var count = 0
var particle;
var gameState = "start";

var divisionHeight = 300;
var score = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);

  score1 =  round(random(100,150))
  score2 = round(random(200,300))
  score3 = round(random(450,500))

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    );
  }

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background("black");
  textSize(20);
  //text("Score : "+score,20,30);
  console.log(count)
  Engine.update(engine);

fill("white")
text("score: " + score,10,15)
text("count: " + count,10,50)

text(score1,20,600)
text(score1,100,600)
text(score1,180,600)
text(score1,260,600)

text(score3,350,600)
text(score3,420,600)

text(score2,500,600)
text(score2,580,600)
text(score2,660,600)
text(score2,740,600)

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if(particle != null){
    particle.display();
      if(particle.body.position.y > 760){

            if(particle.body.position.x < 320 && particle.body.position.x > 0){
              score = score + score1
              particle = null
              count +=1
            }
            else if(particle.body.position.x < 480 && particle.body.position.x > 320){
              score = score + score3
              particle = null
              count +=1
            }
            else if (particle.body.position.x > 480 && particle.body.position.x < 800){
              score = score + score2
              particle = null
              count +=1
            }
            
      }
  }

  if(count == 5){
    gameState = "end"
  }
  if(gameState == "end"){
    textSize(100)
    fill("green")
    text("GAME OVER",100,300)
    textSize(30)
    text("YOUR FINAL SCORE WAS: " + score,200,350)
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
}

function mousePressed(){
  if(gameState !== "end"){
    particle = new Particle(mouseX,10,10)
  }

}
