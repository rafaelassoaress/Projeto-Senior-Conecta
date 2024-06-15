$(document).ready(function() {
    // Função para exibir o menu ao passar o mouse sobre o ícone do menu
    $('.header').mouseenter(function() {
        $('.menu').fadeIn().addClass('animate__fadeIn');
        $('.menu-icon').fadeOut(500, function() {
            $(this).attr('src', '../Imagens/Background pra baixo.png').fadeIn(400);
        });
    });

    // Função para ocultar o menu ao retirar o mouse do ícone do menu
    $('.header').mouseleave(function() {
        $('.menu').fadeOut().removeClass('animate__fadeIn');
        $('.menu-icon').fadeOut(500, function() {
            $(this).attr('src', '../Imagens/Background.png').fadeIn(400);
        });
    });
});