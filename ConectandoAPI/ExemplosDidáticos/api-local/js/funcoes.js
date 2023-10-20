function cadastrar(e) {
    e.preventDefault();
    alert("Cadastrar");
}

async function buscarEndereco(cep) {
    console.log(`CEP: ${cep}`);

    let url = `https://viacep.com.br/ws`;
    let resource = `/${cep}/json`

    try {
        let request = await fetch(url + resource);
        let dados = await request.json();
        if (dados.erro) {
            alert("CEP inválido seu insólito escreve esta banalidade direito seu filho de uma pessoa bem aventurada nos confins da antártica")
        } else {
            document.getElementById("endereco").value = dados.logradouro
            document.getElementById("cidade").value = dados.localidade
            document.getElementById("estado").value = dados.uf
        }

    } catch (error) {
        alert(error)
    }
}
