var tela = 0;
var xMenu = 170;
var yMenu = 220;
var yMenu1 = 255;
var yMenu2 = 290;
var alt = 35;
var larg = 165;
var yq = 250
var altq = 55;
var largq = 55;

let img;
let img2;
let img3;
let img4;
let over1;
let n2;
let n3;
let n4;
let n5;
let vid;
function preload() {
  img = loadImage('desvendando a sequência.png');
  img2 = loadImage('tela2.png');
  img3 = loadImage('desvendando a sequência (3).png');
  img4 = loadImage('jogo12.png');
  over1 = loadImage('over.png');
  n2 = loadImage('tela3.jpg');
  n3 = loadImage('tela4.png')
  n4 = loadImage('tela5.png');
  n5 = loadImage('tela6.png');
  n6 = loadImage('final.png')

}
function setup() {
  createCanvas(500, 440);
}
function draw(){
 if(tela == 0) {
   menu();
 }
 if (tela == 1){
    jogo();   
  }
 if (tela == 2){
    instruções();
  }
 if (tela == 3){
    créditos()
  }
  if ( tela == 4){
    gameover();    
  }
  if ( tela == 5){
    nivel2();
  }
  if( tela == 6){
    nivel3();
    
  }
  if(tela == 7){
    nivel4();
    }
  if(tela == 8){
    nivel5();
    
  }
  if (tela == 9){
    final()
  }
}
function menu(){
  if (tela == 0)
  background(200);
  // imagens
  image(img, 0 , 0);
  
   
  // textos
  strokeWeight(0);
  textSize(30);
  textStyle(BOLD);
    textSize(30);
  text('Jogar', 210, 250);
  text('Instruções', 180, 285);
  text('Créditos', 190, 320);
  
  // uso do mouse
  if(mouseX > xMenu && mouseX < xMenu+larg && mouseY > yMenu && mouseY < yMenu+alt ){
    rect(xMenu, yMenu, larg, alt, 10);
    if(mouseIsPressed){
      tela = 1
    }
  }
 if(mouseX > xMenu && mouseX < xMenu+larg && mouseY > yMenu1 && mouseY < yMenu1+alt ){
    rect(xMenu, yMenu1, larg, alt, 10);
    if (mouseIsPressed){
      tela = 2    
    }
  }
   if(mouseX > xMenu && mouseX < xMenu+larg && mouseY > yMenu2 && mouseY < yMenu2+alt ){
     rect(xMenu, yMenu2, larg, alt, 10); 
      if (mouseIsPressed){
      tela = 3
  }
}
}
function jogo(){
      background(200);
    // imagens
  image(img2, 0 , 0);
  // Fase 1
  if (mouseX > 40 && mouseX < 40+largq && mouseY > yq && mouseY < yq+altq){
      noFill(0);
    rect(40, yq, largq, altq);
    if(mouseIsPressed){
      tela = 4
    }
  }
    if (mouseX > 120 && mouseX < 100+largq && mouseY > yq && mouseY < yq+altq){
      noFill(0)
    rect(120, yq , largq, altq);
    if(mouseIsPressed){
      tela = 4
    }
  }
    if (mouseX > 180 && mouseX < 180+largq && mouseY > yq && mouseY < yq+altq){
      noFill(0)
    rect(180, yq , largq, altq);
    if(mouseIsPressed){
      tela = 5
    }
  }  
}
function instruções(){
  if (tela == 2){
    background(200);
  // imagens
  image(img3, 0 , 0);
  }
}
function créditos(){
  if (tela == 3){
    background(200);
  // imagens
  image(img4, 0 , 0);
  }	
}
function keyPressed(){
  if(key == "Escape"){
    tela = 0
  }
}
function gameover(){
  if( tela == 4){
    // imagens
    image(over1, 0, 0)
  }
}
function nivel2(){
     image(n2, 0, 0)
if(mouseX > 210 && mouseX < 210+65 && mouseY > 260 && mouseY < 260+80){
  noFill(0);
  rect(210, 260, 65, 80);
  if(mouseIsPressed){
    tela = 6
  }
}
  
if (mouseX > 290 && mouseX < 290+65 && mouseY > 260 && mouseY < 260+80){
     noFill(0)
     rect(290, 260, 65, 80);
    if(mouseIsPressed){
      tela = 4
    }
  }
if (mouseX > 390 && mouseX < 390+65 && mouseY > 260 && mouseY < 260+80){
    noFill(0)
    rect(390, 260, 65, 80);
    if(mouseIsPressed){
      tela = 4
    }
  }
}
function nivel3(){
  image(n3, 0, 0);
if(mouseX > 50 && mouseX < 50+55 && mouseY > 260 && mouseY < 260+55){
  noFill(0)
  rect(50, 260, 55, 55);
  if(mouseIsPressed){
    tela = 4
  }
}
if (mouseX > 140 && mouseX < 140+55 && mouseY > 260 && mouseY < 260+55){
  noFill(0);
  rect(140, 260, 55, 55);
  if(mouseIsPressed){
    tela = 7
  }
}
if (mouseX > 240 && mouseX < 240+55 && mouseY > 260 && mouseY < 260+55){
  noFill(0);
  rect(240, 260, 55, 55);
  if(mouseIsPressed){
    tela = 4
  }
}
}
function nivel4(){
    image(n4,0,0);
if(mouseX > 70 && mouseX < 70+40 && mouseY > 260 && mouseY < 260+40){
    noFill(0);
  rect(70, 260, 40, 40);
  if(mouseIsPressed){
    tela = 4
  }
}
if (mouseX > 120 && mouseX < 120+40 && mouseY > 260 && mouseY < 260+40){
    noFill(0);
  rect(120, 260, 40, 40);
  if(mouseIsPressed){
    tela = 4
  }
}
if (mouseX > 170 && mouseX < 170+40 && mouseY > 260 && mouseY < 260+40){
    noFill(0);
  rect(170, 260, 40, 40);
  if(mouseIsPressed){
    tela = 8
  }
}
}
function nivel5(){
  image(n5,0,0)
if(mouseX > 30 && mouseX < 30+50 && mouseY > 260 && mouseY < 260+70){
  noFill(0);
  rect(30,260,50,70)
  if(mouseIsPressed){
    tela = 4
  }
}
if(mouseX > 110 && mouseX < 110+70 && mouseY > 240 && mouseY < 240+70){
  noFill(0);
  rect(110,240,70,70);
  if(mouseIsPressed){
    tela = 4
  }
}
if(mouseX > 200 && mouseX < 200+70 && mouseY > 240 && mouseY < 240+70){
  noFill(0);
  rect(200, 240, 70, 70);
  if(mouseIsPressed){
    tela = 9
  }
}
}
function final(){
  image(n6,0,0)
}