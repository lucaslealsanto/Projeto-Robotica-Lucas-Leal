// script.js

document.addEventListener('DOMContentLoaded', function() {

    // Efeito de Hover nos Links de Navegação
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            link.style.transform = "scale(1.1)";
        });
        link.addEventListener('mouseleave', function() {
            link.style.transform = "scale(1)";
        });
    });

    // Validação do Formulário
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Previne o envio padrão para validação

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        if (!nome || !email) {
            alert("Por favor, preencha todos os campos.");
        } else {
            alert("Formulário enviado com sucesso!");
            form.reset();  // Limpa o formulário após envio
        }
    });

    // Animação de Desvanecimento das Seções
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.transition = 'opacity 1s ease-in-out';
        section.style.opacity = '0';
    });

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const position = section.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                section.style.opacity = '1';
            }
        });
    });

    // Animação de Exibição dos Projetos
    const projetoSection = document.getElementById('projetos');
    const projetos = projetoSection.querySelectorAll('.project');
    
    projetoSection.style.transition = 'opacity 1s ease-in-out';
    projetoSection.style.opacity = '0';

    window.add
