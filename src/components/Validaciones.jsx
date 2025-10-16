export const validarCampos = (usuario, contraseña) => {
    const esValidoUsuario = usuario.trim().length > 0
    const esValidoContraseña = contraseña.trim().length > 0

    return {esValidoUsuario, esValidoContraseña}
}
