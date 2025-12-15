import { Modal } from "react-bootstrap"
import FormularioModal from "./FormularioModal"

export default function ModalAdministracion({mostrar, idEditar, formulario, setFormulario, cerrarModal, manejarEnvio}){

    return(
        <Modal show={mostrar} onHide={cerrarModal}>
            <Modal.Header closeButton>
                <Modal.Title>{idEditar ? "Editar" : "Agregar"} Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormularioModal 
                    formulario={formulario} 
                    setFormulario={setFormulario} 
                    manejarEnvio={manejarEnvio}
                />
            </Modal.Body>
        </Modal>
    )
}
