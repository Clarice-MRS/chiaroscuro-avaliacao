const produtos = [

    {
        id: "1",
        nome: "Desobediência",
        descricao: "Ronit precisa voltar para sua cidade natal após a morte de seu pai, um rabino. Uma vez de volta, ela recorda a paixão proibida pela melhor amiga de infância.",
        preco: "29,90",
        categoria: "DVD's",
        imagem: "img/desobediencia.jpg",
        alt: "pôster do filme Desobediência"
    },

    {
        id: "2",
        nome: "Carol",
        descricao: "",
        preco: "35,90",
        categoria: "DVD's",
        imagem: "img/carol.jpg",
        alt: "pôster do filme Carol"
    },

    {
        id: "3",
        nome: "Chicago",
        descricao: "",
        preco: "25,90",
        categoria: "DVD's",
        imagem: "img/chicago.jpg",
        alt: "pôster do filme Chicago"
    },

    {
        id: "4",
        nome: "",
        descricao: "",
        preco: "",
        categoria: "",
        imagem: "img/",
        alt: ""
    },

    {
        id: "5",
        nome: "",
        descricao: "",
        preco: "",
        categoria: "",
        imagem: "img/",
        alt: ""
    },

    {
        id: "",
        nome: "",
        descricao: "",
        preco: "",
        categoria: "",
        imagem: "img/",
        alt: ""
    },

    {
        id: "",
        nome: "",
        descricao: "",
        preco: "",
        categoria: "",
        imagem: "img/",
        alt: ""
    },

    {
        id: "",
        nome: "",
        descricao: "",
        preco: "",
        categoria: "",
        imagem: "img/",
        alt: ""
    }
]




/****MODO ESCURO****/

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