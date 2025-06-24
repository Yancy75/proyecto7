import contexto from './render-modal.html?raw';
/* cuando importamos un html es con signo de interrogacion y la palabra raw solo funciona en vite */
import './render-modal.css';
let modal;

/**
 * 
 * @param {HTMLDivElement} elemento 
 */



export const dibujaModal = (elemento) =>{

    if(modal) return;
    modal = document.createElement('div');
    modal.innerHTML = contexto;
    modal.className = 'modal-container hide-modal';

    elemento.append(modal);


}