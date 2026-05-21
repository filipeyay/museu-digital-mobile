// seleciona o botao
const btn = document.getElementById("btnTop")

// mostrar o botao somente quando o usuario rolar Xpx para baixo
window.addEventListener("scroll", function () {
  if (document.body.scroll > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

// funcao para voltar ao topo suave
function scrollTopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
