const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');

// Ao clicar no link de cadastro, esconde o form de login e mostra o form de cadastro
signupLink.addEventListener('click', () => {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    });
    
    // Ao clicar no link de login, esconde o form de cadastro e mostra o form de login
    loginLink.addEventListener('click', () => {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    });
