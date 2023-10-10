function GerarApelido(){
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let apelido = document.getElementById("apelido").value;

    let exibir = nome.replace(nome,apelido);
    

    document.getElementById('resposta').innerText = exibir
}