const numeros = [1,2,5,10,300];

// Note que a função map facilita a escrita de uma arrow function
// Também perceba que este método retorna outro array
const numeroDobro = numeros.map( n => n * 2)

console.log(numeros);
console.log(numeroDobro);

// Crie 2 array nomes e sobrenomes
// Crie um terceiro array de nomesCompleto
// Ao final exiba os noes completos no console com o foreach

// utilize arrow functions como callbacj functions 

const nome = ['Guilherme', 'Luis', 'Everton', 'Andre', 'João', 'Gabriela'];
const sobrenome = ['Souza', 'Correia', 'Araujo', 'Basilio', 'Gomes', 'Silva'];


const nomeCompleto = nome.map((nome, indice) => {
    return `${nome} ${sobrenome[indice]}`;
});

nomeCompleto.forEach((nc) => {
    console.log(nc);
})
