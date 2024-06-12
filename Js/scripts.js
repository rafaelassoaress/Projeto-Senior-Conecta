document.getElementById('confiraBtn').addEventListener('click', function() {
    scrollToSection('escolha');
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function navigateTo(page) {
    window.location.href = page;
}

$(document).ready(function() {
    // Função para exibir o menu ao passar o mouse sobre o ícone do menu
    $('.header').mouseenter(function() {
        $('.menu').fadeIn().addClass('animate__fadeIn');
        $('.menu-icon').fadeOut(200, function() {
            $(this).attr('src', 'Imagens/Background pra baixo.png').fadeIn(200);
        });
    });

    // Função para ocultar o menu ao retirar o mouse do ícone do menu
    $('.header').mouseleave(function() {
        $('.menu').fadeOut().removeClass('animate__fadeIn');
        $('.menu-icon').fadeOut(200, function() {
            $(this).attr('src', 'Imagens/Background.png').fadeIn(200);
        });
    });
});