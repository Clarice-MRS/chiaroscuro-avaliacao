/****************************
    RECUPERAR CARRINHO
****************************/

const carrinhoPagamento = carregarCarrinho();
const areaPagamento = document.getElementById("area-pagamento");
const carrinhoVazio = document.getElementById("carrinho-vazio-pagamento");
const botoesMetodo = document.querySelectorAll(".opcao-pagamento");
const pagamentoPix = document.getElementById("pagamento-pix");
const pagamentoCartao = document.getElementById("pagamento-cartao");
const formCartao = document.getElementById("form-cartao");
const confirmacaoPagamento = document.getElementById("confirmacao-pagamento");


/****************************
    FORMATAR VALORES
****************************/

function formatarValor(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}


/****************************
    VERIFICAR CARRINHO
****************************/

if (carrinhoPagamento.itens.length === 0) {

    areaPagamento.style.display = "none";
    carrinhoVazio.style.display = "block";

} else {

    areaPagamento.style.display = "block";
    carrinhoVazio.style.display = "none";

    document.getElementById("subtotal-pagamento").textContent =
        formatarValor(carrinhoPagamento.calcularSubtotal());

    document.getElementById("frete-pagamento").textContent =
        formatarValor(carrinhoPagamento.calcularTaxa());

    document.getElementById("total-pagamento").textContent =
        formatarValor(carrinhoPagamento.calcularTotal());


    /****************************
        GERAR PIX DEMONSTRATIVO
    ****************************/

    const chavePix = "CHI-" +
        Math.random().toString(36).substring(2, 10).toUpperCase();

    document.getElementById("chave-pix").textContent = chavePix;

    const totalPedido = carrinhoPagamento.calcularTotal();

    const conteudoQR =
        "CHIAROSCURO - PIX DEMONSTRATIVO" +
        " | CHAVE: " + chavePix +
        " | VALOR: " + totalPedido.toFixed(2);

    const imagemQR = document.getElementById("imagem-qrcode");

    imagemQR.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" +
        encodeURIComponent(conteudoQR);


    /****************************
        COPIAR CHAVE PIX
    ****************************/

    document.getElementById("copiar-pix").addEventListener("click", function() {

        navigator.clipboard.writeText(chavePix);

        this.innerHTML = '<i class="bi bi-check-lg"></i>';

    });


    /****************************
        ALTERNAR PAGAMENTO
    ****************************/

    confirmacaoPagamento.style.display = "block";

    botoesMetodo.forEach(function(botao) {

        botao.addEventListener("click", function() {

            botoesMetodo.forEach(function(outroBotao) {
                outroBotao.classList.remove("ativa");
            });

            botao.classList.add("ativa");

            if (botao.dataset.metodo === "pix") {

                pagamentoPix.hidden = false;
                pagamentoCartao.hidden = true;
                confirmacaoPagamento.style.display = "block";

            } else {
                pagamentoPix.hidden = true;
                pagamentoCartao.hidden = false;
                confirmacaoPagamento.style.display = "none";
            }
        });
    });


    /****************************
        FORMULÁRIO DO CARTÃO
    ****************************/

    formCartao.addEventListener("submit", function(event) {

        event.preventDefault();

        confirmacaoPagamento.style.display = "block";

        confirmacaoPagamento.scrollIntoView({
            behavior: "smooth"
        });
    });

    /****************************
        PAGAMENTO REALIZADO
    ****************************/

    document.getElementById("pagamento-realizado").addEventListener("click", function() {

        const confirmou = confirm(
            "Deseja confirmar a finalização da compra e esvaziar seu carrinho?"
        );

        if (confirmou) {
            carrinhoPagamento.limparCarrinho();
            salvarCarrinho(carrinhoPagamento);
            window.location.href = "index.html";
        }
    });
}