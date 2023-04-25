// Selecionando o botão de collapse
const sidebarCollapse = document.querySelector('#sidebarCollapse');
// Selecionando o sidebar
const sidebar = document.querySelector('#sidebar');

// Adicionando o evento de clique no botão de collapse
sidebarCollapse.addEventListener('click', function() {
    // Alternando a classe "active" no sidebar
    sidebar.classList.toggle('active');
});
