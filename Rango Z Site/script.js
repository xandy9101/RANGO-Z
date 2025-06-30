const botao = document.querySelector('.botao');
const imagem = document.querySelector('.onca')
let estadoImagem = 0


function trocarImagem() {
  console.log('oi')

  const img1 =
  'oncapardaa.png';

  const img2 =
  'JacareIdle.png';

  const img3 =
  'ratinhasentadaA.png';


if(estadoImagem === 0){
  console.log(estadoImagem);
  imagem.src = img1;
  estadoImagem++;
} else if(estadoImagem === 1){
  imagem.src = img2;
  estadoImagem++;
}else if(estadoImagem === 2){
  imagem.src = img3;
  estadoImagem ++;
}else if(estadoImagem === 3){
  imagem.src = img1;
  estadoImagem ++;
}

/////arruma o erro que nao recomeça tudo de novo

}

botao.addEventListener('click', trocarImagem);