import { User } from '../modelos/usuarios';
import {usuarioModelparaLocalhost} from '../mapeadores/user-to-localhost-mapper';
/**
 * @param{ like<User>} usuarioComo
 */


export const grabarUSuario = async (usuarioComo) =>{
    
    const usuario = new User(usuarioComo); 

    // aqui mapeamos y elminamos espacios en blanco
    
    if (!usuario.firstName.replace(/\s+/g, '') || !usuario.lastName.replace(/\s+/g, '')) throw 'Nombre y apellidos son obligatoprios';

    const usuariosAGrabar = usuarioModelparaLocalhost(usuario);
    let usuarioActualizado;
   //console.log(usuariosAGrabar);
    if (usuario.id){
        usuarioActualizado = await actualizarUsuario(usuariosAGrabar);
    }else{
        usuarioActualizado = await crearUsuario(usuariosAGrabar);
    }
    
    return localhostUsuariosaModelo(usuarioActualizado);
    //const actualizaUsuario = await crearUsuario(usuariosAGrabar);

}
/**
 * @param {like<User>} usuario
 */
const crearUsuario = async (usuario) =>{
    
    const url = `${import.meta.env.VITE_BASE_URL}/users`;
   /* adaptacion por desface de versiones */
    let res = await fetch(url);
    const data = await res.json();
    let aux = data.length+1;
    usuario.id = aux.toString();
    /* adaptacion por desface de versiones  se agrega manualmente el id*/
    res = await fetch(url,{
        method: 'POST',
        body: JSON.stringify(usuario),
        headers:{
            'Content-Type':'application/json'
        }
     });
     const nuevoUsuario = await res.json();
     console.log({ nuevoUsuario});
     return nuevoUsuario;
}

const actualizarUsuario = async (usuario) =>{
    
    const url = `${import.meta.env.VITE_BASE_URL}/users/${usuario.id}`;
   /* adaptacion por desface de versiones */
    let res = await fetch(url);
    const data = await res.json();
    let aux = data.length+1;
    usuario.id = aux.toString();
    /* adaptacion por desface de versiones  se agrega manualmente el id*/
    res = await fetch(url,{
        method: 'PATCH',
        body: JSON.stringify(usuario),
        headers:{
            'Content-Type':'application/json'
        }
     });
     const actualizaUsuario = await res.json();
     console.log({ actualizaUsuario});
     return actualizaUsuario;
}