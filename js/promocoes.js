// FILMES DA SAGA

const filmesDaSaga = [
    jogosvorazes,
    jogosvorazesemchamas,
    jogosvorazesesperanca,
    jogosvorazesesperanca2
];

// CÁLCULO DA PROMOÇÃO

const precoOriginal = filmesDaSaga.reduce(
    (total, filme) => total + filme.preco, 0
);

const percentualDesconto = 0.25;
const valorDesconto = precoOriginal * percentualDesconto;
const precoPromocional = precoOriginal - valorDesconto;


// FORMATAÇÃO DOS VALORES

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}


// MOSTRAR OS FILMES

const containerFilmes = document.getElementById("filmes-saga");

function mostrarSaga() {
    if (!containerFilmes) return;

    containerFilmes.innerHTML = "";

    for (const filme of filmesDaSaga) {
        containerFilmes.innerHTML += `
            <article class="filme-saga">
                <img src="${filme.imagem}" alt="${filme.alt}">

                <h3>${filme.nome}</h3>

                <span>${formatarPreco(filme.preco)}</span>
            </article>
        `;
    }
}

// MOSTRAR OS VALORES

function mostrarPromocao() {
    document.getElementById("preco-original").textContent =
        formatarPreco(precoOriginal);

    document.getElementById("valor-desconto").textContent =
        "- " + formatarPreco(valorDesconto);

    document.getElementById("preco-promocional").textContent =
        formatarPreco(precoPromocional);
}

// ADICIONAR A SAGA AO CARRINHO

const botaoSaga = document.getElementById("adicionar-saga");

if (botaoSaga) {
    botaoSaga.addEventListener("click", function() {

        const carrinho = carregarCarrinho();

        const produtoSaga = new Produto(
            1000,
            "Coleção completa - Jogos Vorazes",
            "Saga completa com os quatro filmes. Promoção de 25% de desconto.",
            Number(precoPromocional.toFixed(2)),
            "Saga",
            jogosvorazes.imagem,
            "Coleção completa Jogos Vorazes",
            5
        );

        carrinho.adicionarItem(produtoSaga);
        salvarCarrinho(carrinho);
        const mensagem = document.getElementById("mensagem-promocao");

        mensagem.textContent =
            "Coleção adicionada ao carrinho com sucesso!";
    });
}

// INICIALIZAÇÃO

mostrarSaga();
mostrarPromocao();