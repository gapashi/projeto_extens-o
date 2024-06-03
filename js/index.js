/**********************************************
 * DATA: 28/05/2024
 * HORA: 11:33
 * VERSÃO: 1.0
 * 
 * Código em JavaScript para as funções da Página Inicial do site
 * do Projeto de Extensão, requisito para a avaliação da disciplina
 * de Web Programming for Front-End.
 *************************************************/

document.getElementById("homeLink").addEventListener("click", function(event) {
    location.reload(); // Atualiza a página quando clicado no link "HOME"
});

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os links da navegação com a classe "nav-text"
    const navLinks = document.querySelectorAll("nav .nav-text");

    // Itera sobre cada link da navegação
    navLinks.forEach(link => {
        // Adiciona um evento de clique a cada link
        link.addEventListener("click", function(event) {
            // Previne o comportamento padrão do link (não recarregar a página)
            event.preventDefault();

            // Obtém o valor do atributo href do link (o id da seção de destino)
            const targetId = this.getAttribute("href");

            // Obtém a posição vertical da seção de destino
            const targetPosition = document.querySelector(targetId).offsetTop;

            // Faz a rolagem suave até a seção de destino
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    });
});
