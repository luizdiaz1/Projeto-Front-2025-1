
function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if (e.target.id === 'fechar' || e.target.id === modalId) {
            modal.classList.remove('abrir');
        }
    });
}
