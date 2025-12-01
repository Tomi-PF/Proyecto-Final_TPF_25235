import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form } from "react-bootstrap"
import { mostrarAlertaExito, mostrarAlertaError } from "../components/Mensajes"
import { validarCampos } from "../components/Validaciones"
import Boton from "../components/Boton"

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
            <div className="contenedor-formulario" id="formulario_seccion">
                <Form className="formulario">
                    <header>Formulario para iniciar sesión</header>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ingrese el nombre de usuario" 
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Ingrese la contraseña"
                            value={contraseña} 
                            onChange={(e) => setContraseña(e.target.value)}    
                        />
                    </Form.Group>
                    <Boton variante={"primary"} texto={"Iniciar Sesión"} funcion={() => manejarLogin()}/>
                </Form>
            </div>
        </section>
    )
}
