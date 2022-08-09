![](https://i.imgur.com/xG74tOh.png)

# Prática Eventos

## Exercícios de classe 🏫

**1. Projeto "Galeria"**

### 1) Estrutura base da página
Primeiro crie a estrutura base da página, como indicado no print a seguir:

![](https://i.imgur.com/BHeAcpu.png)

Pontos de atenção:
- O menu lateral deverá seguir a tela conforme o usuário scrolle a mesma.
- A quantidade de items indicada é apenas uma ilustração, o layout deverá funcionar independende da quantidade de itens.

<details>
    <summary><b>Dicas</b></summary>
    <ul>
    <li><code>position: fixed</code></li>
    <li><code>flex-wrap: wrap</code></li>
    </ul>
</details>

### 2) Menu lateral
Depois, crie o menu lateral, como indicado no print a seguir:

![](https://i.imgur.com/5hcyZxh.png)

Pontos de atenção:
- O menu lateral deverá ser aberto quando o usuário clicar no icone "hamburguer"
- O menu lateral deverá ser fechado quando o usuário clicar no icone "X"
- O menu lateral deverá aparecer por cima da galeria

<details>
    <summary><b>Dicas</b></summary>
    <ul>
    <li><code>evento "click"</code></li>
    <li><code>classList</code></li>
    <li><code>z-index</code></li>
    </ul>
</details>

### 3) Modal
Depois, crie o modal, como indicado no print a seguir:

![](https://i.imgur.com/wr6LQ0G.png)

Pontos de atenção:
- O modal deverá ser aberto mostrando a foto da galeria que o usuário clicar
- O modal deverá ser fechado quando o usuário clicar no icone "X" ou no fundo transparente
- O icone "seta anterior" não deverá aparecer quando o usuário estiver visualizando a primeira imagem
- O icone "próxima seta" não deverá aparecer quando o usuário estiver visualizando a ultima imagem
- O icone "seta anterior", quando clicado, deverá mostrar a foto anterior da galeria considerando a imagem atual e não deverá fechar o modal
- O icone "próxima seta", quando clicado, deverá mostrar a próxima foto da galeria considerando a imagem atual e não deverá fechar o modal
- A imagem do modal, quando clicada, não deverá fechar o modal
- O modal deverá aparecer por cima do menu lateral 

<details>
    <summary><b>Dicas</b></summary>
    <ul>
    <li><code>evento "click"</code></li>
    <li><code>dataset/data attributes</code></li>
    <li><code>position: fixed</code></li>
    <li><code>position: absolute</code></li>
    <li><code>classList</code></li>
    <li><code>z-index</code></li>
    </ul>
</details>

### 4) Likes
Depois, crie o sistema de likes, como indicado no print a seguir:

![](https://i.imgur.com/3DipfWH.png)

Pontos de atenção:
- Se o usuário clicar duas vezes rapidamente (clique duplo) na imagem do modal, esta imagem deverá receber um like
- As imagens da galeria que tiverem likes, deverão indicar isso mostrando o icone de coração
- Quando o modal for aberto, se a imagem tiver um like, deverá indicar isso mostrando o icone de coração

<details>
    <summary><b>Dicas</b></summary>
    <ul>
    <li><code>evento "dblclick"</code></li>
    <li><code>position: absolute</code></li>
    <li><code>classList</code></li>
    <li><code>propriedade "previousElementSibling"</code></li>
    </ul>
</details>

---

###### tags: `módulo 2` `front-end` `HTML` `DOM`
