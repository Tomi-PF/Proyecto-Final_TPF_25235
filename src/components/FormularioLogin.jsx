import { Form } from "react-bootstrap"
import Boton from "./Boton"
import CampoIngreso from "./CampoIngreso"

export default function FormularioLogin({usuario, setUsuario, contraseña, setContraseña}){

    return(
        <Form className="formulario">
            <header>Formulario para iniciar sesión</header>
            
            <CampoIngreso 
                texto={"Usuario"}
                tipo={"text"}
                valor={usuario}
                mensaje={"Ingrese el nombre de usuario"}
                funcion={(e) => setUsuario(e.target.value)}
            />

            <CampoIngreso 
                texto={"Contraseña"}
                tipo={"password"}
                valor={contraseña}
                mensaje={"Ingrese la contraseña"}
                funcion={(e) => setContraseña(e.target.value)}
            />
            
            <Boton 
                variante={"primary"} 
                texto={"Iniciar Sesión"} 
                funcion={() => manejarLogin()}
            />
        </Form>
    )
}
