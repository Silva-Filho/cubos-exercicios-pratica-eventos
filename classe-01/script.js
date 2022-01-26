const imgMenu = document.querySelector(".menu");
/* console.log(imgMenu); */
const h2 = document.querySelectorAll("h2");
/* console.log(h2); */
const header = document.querySelector("header");
/* console.log(header); */
const imagemWrapper = document.querySelectorAll(".imagem-wrapper");
/* console.log(imagemWrapper); */
const imagens = document.querySelectorAll(".imagem-wrapper img");
/* console.log(imagens); */
const modal = document.querySelector(".modal");
const imagemWrapperModal = document.querySelectorAll(".imagem-wrapper-modal img");
/* console.log(imagemWrapperModal); */
const imagemModal = document.querySelector(".imagem-modal");
const setaParaEsquerda = document.querySelector(".imagem-wrapper-modal img:first-child");
/* console.log(setaParaEsquerda); */

const imgFecharMenu = "assets/open-menu.svg";
const imgAbrirMenu = "assets/closed-menu.svg";

// Manipular aba menu:
const manipularMenu = () => {
    const menuSrc = imgMenu.getAttribute("src");
    /* console.log(menuSrc); */
    const imgSrc = menuSrc === imgAbrirMenu ? imgFecharMenu : imgAbrirMenu;
    /* console.log(imgSrc); */

    header.classList.toggle("expandir-header");
    h2.forEach( elemento => elemento.classList.toggle("escondido") );
    imgMenu.setAttribute("src", imgSrc);
    /* console.log(imgMenu); */
};

imgMenu.addEventListener("click", manipularMenu);

// Manipular imagem a ser mostrada no modal:
const abrirModal = element => {
    const src = element.src;
    const previousElement = element.previousElementSibling;
    /* console.log(previousElement); */
    const nextElement = element.nextElementSibling;
    /* console.log(nextElement); */

    imagemModal.setAttribute("src", src);
    modal.style.display = "flex";

};

/* const selecionarImagem = event => abrirModal(event.target.src); */
const selecionarImagem = event => abrirModal(event.target);

const imagemSelecionada = imagem => imagem.addEventListener("click", selecionarImagem);

imagens.forEach(imagemSelecionada);

// Fechar o modal:
const sairModal = () => modal.style.display = "none";

modal.addEventListener("click", sairModal);

// Fechar o modal ao clicar fora da imagem:
const manterModalAberto = (event) => event.stopPropagation();

imagemWrapperModal.forEach( imagem => {
    imagem.addEventListener("click", manterModalAberto);
} );

// Trocar para imagem anterior se houver:


/* setaParaEsquerda.addEventListener("click", trocarImagem); */
