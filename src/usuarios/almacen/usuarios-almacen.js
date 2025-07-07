import { cargaUsuariosPorPagina } from '../casos-de-uso/carga-usuarios-por-pagina';


const estado = {
    paginaActual: 0,
    usuarios: [],
    verdad: true,
}

const cargaProximapagina = async () =>{
    const usuario = await cargaUsuariosPorPagina(estado.paginaActual + 1); 
   //  console.log(usuario.length);
   // if(isNaN(usuario[0].id)) {console.log('entre en if'); return false;}else{console.log('esto no funciona');}
   if(estado.verdad=== false) return false;
   if(usuario.length < 10 ) {estado.verdad = false;}
   // console.log(usuario[0].id);
    estado.paginaActual++;
    estado.usuarios = usuario;
    //throw new Error('no implementado');
}

const cargaPreviapagina = async () =>{
    if((estado.paginaActual -1)> 0){
        const usuario = await cargaUsuariosPorPagina(estado.paginaActual-1);
        estado.paginaActual--;
        estado.usuarios = usuario;
        estado.verdad = true;
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