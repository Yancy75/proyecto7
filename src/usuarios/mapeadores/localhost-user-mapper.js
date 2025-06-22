import { User } from '../modelos/usuarios';
/**
 * 
 * @param {like<User>} localhostUsuario 
 * @returns {User}
 */

export const localhostUsuariosaModelo = (localhostUsuario) => {
   const{
    avatar,
    balance,
    first_name,
    gender,
    id,
    isActive,
    last_name,
   } = localhostUsuario;
   /* hacemos un cast con la variable de llagada y la mandamos igual opara el modelo */
  return new User({
        avatar,
        balance,
        firstName:first_name,
        gender,
        id,
        isActive,
        lastName:last_name,
   });
   
}