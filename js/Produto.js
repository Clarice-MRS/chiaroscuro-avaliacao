class Produto {
  
    constructor(id, nome, descricao, preco, categoria, imagem, alt, avaliacao) {

        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
        this.imagem = imagem;
        this.alt = alt;
        this.avaliacao = avaliacao;
    }
}

const desobediencia = new Produto

    (
        1,
        "Desobediência",
        "2017 • Romance • 1h54min",
        29.90,
        "DVD",
        "img/desobediencia.jpg",
        "pôster do filme Desobediência",
        4
    )

const carol = new Produto   

    (
        2,
        "Carol",
        "2015 • Romance 1h58min",
        35.90,
        "DVD",
        "img/carol.jpg",
        "pôster do filme Carol",
        4
    )

const chicago = new Produto

    (
        3,
        "Chicago",
        "2002 • Musical • 1h53min",
        25.90,
        "DVD",
        "img/chicago.jpg",
        "pôster do filme Chicago", 
        4
    )

const agathaallalong1 = new Produto

    (
        4,
        "Agatha All Along - Rio Vidal",
        "20×30 cm • Papel fotográfico",
        15.90,
        "Poster",
        "img/agathaallalong1.jpg",
        "pôster de agatha all along - Rio",
        5
    )

const agathaallalong2 = new Produto

    (
        5,
        "Agatha All Along - Agatha Harkness",
        "20×30 cm • Papel fotográfico",
        15.90,
        "Poster",
        "img/agathaallalong2.jpg",
        "pôster de agatha all along - Agatha",
        5
    )

const mayhem = new Produto

    (
        6,
        "Mayhem - Lady Gaga",
        "2024 • Pop • 33 RPM",
        399.90,
        "Vinil",
        "img/mayhemladygaga1.jpg",
        "Vinil mayhem - Lady Gaga",
        4
    )

const mutter = new Produto

    (
        7,
        "Mutter - Rammstein",
        "2001 • Metal • 45 RPM",
        365.45,
        "Vinil",
        "img/rammsteinmutter.jpg",
        "Vinil mutter - Rammstein",
        4
    )

const gagacabana = new Produto

    (
        8,
        "Lady Gaga - Gagacabana",
        "20×30 cm • Papel fotográfico",
        17.90,
        "Poster",
        "img/gagacabana.jpg",
        "pôster do show da Lady Gaga em Copacabana",
        5
    )

const rare = new Produto    

    (
        9,
        "Selena Gomez -  Rare",
        "2020 • Pop • 33RPM",
        245.90,
        "Vinil",
        "img/rareselenagomez.jpg",
        "vinil rare - selena gomez",
        5
    )

const midnightminuet = new Produto

    (
        10,
        "The Yagas - Midnight Minuet",
        "20x30 cm • Papel holográfico",
        18.90,
        "Poster",
        "img/theyagas.jpg",
        "pôster midnight minuet - the yagas",
        5
    )

const odragaochines = new Produto    

    (
        11,
        "O Dragão Chinês",
        "1971 • Ação • 1h55min",
        75.90,
        "DVD",
        "img/dragaochines.jpg",
        "pôster do filme o dragão chinês",
        4
    )

const killbill = new Produto    

    (
        12,
        "Kill Bill",
        "2003 • Ação • 1h51min",
        57.90,
        "DVD",
        "img/killbill.jpg",
        "pôster do filme kill bill",
        5
    )

const jogosvorazes = new Produto

    (
        13,
        "Jogos Vorazes",
        "2012 • Ação • 2h22min",
        37.65,
        "DVD",
        "img/jogosvorazes.jpg",
        "pôster do filme jogos vorazes",
        5
    )

const jogosvorazesemchamas = new Produto

    (
        14,
        "Jogos Vorazes",
        "2013 • Ação • 2h22min",
        38.80,
        "DVD",
        "img/jogosvorazesemchamas.jpg",
        "pôster do filme jogos vorazes em chamas",
        5
    )

const jogosvorazesesperanca = new Produto

    (
        15,
        "Jogos Vorazes: a esperança",
        "2014 • Ação • 2h03min",
        40.50,
        "DVD",
        "img/jogosvorazesaesperanca.jpg",
        "pôster do filme jogos vorazes a esperança parte 1",
        5
    )

const jogosvorazesesperanca2 = new Produto

    (
        16,
        "Jogos Vorazes: a esperança 2",
        "2015 • Ação • 2h37min",
        42.65,
        "DVD",
        "img/jogosvorazesaesperanca2.jpg",
        "pôster do filme jogos vorazes a esperança o final",
        5
    )

const thenothing = new Produto

    (
        17,
        "The Nothing - Korn",
        "2019 • Metal • 45RPM",
        303.91,
        "Vinil",
        "img/thenothing.jpg",
        "vinil the nothing - korn",
        4
    )

const babyonemoretime = new Produto

    (
        18,
        "Baby one more time - Britney Spears",
        "1999 • Pop • 33RPM",
        449.90,
        "Vinil",
        "img/babyonemoretime.jpg",
        "vinil baby one more time - britney spears",
        4
    )

const estranhomundodejack = new Produto

    (
        19,
        "O estranho mundo de Jack",
        "20x30 cm • Papel holográfico",
        13.90,
        "Poster",
        "img/jack.jpg",
        "pôster do filme o estranho mundo de jack",
        4
    )

const ritalee = new Produto

    (
        20,
        "Rita Lee - Rita Lee",
        "1979 • Pop Rock • 33RPM",
        229.90,
        "Vinil",
        "img/ritalee.jpg",
        "vinil Rita Lee - Rita Lee",
        5
    )

const produtos = [
    desobediencia,
    carol,
    chicago,
    agathaallalong1,
    agathaallalong2,
    mayhem,
    mutter,
    gagacabana,
    rare,
    midnightminuet,
    odragaochines,
    killbill,
    jogosvorazes,
    jogosvorazesemchamas,
    jogosvorazesesperanca,
    jogosvorazesesperanca2,
    thenothing,
    babyonemoretime,
    estranhomundodejack,
    ritalee
];