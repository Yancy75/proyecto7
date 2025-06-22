import { localhostUsuariosaModelo } from '../mapeadores/localhost-user-mapper';
/**
 * 
 * @param {Number} pagina 
 * @returns {Promise<usuarios>}
 */

export const cargaUsuariosPorPagina = async (pagina = 1)=>{
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${ pagina }`;
    const res = await fetch(url);
    const data = await res.json();
   /* con la funcion map estoy enviando un algumento basico pero puedo saltarlo si lo deseo */
    //const usuarios = data.data.map( usercomo => localhostUsuariosaModelo(usercomo));
   // console.log(usuarios);
   return data.data.map( usercomo => localhostUsuariosaModelo(usercomo));
}