//import { cargaUsuariosPorPagina } from './casos-de-uso/carga-usuarios-por-pagina'
import usuariosAlmacen from './almacen/usuarios-almacen';
import {dibujaTabla} from './presentacion/render-table/render-tablet';

/**
 * 
 * @param {HTMLDivElement} elemento 
 */
export const usuarioApp = async (elemento) =>{
      elemento.innerHTML = 'Cargando...';
      await usuariosAlmacen.cargaProximapagina();
      dibujaTabla(elemento);
      //rendertablet.dibujaTabla(elemento);
     /* console.log(usuariosAlmacen.tomaUsuario());
      console.log(usuariosAlmacen.tomaPaginaActual());*/
      //await cargaUsuariosPorPagina(2);
}