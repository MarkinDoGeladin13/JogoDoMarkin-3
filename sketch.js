var canva;
var jogador;
var GCaixa, GEspinho, GPlataforma;
var binvisivel;
var plataforma1;
var edges;
estadoJogo = START;
var GAMEOVER = 0;
var START = 1;
function preload(){
    imgCaixa = loadImage("JogoDoMarkin-main/freescifiplatform/png/Tiles/Tile (5).png")



}
function setup() {
    canva = createCanvas(700, 300);
    
    jogador = createSprite(50,50,25,25);
    edges = createEdgeSprites();
    plataforma1 = createSprite(50,75,100,25);
    GCaixa = createGroup();
    GPlataforma = createGroup();
    GEspinho = createGroup();
	

	

}
    function draw(){
    background("green");
    jogador.collide(edges);
    jogador.collide(plataforma1);
    jogador.collide(GCaixa);
    
    if(estadoJogo === START){
         gerarCaixas();
         gerarPlataforma();
         pular();
         if(jogador.collide(edges[3])){
             estadoJogo = GAMEOVER;
         }
    }
    if(estadoJogo === GAMEOVER){
         GCaixas.destroyEach();
         GPlataforma.destroyEach();
         GEspinho.destroyEach();
         binvisivel.destroyEach();
         textSize(100,20);
         text("GAME OVER, pressione R para reiniciar", 350, 150);
         if(keyDown("r")){
            estadoJogo = START;
      }
    }
    
    if(keyDown(RIGHT_ARROW)){
       jogador.x = jogador.x+5;
    }
    if(keyDown(LEFT_ARROW)){
       jogador.x = jogador.x-5;
    }
    gerarCaixas();
    jogador.velocityY = jogador.velocityY+0.5;
    
    drawSprites();
    

}
    function gerarCaixas(){
        if (frameCount % 30 === 0){
            var caixa = createSprite(700,300,50,50);
            GCaixa.add(caixa);
            caixa.y = Math.round(random(250,150));
            caixa.velocityX = -5;
            GCaixa.lifetime=200;
            caixa.addImage(imgCaixa);
            caixa.scale = 0.3;
            binvisivel = createSprite(200,200,100,20);
            binvisivel.x = caixa.x;
            binvisivel.y = caixa.y+15;
            binvisivel.velocityX = -5
            binvisivel.visible = true;
        }
    } 
    function gerarPlataforma(){
        if(frameCount % 30 === 0){
            var plataforma = createSprite(700,300,50,50);
            GPlataforma.add(plataforma);
            plataforma.y = Math.round(random(250,150));
            plataforma.veloctyX = -5;
            GPlataforma.lifetime=200;
            var espinho = createSprite(700,300,25,25);
            GEspinho.add(espinho);
            espinho.y = plataforma.y+50;
            espinho.x = plataforma.x;
            GEspinho.lifetime=200;
        }
      }
    function pular(){
        if(keyDown("space")){
            jogador.velocityY = jogador.velocityY-5;
            jogador.y = jogador.y-2;
        }
        
    
    
    }
    
    
    