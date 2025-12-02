import { useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import Boton from './Boton'
import MensajeToast from './MensajeToast'
import { mostrarAlertaExito } from './Mensajes'

export default function CardProducto({producto, agregarCarrito}){

    const [mostrarToast, setMostrarToast] = useState(false)

    const agregar = (producto) => {
        agregarCarrito(producto)
        mostrarAlertaExito("Producto agregado al carrito correctamente")
        setMostrarToast(true)
    }

    return(
        <div>
            <Card key={producto.id}>
                <Card.Img 
                    variant="top" 
                    src={producto.imagen} 
                    alt={producto.nombre} 
                    className="card-imagen"
                />
                <Card.Body>
                    <Card.Title className='card-title'>{producto.nombre}</Card.Title>
                    <Card.Text className='card-text'>{producto.descripcion}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Precio: <b>${producto.precio}</b></ListGroup.Item>
                </ListGroup>
                <Card.Body className='card-body'>
                    <Boton 
                        variante={"primary"} 
                        texto={"Agregar al carrito"} 
                        funcion={() => agregar(producto)}
                    />
                </Card.Body>
            </Card>
            <MensajeToast 
                producto={producto} 
                mostrar={mostrarToast} 
                setMostrar={setMostrarToast}
            />
        </div>
    )    
}
