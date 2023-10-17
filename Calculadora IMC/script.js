const arrPessoas = [];//array vazio

function calcular(e){

    e.preventDefault();
    
    // Pegar os dados do formulário
    // Validar se eles estõa prenchidos
    const nome = document.getElementById("nome").value.trim();

    const altura = parseFloat(document.getElementById("altura").value);

    const peso = parseFloat(document.getElementById("peso").value);

    // Verifica se os dados recebidos estão corretos
    // Senão retorna um alerta
    if (isNaN(altura) || isNaN(peso) || nome.length == 0) {
        alert("É necessário preencher os campos corretamente");
        // Colocamos um return vazio, para o método não continuar seguindo suas etapas aceitando um NaN
        return;
    }

    // Calcular o Imc
    const imc = calcularImc(altura, peso);

    // gera o texto da situação
    const situacao = retornaSituação(imc);
    
    let hoje = new Date().toLocaleString();

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const dataCadastro = day + "/" + month + "/" + year;

    //Gerando o objeto Pessoa com seus respectivos dados
    const pessoa = {nome, altura, peso, imc, situacao, dataCadastro};//objeto vazio

    // Adiciona a pessoa na lista
    arrPessoas.push(pessoa);

    // listar as pessoas
    listarPessoas();
}

// return peso / altura ** 2
function calcularImc(altura, peso){
    return peso / Math.pow(altura, 2);
}

// Retorna a situação com base no imc
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

// Retorna uma lista de pessoas cadastradas
function listarPessoas() {

    // Criando o array que aparecerá na listagem
    let template = [];


    arrPessoas.forEach(p => {
        // Aqui para cada item do array de cadastros estou criando uma variável de texto que mostra suas respectivas informações
        let cadastro =`
        <tr>
            <td>${p.nome}</td>
            <td>${p.altura}</td>
            <td>${p.peso}</td>
            <td>${p.imc.toFixed(2)}</td>
            <td>${p.situacao}</td>
            <td>${p.dataCadastro}</td>
        </tr>
    `
        // Agora adiciono cada item no array que aparece na listagem
        template.push(cadastro)
    ;
    
    // e por fim coloco esse array de texto dentro do html do tbody no html
    document.getElementById("corpo-tabela").innerHTML = template
    });
}