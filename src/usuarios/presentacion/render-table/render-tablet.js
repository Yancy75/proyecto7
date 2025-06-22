import  usuariosAlmacen from '../../almacen/usuarios-almacen';
import './render-tablet.css';

let tabla;

const creaTabla = () => {
    const tabla = document.createElement('table');
    const tablaCabecera = document.createElement('thead');
    tablaCabecera.innerHTML = `<tr><th>#ID</th><th>Balance</th><th>Nombre</th><th>Apellido</th><th>Activo</th><th>Acciones</th></tr>`;
    const tablaCuerpo = document.createElement('tbody');
    console.log(tablaCabecera);
    tabla.append(tablaCabecera, tablaCuerpo);
    return tabla;
}
/**
 * @param {HTMLDivElement} elemento
 */

export const dibujaTabla = (elemento) =>{
   const usuarios = usuariosAlmacen.tomaUsuario();
  
   if(!tabla){
     tabla = creaTabla();
     elemento.append(tabla);
      // agreagar listeners
    }

}