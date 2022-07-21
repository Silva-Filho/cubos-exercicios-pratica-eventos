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
const setaParaDireita = document.querySelector(".imagem-wrapper-modal img:last-child");
/* console.log(setaParaDireita); */

const imgFecharMenu = "assets/open-menu.svg";
const imgAbrirMenu = "assets/closed-menu.svg";

// Manipular aba menu:
const manipularMenu = () => {
    const menuSrc = imgMenu.getAttribute("src");
    const imgSrc = menuSrc === imgAbrirMenu ? imgFecharMenu : imgAbrirMenu;

    header.classList.toggle("expandir-header");
    h2.forEach(elemento => elemento.classList.toggle("escondido"));
    imgMenu.setAttribute("src", imgSrc);
};

imgMenu?.addEventListener("click", manipularMenu);

// Manipular imagem a ser mostrada no modal:
const abrirModal = element => {
    console.log({ index: element.dataset.index });
    const src = element.src;
    const previousElement = element.previousElementSibling;
    const nextElement = element.nextElementSibling;

    imagemModal?.setAttribute("src", src);
    modal.style.display = "flex";
};

const selecionarImagem = event => {
    /* console.log({event: event}); */
    abrirModal(event.target)
};

/* const imagemSelecionada = imagem => imagem.addEventListener("click", selecionarImagem);

imagens.forEach(imagemSelecionada); */

imagemWrapper.forEach(item => {
    /* console.log(item); */
    /* const imagem = document.querySelector("img"); */
    const imagem = item.querySelector("img");
    /* console.log(imagem); */

    imagem?.addEventListener("click", event => {
        console.log({ index: event.target?.dataset.index });
        console.log({ id: Number(event.target?.dataset.id) });
        const src = event.target?.src;
        /* const previousElement = event.target?.previousElementSibling;
        const nextElement = event.target?.nextElementSibling; */
        const previousElement = item.previousElementSibling;
        console.log({ previousElement: previousElement });
        previousElement ?
            setaParaEsquerda?.classList.remove("escondido") :
            setaParaEsquerda?.classList.add("escondido");

        const nextElement = item.nextElementSibling;
        console.log({ nextElement: nextElement });
        nextElement ?
            setaParaDireita?.classList.remove("escondido") :
            setaParaDireita?.classList.add("escondido");

        imagemModal?.setAttribute("src", src);
        modal.style.display = "flex";
    });
});

// Fechar o modal:
const sairModal = () => modal.style.display = "none";

modal?.addEventListener("click", sairModal);

// Fechar o modal ao clicar fora da imagem:
const manterModalAberto = (event) => event.stopPropagation();

/* imagemWrapperModal.forEach( imagem => {
    imagem.addEventListener("click", manterModalAberto);
} ); */

imagemModal?.addEventListener("click", manterModalAberto);

// Trocar para imagem anterior se houver:


/* setaParaEsquerda.addEventListener("click", trocarImagem); */
