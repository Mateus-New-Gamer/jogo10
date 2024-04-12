var fundoImg, fundo;
var ufoImg, ufo;
var fogueteImg, foguete;
var coinImg, coin;
var explosaoImg, explosao; 

var coinGroup;
var ufoGroup;

var score = 0;
var life = 3;

var gameState = "play";

//carregar imagens
function preload() {
  fundoImg=loadImage("img/fundo.webp");
  ufoImg = loadImage("img/ufo.png");
  fogueteImg = loadAnimation("img/foguete.png");
  explosaoImg = loadAnimation("img/explosao.png")
  coinImg = loadImage("img/coin.png")
}


function setup() {
  createCanvas(800,800);

  //criar sprites do plano de fundo
  fundo.addImage(fundoImg)
  fundo.scale = 1.6

  foguete = createSprite(400,580)
  foguete.addAnimation("foguete", fogueteImg)
  foguete.addAnimation("explosão", explosaoImg)
  foguete.scale = 0.1

  coinGroup = new Group()
  ufoGroup = new Group()
}

function draw() {
  background(0);

  drawSprites();

  textSize(25)
  fill("white")
  text("Vidas: " + life, 60,100)

  textSize(25)
  fill("white")
  text("Pontuação: " + score, 60,150)



  
  //criar estado de jogo "play"
  if (gameState == "play") {
    fundo.velocityY = 3;

    if (fundo.y > 800) {
      //Resetar plano de fundo
    }
    //programar seta direita

    //programar seta esquerda
    removeLife()
    removeCoins()
    spawnAliens()
    spawnCoins()

    //programar fim de jogo

  }

  //criar estado de jogo "end"
  if (gameState == "end") {
    //remover grupos
    
    //zerar velocidades do foguete

    //mudar animação do foguete para explosao
    foguete.changeAnimation("explosao", explosaoImg)
    textSize(30)
    fill("orange")
    text("Game Over!!!", 300, 400)
  }
  
}

function spawnAliens() {
  if (frameCount % 60 == 0) {
    //criar sprite e velocidades
  ufo = createSprite(random(30, 770), random(10, 500));
  ufo.addImage(ufoImg);
  ufo.velocityY = 3;
  ufo.scale = 0.2;

    //tempo de vida do sprite
  ufo.lifetime = 200; 
    //add sprite ao grupo
    ufoGroup.add(ufo);
  }
}

function spawnCoins() {
  if (frameCount % 60 == 0) {
    //criar sprite e velocidades
  coin = createSprite(random(30, 770), random(10, 500));
  coin.addImage(coinImg);
  coin.velocityY = 3;
  coin.scale = 1.3;
    //tempo de vida do sprite
    coin.lifetime = 200;

    //add sprite ao grupo
    coin.add(coin);
  }
 
}

//função para remover moedas
function removeCoins() {
  foguete.overlap(coinGroup, function(collector, collected){
    score += 1;
    collected.remove();
  });
}

//função para remover vidas
function removeLife() {
  
 }