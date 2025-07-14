import  usuariosAlmacen from '../../almacen/usuarios-almacen';
import { mostraModal} from '../render-modal/render-modal';
import {borradoUsuario} from '../../casos-de-uso/borrado-usuario-por-id'
import './render-tablet.css';

let tabla;

const creaTabla = () => {
    const tabla = document.createElement('table');
    tabla.classList.add('tabla');
    const tablaCabecera = document.createElement('thead');
    tablaCabecera.innerHTML = `
         <tr>
           <th>#ID</th>
           <th>Balance</th>
           <th>Nombre</th>
           <th>Apellido</th>
           <th>Activo</th>
           <th>Acciones</th>
          </tr>`;
    const tablaCuerpo = document.createElement('tbody');
   // console.log(tablaCabecera);
    tabla.append(tablaCabecera, tablaCuerpo);
    return tabla;
}

/**
 * 
 * @param {MouseEvent} evento 
 */

const tablaSeleccion = (evento) =>{
     /* le sto preguntado cual es el mas cerca que tenga la clase seleccion */
     const elemento = evento.target.closest('.seleccion');
     if(!elemento) return;
     const id = elemento.getAttribute('data-id');
     mostraModal(id);
}

/**
 * 
 * @param {MouseEvent} evento 
 */

const tablaBorrado =  async (evento) =>{
     /* le sto preguntado cual es el mas cerca que tenga la clase seleccion */
     const elemento = evento.target.closest('.borrado');
     if(!elemento) return;
     const id = elemento.getAttribute('data-id');
     try {
          const resultado = await borradoUsuario(id);
           await usuariosAlmacen.recargaPagina();
           document.querySelector('#Pagina-Actual').innerText = usuariosAlmacen.tomaPaginaActual();
           if(resultado){console.log(resultado);dibujaTabla();}
     } catch (error) {
          console.log(error);
          //alert(error);
     }
    
}
/**
 * @param {HTMLDivElement} elemento
 */

export const dibujaTabla = (elemento) =>{
   const usuarios = usuariosAlmacen.tomaUsuario();
   let bande = true; 
   if(!tabla){
     tabla = creaTabla();
     elemento.innerHTML ="";
     elemento.append(tabla);
      // agreagar listeners
     tabla.addEventListener('click', evento => tablaSeleccion(evento));
     tabla.addEventListener('click', evento => tablaBorrado(evento));
    }

    let tablaHTML="";
    usuarios.forEach(usuario =>{
    if(bande === true){ tablaHTML +=`<tr class="truno">`; bande=false;}else{ tablaHTML +=`<tr class="trdos">`; bande=true;}
      tablaHTML +=`
           <td>${usuario.id}</td>
           <td>${usuario.balance}</td>
           <td>${usuario.firstName}</td>
           <td>${usuario.lastName}</td>
           <td>${usuario.isActive}</td>
           <td><a href="#/"  class="tooltip"><i data-id="${usuario.id}" class="fa fa-floppy-o seleccion" aria-hidden="true"></i><span class="tooltiptext">Seleccion</span></a>
           |
           <a href="#/"  class="tooltip"><i data-id="${usuario.id}" class="fa fa-trash-o borrado" aria-hidden="true"></i><span class="tooltiptext">Borrado</span></a></td>
      </tr>`;
    });
    
    tabla.querySelector('tbody').innerHTML = tablaHTML;  
}