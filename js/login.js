/******************************
 * DATA: 28/05/2024
 * HORA: 12:35
 * VERSÃO: 1.0
 * 
 * Código JavaScript para definir as funções do login
 ******************************/

function validateForm() {
    var username = document.getElementById("username").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(username)) {
        alert("Por favor, insira um endereço de e-mail cadastrado.");
        return false; // Impede o envio do formulário se o e-mail não for válido
    }
    return true; // Permite o envio do formulário se o e-mail for válido
}

function validateLoginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Por favor, preencha todos os campos do formulário.");
        return false; // Impede o envio do formulário se algum campo estiver vazio
    }

    // Se todos os campos estiverem preenchidos, permita o envio do formulário
    return true;
}

