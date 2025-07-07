//import { cargaUsuariosPorPagina } from './casos-de-uso/carga-usuarios-por-pagina'
import usuariosAlmacen from './almacen/usuarios-almacen';
import {dibujaTabla} from './presentacion/render-table/render-tablet';
import {renderBotones} from './presentacion/render-botones/render-botones';
import {dibujaAgregaboton} from './presentacion/render-add-botones/render-botones-add';
import {dibujaModal} from './presentacion/render-modal/render-modal';
import {grabarUSuario} from './casos-de-uso/grabar-usuarios';
/**
 * 
 * @param {HTMLDivElement} elemento 
 */
export const usuarioApp = async (elemento) =>{

      elemento.innerHTML = 'Cargando...';
      await usuariosAlmacen.cargaProximapagina();
      elemento.innerHTML='';

      dibujaTabla(elemento);
      renderBotones(elemento);
      dibujaAgregaboton(elemento);
      dibujaModal(elemento, async(usuarioComo) =>{
            const usuario = await grabarUSuario(usuarioComo);
            console.log(usuario);
            usuariosAlmacen.cambiosUsuarios(usuario);
            dibujaTabla();
      });


      //rendertablet.dibujaTabla(elemento);
     /* console.log(usuariosAlmacen.tomaUsuario());
      console.log(usuariosAlmacen.tomaPaginaActual());*/
      //await cargaUsuariosPorPagina(2);
}