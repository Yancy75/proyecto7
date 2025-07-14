import {User} from '../modelos/usuarios';
/**
 * 
 * @param {User} usuario 
 */


export const usuarioModelparaLocalhost = (usuario) =>{
     
    const {
        avatar,
        balance,        
        firstName,
        gender,
        id,
        isActive,
        lastName,
    } = usuario;

    return {
        avatar,
        balance,
        first_name: firstName,
        gender,
        id,
        isActive,
        last_name: lastName,
    }
}