/****************************
    ELEMENTOS DO HTML
****************************/

const containerItens = document.getElementById("container-itens-pedido");

const carrinhoVazio = document.getElementById("carrinho-vazio");

const botaoZerar = document.getElementById("zerar-pedido");

const carrinho = carregarCarrinho();


/****************************
    FORMATAR PREÇO
****************************/

function formatarPreco(valor) {

    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valor);

}


/****************************
    MOSTRAR ITENS
****************************/

function mostrarItensCarrinho() {

    if (!containerItens) {
        return;
    }

    containerItens.innerHTML = "";

    if (carrinhoVazio) {

        carrinhoVazio.style.display =
            carrinho.itens.length === 0 ? "block" : "none";

    }

    for (const item of carrinho.itens) {

        containerItens.innerHTML += `

            <div class="item-carrinho" data-id="${item.produto.id}">

                <img
                    src="${item.produto.imagem}"
                    alt="${item.produto.alt}"
                >

                <div class="info-item-carrinho">

                    <h3>${item.produto.nome}</h3>

                    <p>${formatarPreco(item.produto.preco)}</p>

                    <div class="controle-quantidade">

                        <button
                            class="alterar-quantidade"
                            data-acao="diminuir"
                            type="button"
                            ${item.quantidade <= 1 ? "disabled" : ""}
                        >
                            −
                        </button>

                        <span>${item.quantidade}</span>

                        <button
                            class="alterar-quantidade"
                            data-acao="aumentar"
                            type="button"
                        >
                            +
                        </button>

                    </div>

                </div>

                <button class="apagar-item" type="button">
                    <i class="bi bi-trash"></i>
                </button>

            </div>

        `;

    }

}


/****************************
    ATUALIZAR TOTAL
****************************/

function atualizarTotal() {

    const subtotal = carrinho.calcularSubtotal();

    const taxa = carrinho.calcularTaxa();

    const total = carrinho.calcularTotal();

    const elementoSubtotal = document.getElementById("subtotal");

    const elementoTotal = document.getElementById("valor-total");

    const elementoTaxa = document.getElementById("taxa-entrega");


    if (elementoSubtotal) {
        elementoSubtotal.textContent = formatarPreco(subtotal);
    }

    if (elementoTaxa) {
        elementoTaxa.textContent = formatarPreco(taxa);
    }

    if (elementoTotal) {
        elementoTotal.textContent = formatarPreco(total);
    }

}


/****************************
    ALTERAR QUANTIDADE E EXCLUIR
****************************/

if (containerItens) {

    containerItens.addEventListener("click", function(event) {

        const botaoQuantidade = event.target.closest(".alterar-quantidade");

        const botaoExcluir = event.target.closest(".apagar-item");

        const itemHTML = event.target.closest(".item-carrinho");

        if (!itemHTML) {
            return;
        }

        const id = Number(itemHTML.dataset.id);


        // ALTERAR QUANTIDADE

        if (botaoQuantidade) {

            const item = carrinho.itens.find(
                item => item.produto.id === id
            );

            if (!item) {
                return;
            }

            if (botaoQuantidade.dataset.acao === "aumentar") {

                item.quantidade++;

            } else if (
                botaoQuantidade.dataset.acao === "diminuir" &&
                item.quantidade > 1
            ) {

                item.quantidade--;

            }

            salvarCarrinho(carrinho);

            mostrarItensCarrinho();

            atualizarTotal();

            return;

        }


        // EXCLUIR ITEM

        if (botaoExcluir) {

            const item = carrinho.itens.find(
                item => item.produto.id === id
            );

            if (!item) {
                return;
            }

            if (confirm(`Deseja remover ${item.produto.nome} do carrinho?`)) {

                carrinho.removerItem(id);

                salvarCarrinho(carrinho);

                mostrarItensCarrinho();

                atualizarTotal();

            }

        }

    });

}


/****************************
    ZERAR CARRINHO
****************************/

if (botaoZerar) {

    botaoZerar.addEventListener("click", function() {

        if (carrinho.itens.length === 0) {
            return;
        }

        if (confirm("Deseja remover todos os produtos do carrinho?")) {

            carrinho.limparCarrinho();

            salvarCarrinho(carrinho);

            mostrarItensCarrinho();

            atualizarTotal();

        }

    });

}


/****************************
    INICIALIZAÇÃO
****************************/

mostrarItensCarrinho();

atualizarTotal();