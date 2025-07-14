import { cargaUsuariosPorPagina } from '../casos-de-uso/carga-usuarios-por-pagina';


const estado = {
    paginaActual: 0,
    usuarios: [],
    ultimo: 0,
}

const cargaProximapagina = async () =>{
    const usuario = await cargaUsuariosPorPagina(estado.paginaActual + 1); 
    if(estado.ultimo === usuario[0].id) return false;
        estado.ultimo = usuario[0].id;
        estado.paginaActual++;
        estado.usuarios = usuario;
    
}

const cargaPreviapagina = async () =>{
    if((estado.paginaActual -1)> 0){
        const usuario = await cargaUsuariosPorPagina(estado.paginaActual-1);
        estado.paginaActual--;
        estado.usuarios = usuario;
        estado.ultimo = 0;
    }
   // throw new Error('no implementado');
}
// cosas a implementar
/**
 * 
 * @param {User} actualizaUsuario
 */
const cambiosUsuarios = (actualizaUsuario) =>{
   
    let fuenEncontrado = false;
      // console.log('aqui lo mando ' +actualizaUsuario);
    estado.usuarios = estado.usuarios.map(usuario => {
       
        if(usuario.id === actualizaUsuario.id){
            fuenEncontrado = true;
            return actualizaUsuario;
        }
        return usuario;
    });

    if(estado.usuarios.length < 10 && !fuenEncontrado ){
        estado.usuarios.push(actualizaUsuario);
    }

}

const recargaPagina = async () =>{
     const usuario = await cargaUsuariosPorPagina(estado.paginaActual); 
      console.log('recargue la pagina');
   /* if(estado.ultimo === usuario[0].id) return false;
        estado.ultimo = usuario[0].id;*/
        /* como evaluamos esto que funcione */
        estado.usuarios = usuario;
        console.log('recargue la pagina');
}

export default{
    cargaProximapagina,
    cargaPreviapagina,
    cambiosUsuarios,
    recargaPagina,
   
    /**
     * 
     * @returns {user[]}
     */
    tomaUsuario: () => [...estado.usuarios],
    /**
     * @returns {Number};
     */
    tomaPaginaActual: () => estado.paginaActual,

}