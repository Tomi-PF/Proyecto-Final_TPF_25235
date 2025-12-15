export const validarCampos = (usuario, contraseña) => {
    const esValidoUsuario = usuario.trim().toLowerCase() === "yo"
    const esValidoContraseña = contraseña.trim().toLowerCase() === "0"

    return {esValidoUsuario, esValidoContraseña}
}
