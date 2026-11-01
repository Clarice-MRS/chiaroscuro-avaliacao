const produtos = [

    {
        id: "1",
        nome: "Desobediência",
        descricao: "2017 • Romance • 1h54min",
        preco: "29,90",
        categoria: "DVD",
        imagem: "img/desobediencia.jpg",
        alt: "pôster do filme Desobediência",
        avaliacao: "4"
    },

    {
        id: "2",
        nome: "Carol",
        descricao: "2015 • Romance 1h58min",
        preco: "35,90",
        categoria: "DVD",
        imagem: "img/carol.jpg",
        alt: "pôster do filme Carol",
        avaliacao: "4"
    },

    {
        id: "3",
        nome: "Chicago",
        descricao: "2002 • Musical • 1h53min",
        preco: "25,90",
        categoria: "DVD",
        imagem: "img/chicago.jpg",
        alt: "pôster do filme Chicago", 
        avaliacao: "4"
    },

    {
        id: "4",
        nome: "Agatha All Along - Rio Vidal",
        descricao: "20×30 cm • Papel fotográfico",
        preco: "15,90",
        categoria: "Poster",
        imagem: "img/agathaallalong1.jpg",
        alt: "pôster de agatha all along - Rio",
        avaliacao: "5"
    },

    {
        id: "5",
        nome: "Agatha All Along - Agatha Harkness",
        descricao: "20×30 cm • Papel fotográfico",
        preco: "15,90",
        categoria: "Poster",
        imagem: "img/agathaallalong2.jpg",
        alt: "pôster de agatha all along - Agatha",
        avaliacao: "5"
    },

    {
        id: "6",
        nome: "Mayhem - Lady Gaga",
        descricao: "2024 • Pop • 33 RPM",
        preco: "399,00",
        categoria: "Vinil",
        imagem: "img/mayhemladygaga1.jpg",
        alt: "Vinil mayhem - Lady Gaga",
        avaliacao: "4"
    },

    {
        id: "7",
        nome: "Mutter - Rammstein",
        descricao: "2001 • Metal • 45 RPM",
        preco: "365,45",
        categoria: "Vinil",
        imagem: "img/rammsteinmutter.jpg",
        alt: "Vinil mutter - Rammstein",
        avaliacao: "4"
    },

    {
        id: "8",
        nome: "Lady Gaga - Gagacabana",
        descricao: "20×30 cm • Papel fotográfico",
        preco: "17,90",
        categoria: "Poster",
        imagem: "img/gagacabana.jpg",
        alt: "pôster do show da Lady Gaga em Copacabana",
        avaliacao: "5"
    }
]

let produtosExibidos = [...produtos];

/****************************
    MODO ESCURO
****************************/

    const trocaTema = document.getElementById("botao-modo-escuro");

    const ativarModoEscuro = () => {
        document.body.classList.add("modo-escuro");
    };

    const desativarModoEscuro = () => {
        document.body.classList.remove("modo-escuro");
    };

    trocaTema.addEventListener("click", () => {
        if (document.body.classList.contains("modo-escuro")) {
            desativarModoEscuro();
            localStorage.setItem("modo-escuro", "inactive");
            trocaTema.innerHTML = '<i class="bi bi-moon-stars-fill"></i> escuro';
        } else {
            ativarModoEscuro();
            localStorage.setItem("modo-escuro", "active");
            trocaTema.innerHTML = '<i class="bi bi-sun-fill"></i> claro';
        }
    });

    if (localStorage.getItem("modo-escuro") === "active") {
        ativarModoEscuro();
        trocaTema.innerHTML = '<i class="bi bi-sun-fill"></i> claro';
    }

/****************************
    NEWSLETTER - MENSAGEM
****************************/

const formulario = document.getElementById("form-newsletter");
const mensagem = document.getElementById("mensagem-newsletter");

if (formulario && mensagem) {
        
    formulario.addEventListener("submit", function(event) {
        
        event.preventDefault();
        
        mensagem.innerHTML = `
            <div class="mensagem-confirmacao">
                <strong>Você está oficialmente no nosso catálogo! 🎶🎬</strong>
                <p>Prepare a pipoca: novidades, clássicos, raridades e ofertas estão a caminho da sua caixa de entrada.</p>
                <p>Porque música boa se escuta e filme bom se revive!</p>
                <img src="img/pica-pau-dancando.gif" alt="pica-pau dançando">
            </div>
        `;
        
        formulario.reset();
});
}

/****************************
    CRIAR PRODUTOS
****************************/

const cardProduto = document.getElementById("grid-colecao-itens");

