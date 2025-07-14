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
   // console.log(usuario+ "te encontre");
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
/* aqui esta la funcion que llama al grabado del usuario el callback */
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
           /* cuando creo un objeto tipo FormData el se empareja con el fomulario que le estoy enviando que ees formulario
           la unica manerda de ver faciel este valor es con un for of que me permite recorrerlo tormando los valores con sus nombres */
           const datosFormularios = new FormData(formulario);
           const usuarioComo = {...cargaDeUsuario};
          // console.log(datosFormularios.length); 
          /* los valores estan cargados porque yo llamo el formulario despues de cargar los valores en los campos ejemplo basico abajo*/
                            //for(const valor of datosFormularios){
                            // console.log(valor[0]+' '+valor[1]);
                            //}
           /* yancy tonto eso es un for el recorre el dato formulario  */
          for(const [key, value] of datosFormularios){
               console.log(key+' '+value);
            /* para el valor numerico y le decimos continue para que pase al siguente valor*/
              if(key === 'balance'){usuarioComo[key] = +value;continue;/* +value que puede ser cualquier variable de nombre es para convertirlo en numero */}
              if(key === 'isActive'){               
                usuarioComo[key] = (value === 'on') ? true : false;
                continue;}
              /* aqui cargamos el resto de valores del formulario */
             usuarioComo[key]= value;
          }
           //hacer guardar usuarios
           console.log(usuarioComo);
           await callback(usuarioComo);
           esconderModal();
    });
    elemento.append(modal);
   
}