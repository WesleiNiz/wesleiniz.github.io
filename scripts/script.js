// Seleciona todos os botões de menu
const menuButtons = document.querySelectorAll('.menu-btn');

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Seleciona o submenu associado ao botão clicado
        const submenu = button.nextElementSibling;

        if (submenu) {
            // Alterna a exibição do submenu
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// Funcionalidade do menu colapsável
const toggleButton = document.getElementById('toggle-menu');
const sidebar = document.querySelector('.sidebar');

// Recupera o estado salvo do menu
const isSidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
if (isSidebarCollapsed) {
    const c = 'collapsed';
    sidebar.classList.add(c);
}

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    // Salva o estado do menu
    localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
});

// Lazy load para os itens da área principal
const lazyItems = document.querySelectorAll('.template-item[data-lazy]');

const lazyLoad = () => {
    lazyItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            item.classList.add('visible');
            item.removeAttribute('data-lazy'); // Remove o atributo para evitar recarregar
        }
    });
};

// Escutador para rolagem da página
window.addEventListener('scroll', lazyLoad);

// Dispara o lazy load uma vez na inicialização
lazyLoad();

function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX / zoomer.offsetWidth * 100
    y = offsetY / zoomer.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

// -------------------------------------------------------

