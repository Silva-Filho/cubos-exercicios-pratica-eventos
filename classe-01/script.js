const header = document.querySelector("header");
const imgMenu = document.querySelector(".menu");
const h2 = document.querySelectorAll("h2");
const menuInicial = document.querySelector(".inicial");
const menuCurtidas = document.querySelector(".favoritos");
const tituloH1 = document.querySelector("h1");
const imagemWrapper = document.querySelectorAll(".imagem-wrapper");
// const imagens = document.querySelectorAll(".imagem-wrapper img");
const modal = document.querySelector(".modal");
const imagemWrapperModal = document.querySelectorAll(".imagem-wrapper-modal img");
const imagemModal = document.querySelector(".imagem-modal");
const imagemLikeModal = document.querySelector(".imagem-gostei-modal");
// console.log(imagemLikeModal?.classList);
// const setaParaEsquerda = document.querySelector(".imagem-wrapper-modal img:first-child");
const setaParaEsquerda = document.querySelector(".prev-arrow");
// const setaParaDireita = document.querySelector(".imagem-wrapper-modal img:last-child");
const setaParaDireita = document.querySelector(".next-arrow");

const imgFecharMenu = "assets/open-menu.svg";
const imgAbrirMenu = "assets/closed-menu.svg";

let indiceImagem = 0;

// Manipular aba menu:
const manipularMenu = () => {
    const menuSrc = imgMenu.getAttribute("src");
    const imgSrc = menuSrc === imgAbrirMenu ? imgFecharMenu : imgAbrirMenu;

    header?.classList.toggle("expandir-header");
    h2.forEach(elemento => elemento.classList.toggle("escondido"));
    imgMenu?.setAttribute("src", imgSrc);
};

imgMenu?.addEventListener("click", manipularMenu);

function mostrarSetas() {
    setaParaEsquerda?.classList.remove("escondido");
    setaParaDireita?.classList.remove("escondido");

    if (indiceImagem === 0) {
        setaParaEsquerda?.classList.add("escondido");
    }

    if (indiceImagem === 9) {
        setaParaDireita?.classList.add("escondido");
    }
}

// Manipular imagem a ser mostrada no modal:
imagemWrapper.forEach(item => {
    const imagem = item.querySelector(".image-content");

    imagem?.addEventListener("click", event => {
        indiceImagem = Number(event.target?.dataset.id);

        const imagemGostei = imagem?.previousElementSibling;
        imagemGostei?.classList.contains("escondido") && imagemLikeModal?.classList.add("escondido");

        const src = event.target?.src;

        mostrarSetas();

        imagemModal?.setAttribute("src", src);
        modal.style.display = "flex";
    });
});

// Fechar o modal:
/* const sairModal = () => modal.style.display = "none"; */
const sairModal = event => {
    if (event.target !== modal?.firstElementChild) {
        return;
    }

    modal.style.display = "none";
};

modal?.addEventListener("click", sairModal);

// Fechar o modal ao clicar fora da imagem:
/* const manterModalAberto = (event) => event.stopPropagation();

imagemModal?.addEventListener("click", manterModalAberto); */

// Trocar para imagem anterior se houver:
setaParaEsquerda?.addEventListener("click", event => {
    event.stopPropagation();
    indiceImagem--;

    const imagemAtual = imagemWrapper[indiceImagem].querySelector(".image-content");
    const src = imagemAtual?.getAttribute("src");

    imagemModal?.setAttribute("src", src);

    mostrarSetas();
});

// Trocar para imagem posterior se houver:
setaParaDireita?.addEventListener("click", event => {
    event.stopPropagation();
    indiceImagem++;

    const imagemAtual = imagemWrapper[indiceImagem].querySelector(".image-content");
    const src = imagemAtual?.getAttribute("src");

    imagemModal?.setAttribute("src", src);

    mostrarSetas();
});

// Adicionar ou remover classe 'escondido' da imagem gostei:
imagemModal?.addEventListener("dblclick", () => {
    imagemWrapper[indiceImagem].classList.toggle("curtida");

    const imagemAtual = imagemWrapper[indiceImagem].querySelector("img:first-of-type");
    imagemAtual?.classList.toggle("escondido");

    imagemLikeModal?.classList.toggle("escondido");
});

// Mostrar apenas as imagens curtidas ao clicar em favoritos:
menuCurtidas?.addEventListener("click", () => {
    tituloH1.textContent = "Favoritos";

    imagemWrapper.forEach(item => {
        if (!item.classList.contains("curtida")) {
            item.classList.add("escondido");
        }
    });
});

// Mostrar todas as imagens ao clicar no menu inicial:
menuInicial?.addEventListener("click", () => {
    tituloH1.textContent = "Início";

    imagemWrapper.forEach(item => {
        item.classList.remove("escondido");
    });
});
