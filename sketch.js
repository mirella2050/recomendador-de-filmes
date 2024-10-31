//homem aranha,12,ação
//branquelas,15,comédia
//jumanji,13,comedia,ação
//a milhões de quilometro,12,drama
//a teia,16,mistério
//freira,14,terror
//noiva cadaver,12,suspense
function setup() {
  createCanvas(400, 400);
}
let campoOrcamento;
let campoPraia;
let campoCidadeGrande;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("idade");
  campoOrcamento = createInput("12");
  campoPraia = createCheckbox("Gosta de fantasia?");
  campoCidadeGrande = createCheckbox("Gosta de comedia e misterio?");
}

function draw() {
  background("rgb(228,24,24)");
  let orcamento = parseFloat(campoOrcamento.value());
  let gostaDePraia = campoPraia.checked();
  let gostaDeCidadesGrandes = campoCidadeGrande.checked();
  let recomendacao = geraRecomendacao(orcamento, gostaDePraia, gostaDeCidadesGrandes);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(orcamento, gostaDePraia, gostaDeCidadesGrandes) {
  if (orcamento >= 1000) {
    if (gostaDePraia) {
      return "homem aranha.";
    } else if (gostaDeCidadesGrandes) {
      return "branquelas.";
    } else {
      return "a freira.";
    }
  } else if (orcamento >= 500) {
    if (gostaDePraia) {
      return "jumanji.";
    } else if (gostaDeCidadesGrandes) {
      return "a milhões de quilometros.";
    } else {
      return "a noiva cadaver.";
    }
  } else {
    if (gostaDePraia) {
      return "a teia.";
    } else if (gostaDeCidadesGrandes) {
      return "";
    } else {
      return "";
    }
  }
}

