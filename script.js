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
        categoria: "Posteres",
        imagem: "img/agathaallalong1.jpg",
        alt: "pôster de agatha all along - Rio",
        avaliacao: "5"
    },

    {
        id: "5",
        nome: "Agatha All Along - Agatha Harkness",
        descricao: "20×30 cm • Papel fotográfico",
        preco: "15,90",
        categoria: "Posteres",
        imagem: "img/agathaallalong2.jpg",
        alt: "pôster de agatha all along - Agatha",
        avaliacao: "5"
    },

    {
        id: "6",
        nome: "Mayhem - Lady Gaga",
        descricao: "2024 • Pop • 33 RPM",
        preco: "399,00",
        categoria: "Vinis",
        imagem: "img/mayhemladygaga1.jpg",
        alt: "vinil mayhem - Lady Gaga",
        avaliacao: "4"
    },

    {
        id: "7",
        nome: "Mutter - Rammstein",
        descricao: "2001 • Metal • 45 RPM",
        preco: "365,45",
        categoria: "Vinis",
        imagem: "img/rammsteinmutter.jpg",
        alt: "vinil mutter - Rammstein",
        avaliacao: "4"
    },

    {
        id: "8",
        nome: "Lady Gaga - Gagacabana",
        descricao: "20×30 cm • Papel fotográfico",
        preco: "17,90",
        categoria: "Posteres",
        imagem: "img/gagacabana.jpg",
        alt: "pôster do show da Lady Gaga em Copacabana",
        avaliacao: "5"
    }
]

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

function criarProdutos(produtos) {

    for(const produto of produtos) {

        const cardProduto = document.getElementById("grid-colecao-itens");
        cardProduto.innerHTML += ` 
        <article class="produto-info">

            <img class="img-produto" src="${produto.imagem}" alt="${produto.alt}">

            <span class="categoria${produto.categoria.toLowerCase()}">
                ${produto.categoria}
            </span>
            
            <div class="informacoes">
                <h2 class="nome">${produto.nome}</h2>
                <span class="descricao">${produto.descricao} </span>
                <span class="preco">${produto.preco} </span>
                <span class="avaliacao">${produto.avaliacao}</span>
            </div>

        </article>
    `;
}    
}

criarProdutos(produtos);