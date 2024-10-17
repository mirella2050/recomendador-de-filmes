//cruella 12,comedia, aventura
//procurando nemo, livre, aventura, comedia
//a freira,14,terror, misterio 
//enola holmes, 12 , misterio 
//meu malvado favorito 4,10, comedia
//a noiva cadaver livre, fantasia
//coraline e o mundo secreto ,10, terror , fantasia
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
} let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}  
