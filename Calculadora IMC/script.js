function calcular(){
    event.preventDefault();
    
    // Pegar os dados do formulário
    // Validar se eles estõa prenchidos
    let nome = document.getElementById("nome").value;

    let altura = parseFloat(document.getElementById("altura").value);

    let peso = parseFloat(document.getElementById("peso").value);

    if (isNaN(altura) || isNaN(peso) || nome.length == 0) {
        alert("É necessário preencher os campos corretamente");
        // Colocamos um return vazio, para o método não continuar seguindo suas etapas aceitando um NaN
        return;
    }

    // Calcular o Imc
    const imc = calcularImc(altura, peso);

    console.log(nome);
    console.log(altura);
    console.log(peso);
    console.log(imc);

    let situacao = retornaSituação(imc);

    console.log(situacao);
}

function calcularImc(altura, peso){
    return peso / Math.pow(altura, 2);
}

function retornaSituação(imc) {
    if (imc < 18.5) {
        return 'Magreza Severa'
    } else if (imc < 25) {
        return 'Peso Normal'
    } else if (imc < 30){
        return 'Acima do peso'
    } else if (imc < 35){
        return 'Obesidade I'
    } else if (imc < 40){
        return 'Obesidade II (severa)'
    } else {
        return 'Obesidade III (Cuidado!)'
    }
}