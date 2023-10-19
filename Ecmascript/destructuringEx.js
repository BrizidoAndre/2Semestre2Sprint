const filmes = [{
    titulo: "A almondega assassina 2 O inimigo agora é outro",
    genero: "Romance",
    indicacao: "L",
    duracao: 89,
    produtora: "Marvel Studios",
    dataLancamento: "29/04/1998"
},  {
    titulo: "Tá chovendo lhamas Extra",
    genero: "Horror",
    indicacao: "+18",
    duracao: 15,
    produtora: "Gonzagas",
    dataLancamento: "01/09/2019"
}]


console.log(`
    Filmes`);

filmes.forEach(({titulo, genero, indicacao, duracao, produtora, dataLancamento}, i) => {

    console.log();

    console.log(`
    Filme :    ${i+1}
    Titulo:    ${titulo.toUpperCase()}
    Genero:    ${genero}
    Indicação: ${indicacao}
    Indicação: ${duracao}
    Indicação: ${produtora}
    Indicação: ${dataLancamento}`);

    console.log();
});
