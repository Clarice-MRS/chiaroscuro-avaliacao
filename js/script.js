/****************************
    MODO ESCURO
****************************/

const trocaTema = document.getElementById("botao-modo-escuro");

function ativarModoEscuro() {
    document.body.classList.add("modo-escuro");
    localStorage.setItem("modo-escuro", "active");

    if (trocaTema) {
        trocaTema.innerHTML = '<i class="bi bi-sun-fill"></i> claro';
    }
}

function desativarModoEscuro() {
    document.body.classList.remove("modo-escuro");
    localStorage.setItem("modo-escuro", "inactive");

    if (trocaTema) {
        trocaTema.innerHTML = '<i class="bi bi-moon-fill"></i> escuro';
    }
}

// Recuperar preferência salva
if (localStorage.getItem("modo-escuro") === "active") {
    ativarModoEscuro();
} else {
    desativarModoEscuro();
}

// Alternar tema
if (trocaTema) {
    trocaTema.addEventListener("click", () => {
        if (document.body.classList.contains("modo-escuro")) {
            desativarModoEscuro();
        } else {
            ativarModoEscuro();
        }
    });
}

/****************************
    NEWSLETTER
****************************/

const formulario = document.getElementById("form-newsletter");
const mensagem = document.getElementById("mensagem-newsletter");

if (formulario && mensagem) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        mensagem.innerHTML = `
            <div class="mensagem-confirmacao">
                <strong>Você está oficialmente no nosso catálogo! 🎶🎬</strong>
                <p>
                    Prepare a pipoca: novidades, clássicos, raridades e ofertas
                    estão a caminho da sua caixa de entrada.
                </p>
                <p>
                    Porque música boa se escuta e filme bom se revive!
                </p>

                <img
                    src="img/pica-pau-dancando.gif"
                    alt="Pica-pau dançando"
                >
            </div>
        `;
        formulario.reset();
    });
}


/****************************
    CRIAR PRODUTOS
****************************/

function criarProdutos(lista, destino) {

    if (!destino) {
        return;
    }

    destino.innerHTML = "";

    for (const produto of lista) {

        destino.innerHTML += `

            <article class="produto-info" data-id="${produto.id}">
                <img
                    class="img-produto"
                    src="${produto.imagem}"
                    alt="${produto.alt}"
                >
                <span class="categoria${produto.categoria.toLowerCase()}">
                    ${produto.categoria}
                </span>

                <div class="informacoes">
                    <h2 class="nome">${produto.nome}</h2>

                    <span class="descricao">${produto.descricao}</span>
                </div>

                <div class="preco-avaliacao">
                    <span class="preco">
                        ${produto.preco.toFixed(2).replace(".", ",")}
                    </span>

                    <span class="avaliacao">
                        ${produto.avaliacao}
                    </span>
                </div>

                <div class="adicionar-produto">
                    <button class="botao-adicionar" type="button">
                        adicionar
                    </button>
                </div>
            </article>
        `;
    }
}

/****************************
    FILTRAR PRODUTOS
****************************/

function filtrarProdutos(categoria) {

    return produtos.filter(function(produto) {
        return produto.categoria === categoria;
    });
}


/****************************
    BUSCAR PRODUTOS
****************************/

function buscarProduto(termo) {

    return produtos.filter(function(produto) {

        return (
            produto.nome.toLowerCase().includes(termo.toLowerCase()) ||
            produto.categoria.toLowerCase().includes(termo.toLowerCase()) ||
            produto.descricao.toLowerCase().includes(termo.toLowerCase())
        );
    });
}

/****************************
    INTERAÇÕES DA PÁGINA
****************************/

