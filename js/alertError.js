export const AlertError = {
    element: document.querySelector('.alertError'),
    open(){
        AlertError.element.classList.add('open')
    },

    close(){
        AlertError.element.classList.remove('open')
    }

} 

