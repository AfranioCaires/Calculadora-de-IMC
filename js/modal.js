export const Modal = {
    wrapper: document.querySelector('.modalWrapper'),
    message: document.querySelector('.modal h2'),
    btnClose: document.querySelector('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

Modal.btnClose.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', handleKeyDown)
function handleKeyDown (event) {
    if (event.key === 'Escape') {
        Modal.close()
    }
}