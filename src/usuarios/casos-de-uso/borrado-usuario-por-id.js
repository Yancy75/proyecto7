/**
 * 
 * @param {String|number} id 
 * @returns 
 */

export const borradoUsuario = async (id) =>{
    
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    let res = await fetch(url,{
        method: 'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
     });
     const Borrado = await res.json();
     console.log({ Borrado});
     return true;
}