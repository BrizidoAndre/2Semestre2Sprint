function calcular() {//soma
    event.preventDefault();//parar o submit do formulário. Parar de darrefresh na página

    //criar uma variável para cada número
    let n1 = parseFloat(document.getElementById('n1').value);//campo 1
    let n2 = parseFloat(document.getElementById('n2').value);//campo 2
    let op = document.getElementById('operacao').value;//valor selecionado no select
    let resultado;//undefined
    let res;

    if (isNaN(n1) || isNaN(n2)) {
        alert(`É necessário colocar um número`)
    }

    else if (op == '+') {
        resultado = somar(n1, n2);

    }
    else if (op == '-') {
        resultado = subtrair(n1, n2);

    } //continuar a validação para as 5 opções
    else if (op == '*') {
        resultado = multiplicar(n1, n2);
 
    }
    else if (op == '/') {
        resultado = dividir(n1, n2);

    }
    else{
        resultado = "É necessario inserir uma operação"
    }
    // criar as 4 funções, uma para cada operação

    document.getElementById('result').innerText = resultado;
    // alert(`Resultado da soma é: ${resultado}`);
    // alert(`Resultado da soma é: ${resultado}`);
    // alert(`Resultado da multiplicação é: ${resultado}`)
    // alert(`Resultado da divisão é: ${resultado}`)

}//fim da função calcular

function somar(x, y) {
    return x + y;
}

function subtrair(x, y) {
    return x - y;
}

function multiplicar(x, y) {
    return x * y;
}
function dividir(x, y) {
    if (y == 0) {
        return "infinito. É impossível dividir por zero"
    }
    return x / y;
}