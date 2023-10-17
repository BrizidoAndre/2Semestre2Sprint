const mesa = ['Coral', 'Anna', 'Demétrio', 'Vinicius', 'Lacerda', 'Evelyn', 'Luiz'];


console.log("Callback Functions");
// Perceba que para cada item do array mesa, uma função Carlos se inicia
mesa.forEach(
    function Carlos(cadaPessoa) {
        console.log('Bom dia ' + cadaPessoa);
    }
);

// Função anônima - Note que a função não possui nome e funciona

mesa.forEach( function (cadaPessoa) {
        console.log('Bom dia ' + cadaPessoa);
});

console.log();
console.log('Começo da arrow function');

// Arrow Function - O parametro é seguido dos detalhes da função
mesa.forEach( (cadaPessoa) => {
    console.log("Bom dia " + cadaPessoa);
});
console.log();

console.log("Exemplos de função");

console.log("Função dentro de variável");
/**
 * Uma função dentro de uma variavel
 * @param {*} x 
 * @returns 
 */
let dobro = function(x) {
    return x * 2;
};
//Perceba que ao chamar a variável podemos passar também um parâmetro
console.log(dobro(5));



console.log("Arrow function com corpo de função");
/**
 * O mesmo exemplo acima sendo usada uma arrow function
 * @param {*} x 
 * @returns o triplo
 */
const triplo = (x) => {
    return x * 3;
};
//Mesmo caso acima
console.log(triplo(10));

console.log("Arrow function extremamente simples");
/**
 * Uma forma mais simplificada de uma arrow function sem a necessidade de colocar return
 * @param {*} x 
 * @returns o quíntuplo
 */
const quintuplo = x => x*5;

console.log(quintuplo(0));

console.log("Fim dos exemplos");

const bomDia = () => "Bom dia";//Retorna o texto Bom dia

console.log( bomDia() );
