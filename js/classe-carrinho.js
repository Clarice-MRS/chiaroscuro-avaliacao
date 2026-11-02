class Carrinho {

    constructor() {
        this.itens = [];
    }


    // ADICIONAR PRODUTO

    adicionarItem(produto, quantidade = 1) {

        const itemExistente = this.itens.find(
            item => item.produto.id === produto.id
        );

        if (itemExistente) {

            itemExistente.quantidade += quantidade;

        } else {

            this.itens.push({
                produto: produto,
                quantidade: quantidade
            });

        }

    }


    // REMOVER PRODUTO

    removerItem(id) {

        this.itens = this.itens.filter(
            item => item.produto.id !== Number(id)
        );

    }


    // LIMPAR CARRINHO

    limparCarrinho() {

        this.itens = [];

    }


    // CALCULAR SUBTOTAL

    calcularSubtotal() {

        let subtotal = 0;

        for (const item of this.itens) {

            subtotal += item.produto.preco * item.quantidade;

        }

        return subtotal;

    }


    // CALCULAR TAXA

    calcularTaxa() {

        const subtotal = this.calcularSubtotal();

        if (subtotal === 0 || subtotal > 90) {
            return 0;
        }

        return 8.90;

    }


    // CALCULAR TOTAL

    calcularTotal() {

        return this.calcularSubtotal() + this.calcularTaxa();

    }

}


// CARREGAR CARRINHO

function carregarCarrinho() {

    const dados = JSON.parse(localStorage.getItem("carrinho")) || [];

    const carrinho = new Carrinho();

    for (const item of dados) {

        const quantidade = Number(item.quantidade);

        if (!Number.isFinite(quantidade) || quantidade <= 0) {
            continue;
        }

        const produto = new Produto(
            Number(item.id),
            item.nome,
            item.descricao,
            Number(item.preco ?? item.valor),
            item.categoria,
            item.imagem,
            item.alt,
            Number(item.avaliacao ?? 0)
        );

        carrinho.adicionarItem(produto, quantidade);

    }

    return carrinho;

}


// SALVAR CARRINHO

function salvarCarrinho(carrinho) {

    const dados = [];

    for (const item of carrinho.itens) {

        dados.push({

            id: item.produto.id,
            nome: item.produto.nome,
            descricao: item.produto.descricao,
            preco: item.produto.preco,
            categoria: item.produto.categoria,
            imagem: item.produto.imagem,
            alt: item.produto.alt,
            avaliacao: item.produto.avaliacao,
            quantidade: item.quantidade

        });

    }

    localStorage.setItem("carrinho", JSON.stringify(dados));

}