document.addEventListener("DOMContentLoaded", function() {

    const cardProduto = document.getElementById("grid-colecao-itens");
    const botoesFiltro = document.querySelectorAll(
        ".filtrar-produtos button:not(#filtrar-todos)"
    );
    const botaoTodas = document.getElementById("filtrar-todos");
    const campoBusca = document.querySelector(".buscar-item input");
    const gridResultadosBusca = document.getElementById("grid-resultados-busca");
    const resultadosBusca = document.getElementById("resultados-busca");
    const tipoOrdenacao = document.getElementById("tipo-ordenacao");
    let produtosExibidos = [...produtos];

    // EXIBIR TODOS OS PRODUTOS

    criarProdutos(produtosExibidos, cardProduto);

    // FILTRAR POR CATEGORIA

    botoesFiltro.forEach(function(botao) {
        botao.addEventListener("click", function() {
            const categoria = botao.textContent.trim();
            produtosExibidos = filtrarProdutos(categoria);
            criarProdutos(produtosExibidos, cardProduto);
        });
    });

    // EXIBIR TODAS AS CATEGORIAS

    if (botaoTodas) {
        botaoTodas.addEventListener("click", function() {
            produtosExibidos = [...produtos];
            criarProdutos(produtosExibidos, cardProduto);
        });
    }

    // ORDENAR PRODUTOS

    if (tipoOrdenacao) {

        tipoOrdenacao.addEventListener("change", function() {

            const ordem = tipoOrdenacao.value;
            const produtosOrdenados = [...produtosExibidos];

            switch (ordem) {

                case "menor":
                    produtosOrdenados.sort(
                        (a, b) => a.preco - b.preco
                    );
                    break;

                case "maior":
                    produtosOrdenados.sort(
                        (a, b) => b.preco - a.preco
                    );
                    break;

                case "alfabetico":
                    produtosOrdenados.sort(
                        (a, b) => a.nome.localeCompare(b.nome)
                    );
                    break;

                case "ocitebafla":
                    produtosOrdenados.sort(
                        (a, b) => b.nome.localeCompare(a.nome)
                    );
                    break;
            }
            produtosExibidos = produtosOrdenados;
            criarProdutos(produtosExibidos, cardProduto);
        });
    }

    // BUSCAR PRODUTOS

    if (campoBusca && gridResultadosBusca && resultadosBusca) {

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
                            <img
                                src="img/picapaupiscando.gif"
                                alt="Pica-pau piscando"
                            >
                        </div>
                    `;

                } else {
                    criarProdutos(
                        resultadosEncontrados,
                        gridResultadosBusca
                    );
                }
            }
        });
    }
});


/****************************
    ADICIONAR PRODUTO
****************************/

document.addEventListener("click", function(event) {

    const botao = event.target.closest(".botao-adicionar");

    if (!botao) {
        return;
    }

    const card = botao.closest(".produto-info");

    if (!card) {
        return;
    }

    const id = Number(card.dataset.id);
    const dadosProduto = produtos.find(
        produto => produto.id === id
    );

    if (!dadosProduto) {
        return;
    }

    const carrinho = carregarCarrinho();
    carrinho.adicionarItem(dadosProduto, 1);
    salvarCarrinho(carrinho);
    botao.textContent = "adicionado!";
    alert(`${dadosProduto.nome} foi adicionado ao carrinho!`);
});

/****************************
    LOGIN E CADASTRO
****************************/

const formLogin = document.getElementById("form-login");
const formCadastro = document.getElementById("form-cadastro");
const mensagemAuth = document.getElementById("mensagem-autenticacao");


// Recuperar usuários cadastrados
function recuperarUsuarios() {

    return JSON.parse(localStorage.getItem("usuarios")) || [];

}

// CADASTRO

if (formCadastro) {

    formCadastro.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome-cadastro").value.trim();
        const email = document.getElementById("email-cadastro").value.trim().toLowerCase();
        const senha = document.getElementById("senha-cadastro").value;
        const usuarios = recuperarUsuarios();
        const emailExiste = usuarios.some(usuario => usuario.email === email);

        if (emailExiste) {

            alert("Este e-mail já está cadastrado.", "erro");
            return;

        }

        const novoUsuario = {
            nome: nome,
            email: email,
            senha: senha
        };

        usuarios.push(novoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        localStorage.setItem("usuarioLogado", JSON.stringify(novoUsuario));
        alert("Cadastro realizado com sucesso!", "sucesso");

        window.location.href = "index.html";
    });
}

// LOGIN

if (formLogin) {

    formLogin.addEventListener("submit", function(event) {

        event.preventDefault();
        const identificador = document
            .getElementById("identificador-login")
            .value.trim()
            .toLowerCase();

        const senha = document.getElementById("senha-login").value;
        const usuarios = recuperarUsuarios();
        const usuarioEncontrado = usuarios.find(function(usuario) {

            return (
                usuario.nome.toLowerCase() === identificador ||
                usuario.email === identificador
            );
        });

        if (!usuarioEncontrado) {
            alert("Usuário não encontrado.", "erro");
            return;
        }

        if (usuarioEncontrado.senha !== senha) {
            alert("Senha incorreta.", "erro");
            return;
        }

        // Salvar sessão
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
        alert("Login realizado com sucesso!", "sucesso");
        window.location.href = "index.html";
    });
}