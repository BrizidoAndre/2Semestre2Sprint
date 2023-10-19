console.clear();

// A promise é um tipo de dado para guardar as repostas de API
// Nela, nós salvamos dois valores, um para caso a reposta for positiva e outra negativa
const api = new Promise((resolve, reject) => {
  let condition = false; //simula uma operação no back end

  const soma = (x, y) => x + y;

  //aqui simula uma chamada demorada ao servidor
  // Nós propositadamente setamos uma demora nesse processo para dar tempo a API a responder nosso pedido
  setTimeout(() => {
    console.log("promise sendo executada");
    if (condition) {
      resolve("A promise foi resolvida com sucesso.");
    } else {
      reject("A promise foi rejeitada.");
    }
  }, 3000);
});

console.log();
console.log();
console.log(api); //chamada na api
console.log();
console.log();

// Aqui é um try catch. O código tenta retornar a variável retorno e se falhar retorna os dados do erro
api
  .then((retorno) => {
    console.log(retorno);
  })
  .catch((erro) => {
    console.error(erro);
  });