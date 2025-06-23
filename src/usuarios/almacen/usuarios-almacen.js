import { cargaUsuariosPorPagina } from '../casos-de-uso/carga-usuarios-por-pagina';


const estado = {
    paginaActual: 0,
    usuarios: [],
}

const cargaProximapagina = async () =>{
    const usuario = await cargaUsuariosPorPagina(estado.paginaActual + 1); 
    if(isNaN(usuario[0].id)) {console.log('entre en if'); return false;}
    estado.paginaActual++;
    estado.usuarios = usuario;
    //throw new Error('no implementado');
}

const cargaPreviapagina = async () =>{
    if((estado.paginaActual -1)> 0){
        const usuario = await cargaUsuariosPorPagina(estado.paginaActual-1);
        estado.paginaActual--;
        estado.usuarios = usuario;
    }
   // throw new Error('no implementado');
}
// cosas a implementar
const cambiosUsuarios = () =>{
    throw new Error('no implementado');
}

const recargaPagina = async () =>{
    throw new Error('no implementado');
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