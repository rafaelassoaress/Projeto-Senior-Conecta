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


//Função responsável por mostrar mensagem de erro ou manter ocultas

function onChangeEmail(){
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword(){
    toggleButtonsDisable();
    togglePasswordErrors();
}

function isEmailValid(){
    const email = document.getElementById("email").value;
    if(!email){
        return false;
    }
    return validateEmail(email);
}

function toggleEmailErrors(){
    const email = document.getElementById('email').value;
    if(!email){
        document.getElementById('email-required-error').style.display = "block";
    } else{
        document.getElementById('email-required-error').style.display = "none";
    }

    if(validateEmail(email)){
        document.getElementById('email-ivalid-error').style.display = "none";
    } else {
        document.getElementById('email-invalid-error').style.display = "block";
    }
}

function togglePasswordErrors(){
    const password = document.getElementById('password').value;
    if(!password){
        document.getElementById('password-required-error').style.display = "block";
    } else {
        document.getElementById("password-required-error").style.display = "none";
    }
}

function toggleButtonsDisable(){
    const emailValid = isEmailValid();
    document.getElementById('recover-password-button').disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById('login-button').disabled = !emailValid || !passwordValid;
}

