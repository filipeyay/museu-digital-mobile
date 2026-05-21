const indicador = document.getElementById("indicador");

window.onscroll = function () {
  // pega a rolagem atual se der zero tenta outro
  const rolagem = document.documentElement.scrollTop || document.body.scrollTop;

  // pega a altura total da pagina
  const alturaTotal = document.documentElement.scrollHeight || document.body.scrollHeight;

  // pega altura total do usuario
  const alturaTela = window.innerHeight;


  // some ao final da página
  if ((rolagem + alturaTela) >= (alturaTotal - 100)) {
    indicador.style.display = "none";
  } else {
    indicador.style.display = "block";
  }
}
