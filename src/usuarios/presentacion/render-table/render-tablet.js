import  usuariosAlmacen from '../../almacen/usuarios-almacen';
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
           <td><a href="#/" data-id="${usuario.id}" class="tooltip"><i class="fa fa-floppy-o" aria-hidden="true"></i><span class="tooltiptext">Seleccion</span></a>
           |
           <a href="#/" data-id="${usuario.id}" class="tooltip"><i class="fa fa-trash-o" aria-hidden="true"></i><span class="tooltiptext">Borrado</span></a></td>
      </tr>
      `;
    });
    //console.log(tablaHTML);
    tabla.querySelector('tbody').innerHTML = tablaHTML;

}