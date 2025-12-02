import { Toast, ToastContainer, Col, Row } from "react-bootstrap";

export default function MensajeToast({producto, mostrar, setMostrar}){

    return(
        <ToastContainer style={{position: "fixed", bottom: "100px", right: "20px", zIndex: 1000}}>
            <Toast onClose={() => setMostrar(false)} show={mostrar} delay={5000} autohide>
                <Toast.Header>
                    <img 
                        src={producto.imagen} 
                        width={"20px"}
                        height={"20px"}
                        alt={producto.nombre}
                        className="rounded me-2"
                    />
                    <strong className="me-auto">{producto.nombre}</strong>
                </Toast.Header>
                <Toast.Body>{producto.descripcion}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}
