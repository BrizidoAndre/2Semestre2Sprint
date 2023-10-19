const camisaLacoste = {
    descricao: "Camisa Polo",
    preco: 589.97,
    tamanho: "m",
    cor: "Amarelo",
    presente: true
}

// Isso é um exemplo de destruturadores.
// Perceba que eu apenas chamo o objeto
// As variáveis entre chaves e com o mesmo nome da propriedade
const {descricao, preco} = camisaLacoste;
const {presente} = camisaLacoste;



console.log("O PRODUTO:");
console.log();
console.log(`Descrição: ${descricao}`);
console.log(`Preço: ${preco}`);


console.log(`

    Descrição: ${descricao}
    Preço:     ${preco}
    Presente:  ${presente ? "Sim" : "Não"}

`);




const evento = {
    dataEvento : new Date(),
    descricaoEvento : "Evento de Javascript",
    titulo: "Programação Web",
    presencaEvento: true,
    comentario: "Evento top com o Eduardo Costa"
}

const {dataEvento, descricaoEvento, titulo, presencaEvento, comentario} = evento;

console.log(`
    Data Evento: ${dataEvento}
    Descrição: ${descricaoEvento}
    Titulo: ${titulo}
    Presença: ${presencaEvento}
    Comentario: ${comentario}

`);

// Criar uma desestruturação para um objeto filmes 
// Trazer somente 3 propriedades
// Crie um arquivo a parte e tente executar sem consulta