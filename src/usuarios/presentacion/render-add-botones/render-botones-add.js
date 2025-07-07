import { mostraModal } from '../render-modal/render-modal';
import './render-botones-add.css';
/**
 * 
 * @param {HTMLDivElement} elemento 
 */


export const dibujaAgregaboton = (elemento) =>{

    const fabboton = document.createElement('button');
    fabboton.innerText = '+';
    fabboton.classList.add('fab-boton');
    
    elemento.append(fabboton);

    fabboton.addEventListener('click', ()=>{
       mostraModal();
    });
}