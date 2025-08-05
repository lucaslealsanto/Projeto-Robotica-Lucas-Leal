// Exemplo de como você pode adicionar interatividade com JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        alert("Mensagem enviada com sucesso!");
    });
});
