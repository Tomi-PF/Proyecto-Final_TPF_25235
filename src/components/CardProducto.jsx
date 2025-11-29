import { Card, ListGroup } from 'react-bootstrap'
import Boton from './Boton'
import { mostrarAlertaExito } from './Mensajes'

export default function CardProducto({producto}){

    const mensaje = () => {
        mostrarAlertaExito("Producto agregado al carrito correctamente")
    }

    return(
        <Card key={producto.id} style={{ width: '18rem', marginTop:"10px" }}>
            <Card.Img variant="top" src={producto.thumbnail} alt={producto.title} />
            <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>{producto.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Precio: <b>${producto.price}</b></ListGroup.Item>
                <ListGroup.Item>Estrellas: <b>{producto.rating}</b></ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Boton variante={"primary"} texto={"Agregar al carrito"} funcion={mensaje}/>
            </Card.Body>
        </Card>
    )    
}
