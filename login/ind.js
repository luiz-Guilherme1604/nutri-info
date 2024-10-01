const submitBtnn = document.querySelector('.btn');

// Função para mostrar senha
function mostrarSenha(tipo) {
    let senha;
    if (tipo === 'login') {
        senha = document.getElementById('password');
        document.getElementById('on').style.display = 'none';
        document.getElementById('of').style.display = 'block';
    } else if (tipo === 'signup') {
        senha = document.getElementById('signup_password');
        document.getElementById('signup_on').style.display = 'block';
        document.getElementById('signup_off').style.display = 'none';
    }
    if (senha.type === "password") {
        senha.type = "text";
    }
}

// Função para ocultar senha
function ocultarSenha(tipo) {
    let senha;
    if (tipo === 'login') {
        senha = document.getElementById('password');
        document.getElementById('on').style.display = 'block';
        document.getElementById('of').style.display = 'none';
    } else if (tipo === 'signup') {
        senha = document.getElementById('signup_password');
        document.getElementById('signup_on').style.display = 'block';
        document.getElementById('signup_off').style.display = 'none';
    }
    if (senha.type === "text") {
        senha.type = "password";
    }
}

// Adiciona o evento para o Enter
document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        let submitBtn = document.querySelector('.btn');
        if (submitBtn) {
            submitBtn.click();
        }
    }
});
