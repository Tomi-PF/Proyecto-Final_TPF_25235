import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {Form, Button} from "react-bootstrap"
import { mostrarAlertaExito, mostrarAlertaError } from "../components/Mensajes"
import { validarCampos } from "../components/Validaciones"

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
            localStorage.setItem('user', usuario)
            navigate('/')

        }else if(esValidoContraseña){
            mostrarAlertaError("Usuario ingresado inválido. No puede estar vacío.")
        }else if(esValidoUsuario){
            mostrarAlertaError("Contraseña ingresada inválida. No puede estar vacía.")
        }else{
            mostrarAlertaError("Contraseña y usuario ingresados inválidos. No pueden estar vacíos.")
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
                    <Button variant="primary" onClick={manejarLogin}>
                        Iniciar Sesión
                    </Button>
                </Form>
            </div>
        </section>
    )
}
