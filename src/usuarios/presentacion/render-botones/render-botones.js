import usuariosAlmacen from "../../almacen/usuarios-almacen";
import { dibujaTabla } from "../render-table/render-tablet";
import './render-botones.css';

/**
 * @param {HTMLDivElement} element
 */

export const renderBotones = (elemento)=>{
    const siguente = document.createElement('button');
    siguente.innerText = ' Siguiente >';

    const previo = document.createElement('button');
    previo.innerText = '< Previo ';

    const paginaActual = document.createElement('span');    
    paginaActual.id = 'Pagina-Actual';
    paginaActual.innerText = usuariosAlmacen.tomaPaginaActual();
    paginaActual.classList.add('btn');

    elemento.append(previo, paginaActual, siguente);

    siguente.addEventListener('click', async ()=>{
        await usuariosAlmacen.cargaProximapagina();
        paginaActual.innerText= usuariosAlmacen.tomaPaginaActual();
        dibujaTabla(elemento);
    });

    previo.addEventListener('click', async ()=>{
        await usuariosAlmacen.cargaPreviapagina();
        paginaActual.innerText = usuariosAlmacen.tomaPaginaActual();
        dibujaTabla(elemento);
    });

    

}