function criarProdutos(produtos, destino) {

    for (const produto of produtos) {

        destino.innerHTML += `
            <article class="produto-info">
                <img class="img-produto" src="${produto.imagem}" alt="${produto.alt}">

                <span class="categoria${produto.categoria.toLowerCase()}">
                    ${produto.categoria}
                </span>

                <div class="informacoes">
                    <h2 class="nome">${produto.nome}</h2>
                    <span class="descricao">${produto.descricao}</span>
                </div>

                <div class="preco-avaliacao">
                    <span class="preco">${produto.preco}</span>
                    <span class="avaliacao">${produto.avaliacao}</span>
                </div>

                <div class="adicionar-produto">
                    <button class="botao-adicionar" type="button">adicionar</button>
                </div>
            </article>
        `;
    }
}

/****************************
    FILTRAR PRODUTOS
****************************/

function filtrarProdutos(categoria) {

    const produtosFiltrados = [];

    for (const produto of produtos) {

        if (produto.categoria === categoria) {
            produtosFiltrados.push(produto);
        }
    }

    return produtosFiltrados;
}


/****************************
    BUSCAR PRODUTOS
****************************/

function buscarProduto(termo) {

    const resultadosEncontrados = [];

    for (const produto of produtos) {

        if (
            produto.nome.toLowerCase().includes(termo.toLowerCase()) ||
            produto.categoria.toLowerCase().includes(termo.toLowerCase()) ||
            produto.descricao.toLowerCase().includes(termo.toLowerCase())
        ) {
            resultadosEncontrados.push(produto);
        }
    }

    return resultadosEncontrados;
}

/****************************
    INTERAÇÕES DA PÁGINA
****************************/

document.addEventListener("DOMContentLoaded", function() {


    // ELEMENTOS HTML

    const botoesFiltro = document.querySelectorAll(".filtrar-produtos button:not(#filtrar-todos)");
    const botaoTodas = document.getElementById("filtrar-todos");

    const campoBusca = document.querySelector(".buscar-item input");
    console.log("Campo de busca:", campoBusca);
    const gridResultadosBusca = document.getElementById("grid-resultados-busca");
    const resultadosBusca = document.getElementById("resultados-busca");

    const tipoOrdenacao = document.getElementById("tipo-ordenacao");

    // EXIBIR TODOS OS PRODUTOS

    criarProdutos(produtos, cardProduto);


    // FILTRAR PRODUTOS

    botoesFiltro.forEach(function(botao) {

        botao.addEventListener("click", function() {

            const categoria = botao.textContent.trim();

            produtosExibidos = filtrarProdutos(categoria);

            cardProduto.innerHTML = "";

            criarProdutos(produtosExibidos, cardProduto);
        });

    });


    // EXIBIR TODAS AS CATEGORIAS

    botaoTodas.addEventListener("click", function() {

        produtosExibidos = [...produtos];

        cardProduto.innerHTML = "";

        criarProdutos(produtosExibidos, cardProduto);
    });

        // ORDENAR PRODUTOS

    tipoOrdenacao.addEventListener("change", function() {

        const ordem = tipoOrdenacao.value;

        // Cria tipo uma cópia do que já tme nos produtos
        const produtosOrdenados = [...produtosExibidos];

        function converterPreco(preco) {
            return Number(preco.replace(",", "."));
        }

        switch (ordem) {

            case "menor":
                produtosOrdenados.sort((a, b) => {
                    return converterPreco(a.preco) - converterPreco(b.preco);
                });
                break;

            case "maior":
                produtosOrdenados.sort((a, b) => {
                    return converterPreco(b.preco) - converterPreco(a.preco);
                });
                break;

            case "alfabetico":
                produtosOrdenados.sort((a, b) => {
                    return a.nome.localeCompare(b.nome);
                });
                break;

            case "ocitebafla":
                produtosOrdenados.sort((a, b) => {
                    return b.nome.localeCompare(a.nome);
                });
                break;
        }

        produtosExibidos = produtosOrdenados;

        cardProduto.innerHTML = "";

        criarProdutos(produtosOrdenados, cardProduto);

    });

    // BUSCAR PRODUTOS

    campoBusca.addEventListener("input", function() {

        const termo = campoBusca.value.trim();
        const resultadosEncontrados = buscarProduto(termo);

        gridResultadosBusca.innerHTML = "";

        if (termo === "") {

            resultadosBusca.style.display = "none";

        } else {

            resultadosBusca.style.display = "block";

            if (resultadosEncontrados.length === 0) {

                gridResultadosBusca.innerHTML = `
                    <div class="busca-invalida">
                        <p>Sem resultados...</p>
                        <img src="img/semresultados.gif" alt="Pica-pau balançando a cabeça em negação">
                    </div>
                `;

            } else {

                criarProdutos(resultadosEncontrados, gridResultadosBusca);

            }
        }

    });

});