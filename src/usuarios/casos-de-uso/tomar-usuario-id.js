import { localhostUsuariosaModelo } from '../mapeadores/localhost-user-mapper';
/**
 * 
 * @param {String|number} id
 * @returns {Promise<usuario>}
 */

export const cargaUsuariosPorid = async (id)=>{
    const url = `${import.meta.env.VITE_BASE_URL}/users/${ id }`;
    const res = await fetch(url);
    const data = await res.json();
   
    const usuario = localhostUsuariosaModelo(data);
    return usuario;
}