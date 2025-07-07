import contexto from './render-modal.html?raw';
/* cuando importamos un html es con signo de interrogacion y la palabra raw solo funciona en vite */
import './render-modal.css';
import {User} from '../../modelos/usuarios';
import {cargaUsuariosPorid} from '../../casos-de-uso/tomar-usuario-id';

let modal, formulario;
let cargaDeUsuario={};




/** cargar el usuario por id */
export const mostraModal =  async (id = false) => {
    modal?.classList.remove('hide-modal');
    cargaDeUsuario = {};
    if(!id) return;
    const usuario = await cargaUsuariosPorid(id);
    darValoreForm(usuario);
    console.log(usuario);
}

export const esconderModal = () =>{
    // reset fromulario
     modal?.classList.add('hide-modal');
     formulario?.reset();
}

const darValoreForm = (usuario) =>{
     formulario.querySelector('[name="firstName"]').value = usuario.firstName;
     formulario.querySelector('[name="lastName"]').value = usuario.lastName;
     formulario.querySelector('[name="balance"]').value = usuario.balance;
     formulario.querySelector('[name="isActive"]').checked = usuario.isActive;
     cargaDeUsuario = usuario;
}
/**
 * 
 * @param {HTMLDivElement} elemento 
 * @param {(usuarioComo) => Promise<void>} callback
 */

export const dibujaModal = (elemento, callback) =>{

    if(modal) return;
    modal = document.createElement('div');
    modal.innerHTML = contexto;
    modal.className = 'modal-container hide-modal';
    formulario = modal.querySelector('form');
    
    modal.addEventListener('click', (evento) =>{
        if(evento.target.className ==='modal-container'){
            esconderModal();
        }
         // console.log(evento.target);
    });

    formulario.addEventListener('submit', async (evento) =>{
           evento.preventDefault();
           
           const datosFormularios = new FormData(formulario);
           const usuarioComo = {...cargaDeUsuario};
           for(const [key, value] of datosFormularios){
              if(key === 'balance'){
                 usuarioComo[key] = +value;
                 continue;
              }
              if(key === 'isActive'){
                usuarioComo[key] = (value === 'on') ? true : false;
                continue;
              }
             usuarioComo[key]= value;
           }
          // console.log(usuarioComo);
           //console.log('formulario enviado');
           //hacer guardar usuarios
           await callback(usuarioComo);
           esconderModal();
    });
    elemento.append(modal);
   
}