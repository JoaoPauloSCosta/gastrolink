// Função para limpar event listeners
function cleanupEventListeners(element) {
    if (!element) return;
    const newElement = element.cloneNode(true);
    if (element.parentNode) {
        element.parentNode.replaceChild(newElement, element);
    }
    return newElement;
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar tooltips do Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Gerenciar modal customizado
    const customizedModal = document.getElementById('customized');
    if (customizedModal) {
        customizedModal.addEventListener('hidden.bs.modal', function () {
            cleanupEventListeners(this.querySelector('form'));
        });
    }

    // Limpar listeners ao descarregar a página
    window.addEventListener('unload', function() {
        if (customizedModal) {
            cleanupEventListeners(customizedModal);
        }
    });
});
