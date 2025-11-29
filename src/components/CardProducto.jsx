import { Card, ListGroup } from 'react-bootstrap'
import Boton from './Boton'
import { mostrarAlertaExito } from './Mensajes'

export default function CardProducto({producto}){

    const mensaje = () => {
        mostrarAlertaExito("Producto agregado al carrito correctamente")
    }

    return(
        <Card key={producto.id} style={{ width: '18rem', marginTop:"10px" }}>
            <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Precio: <b>${producto.precio}</b></ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Boton variante={"primary"} texto={"Agregar al carrito"} funcion={mensaje}/>
            </Card.Body>
        </Card>
    )    
}
