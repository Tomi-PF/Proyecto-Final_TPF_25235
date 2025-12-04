import { Form } from "react-bootstrap"
import CampoIngreso from "./CampoIngreso"
import Boton from "./Boton"

export default function FormularioModal({formulario, setFormulario, manejarEnvio}){
    
    return(
        <Form onSubmit={manejarEnvio}>  
            <CampoIngreso 
                texto={"Nombre"}
                tipo={"text"}
                valor={formulario.nombre}
                mensaje={"Ingrese el nombre del producto"}
                funcion={(e) => setFormulario({...formulario, nombre: e.target.value})}
            />

            <CampoIngreso 
                texto={"Descripción"}
                tipo={"text"}
                valor={formulario.descripcion}
                mensaje={"Ingrese la descripción del producto"}
                funcion={(e) => setFormulario({...formulario, descripcion: e.target.value})}
            />

            <CampoIngreso 
                texto={"Precio"}
                tipo={"number"}
                valor={formulario.precio}
                mensaje={"Ingrese el precio del producto"}
                funcion={(e) => setFormulario({...formulario, precio: Number(e.target.value)})}
            />

            <CampoIngreso 
                texto={"Imagen (URL)"}
                tipo={"text"}
                valor={formulario.imagen}
                mensaje={"Ingrese la URL de la imagen del producto"}
                funcion={(e) => setFormulario({...formulario, imagen: e.target.value})}
            />

            <Boton 
                variante={"info"} 
                texto={"Guardar"} 
                funcion={manejarEnvio} 
                type="submit"
            />
        </Form>
    )
}
