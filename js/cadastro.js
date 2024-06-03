/*********************************************
 * DATA: 28/05/2024
 * HORA: 14:15
 * VERSÃO: 1.0
 * 
 * Código JavaScript para validação do CEP no cadastro e
 * para auto preencher os dados dos campos de Bairro,
 * Cidade e Estado.
 ******************************************/

async function validarCep() {
    var cep = document.getElementById("cep").value;

    // Limpa os campos de Bairro, Cidade e Estado
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (response.ok) {
            // Preenche os campos com os dados retornados pela API
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("estado").value = data.uf;
        } else {
            alert("CEP não encontrado. Por favor, verifique o CEP informado.");
        }
    } catch (error) {
        console.error("Erro ao buscar dados do CEP:", error);
        alert("Ocorreu um erro ao buscar dados do CEP. Por favor, tente novamente mais tarde.");
    }
}

//enviar dados ao backend
document.getElementById('form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('http://localhost:5501/api/cadastrar/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
        } else {
            alert(`Erro: ${result.error}`);
        }
    } catch (error) {
        console.error('Erro ao cadastrar:', error);
        alert('Erro ao cadastrar usuário');
    }
});

