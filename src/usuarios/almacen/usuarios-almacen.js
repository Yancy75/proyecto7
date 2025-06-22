import { cargaUsuariosPorPagina } from '../casos-de-uso/carga-usuarios-por-pagina';


const estado = {
    paginaActual: 0,
    usuarios: [],
}

const cargaProximapagina = async () =>{
    const usuario = await cargaUsuariosPorPagina(estado.paginaActual + 1); 
    if(isNaN(usuario[0].id)) {console.log('entre en if'); return false;}
    //console.log(!isNaN(usuario[0].id));
    //console.log(usuario[0].id);
    estado.paginaActual++;
    estado.usuarios = usuario;
    // console.log(estado.paginaActual);   
   // console.log(estado.usuarios);  
    //throw new Error('no implementado');
}

const cargaPreviapagina = async () =>{
    throw new Error('no implementado');
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
   
    tomaUsuario: () => [...estado.usuarios],
    tomaPaginaActual: () => estado.paginaActual,

}