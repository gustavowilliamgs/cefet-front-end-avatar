const avatarNomeEl = document.querySelector("#avatar-nome");
const inputNomeEl = document.querySelector("#input-nome");

inputNomeEl.addEventListener("input", () => {
  avatarNomeEl.textContent = inputNomeEl.value;
  if (inputNomeEl.value.length <= 0) {
    avatarNomeEl.textContent = "Meu nome..."
  }
});

const avatarCorpoEl = document.querySelector("#avatar-corpo");
const avatarCabecaEl = document.querySelector("#avatar-cabeca");
const inputCorEl = document.querySelector("#input-cor");

inputCorEl.addEventListener("input", () => {
  avatarCorpoEl.style.backgroundColor = inputCorEl.value;
  avatarCabecaEl.style.backgroundColor = inputCorEl.value;
});

const cabelos = [
  "imgs/cabelo-careca.png",
  "imgs/cabelo-alaranjado-curto.png",
  "imgs/cabelo-azul-longo.png",
  "imgs/cabelo-marrom-curto.png",
  "imgs/cabelo-preto-medio.png",
  "imgs/cabelo-roxo-curto.png",
  "imgs/cabelo-verde-medio.png"
];

const avatarCabeloEl = document.querySelector("#avatar-cabelo");
const inputCabeloEl = document.querySelector("#input-cabelo");

inputCabeloEl.addEventListener("input", () => {
  avatarCabeloEl.src = cabelos[inputCabeloEl.value];
});

const acessorios = [
  document.querySelector("#avatar-oculos"),
  document.querySelector("#avatar-lacinhos"),
  document.querySelector("#avatar-bandana")
];

const inputsCheckbox = [
  document.querySelector("#input-oculos"),
  document.querySelector("#input-lacinho"),
  document.querySelector("#input-bandana")
];

inputsCheckbox.forEach((input, index) => {
  input.addEventListener("change", () => {
    acessorios[index].classList.toggle("visivel");
  });
});

const avatarEl = document.querySelector("#avatar-preview");
const btnSalvarEl = document.querySelector("#botao-salvar");

const salvarAvatar = () => {
  // no clique de um botão "Baixar imagem"...
  // 'avatarEl' deve conter o elemento #avatar-preview
  html2canvas(avatarEl, { useCORS: true }).then(function (canvas) {
    // a  foi gerada nesse objeto "canvas" e vamos pedir a ele
    // uma URL que a representa, codificada em uma String no modelo base64¹
    //
    // ¹base64: é uma forma de representar os pixels da imagem (ou qualquer
    // informação, na verdade) usando uma string com 64 tipos de caracteres
    // (todas as letras, maiúsculas e minúsculas, os algarismos de 0 a 9
    // e os símbolos '/' e '+'). Para mais informações, veja a página
    // da Wikipedia sobre base64 (https://pt.wikipedia.org/wiki/Base64)
    let imagemCodificadaEmURL = canvas.toDataURL();

    // cria um <a href="xxx" download="avatar.png"></a> dinamicamente
    // e o configura para que ele aponte (href) para uma URL que codifica
    // a imagem gerada pela biblioteca html2canvas
    let linkEl = document.createElement("a");
    linkEl.download = "avatar.png";
    linkEl.href = imagemCodificadaEmURL;

    // coloca esse link no body da página
    document.body.appendChild(linkEl);

    // simula um clique no link
    linkEl.click();
  });
  // fim da callback de clique do botão
}

btnSalvarEl.addEventListener("click", salvarAvatar);