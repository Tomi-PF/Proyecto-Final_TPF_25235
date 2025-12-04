import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { mostrarAlertaExito, mostrarAlertaError } from "../components/Mensajes"
import { validarCampos } from "../components/Validaciones"
import FormularioLogin from "../components/FormularioLogin"

export default function Login(){

    const navigate = useNavigate()

    /* Usuario */
    const [usuario, setUsuario] = useState("")

    /* Contraseña */
    const [contraseña, setContraseña] = useState("")

    const manejarLogin = () => {

        const { esValidoUsuario, esValidoContraseña } = validarCampos(usuario, contraseña)

        if(esValidoUsuario && esValidoContraseña){

            mostrarAlertaExito("Iniciado sesión correctamente")
            localStorage.setItem('auth', 'true')
            navigate('/')

        }else if(esValidoContraseña){
            mostrarAlertaError("Usuario ingresado inválido.")
        }else if(esValidoUsuario){
            mostrarAlertaError("Contraseña ingresada inválida.")
        }else{
            mostrarAlertaError("Contraseña y usuario ingresados inválidos.")
        }
    }

    return(
        <section className="section-login">
            <div className="contenedor-formulario">
                <FormularioLogin 
                    usuario={usuario}
                    setUsuario={setUsuario}
                    contraseña={contraseña}
                    setContraseña={setContraseña}
                />
            </div>
        </section>
    )
}
