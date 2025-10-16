import { Card, ListGroup } from 'react-bootstrap'
import Boton from './Boton'
import { mostrarAlertaExito } from './Mensajes'

export default function CardProducto({id, nombre, descripcion, foto, precio, estrellas}){

    const mensaje = () => {
        mostrarAlertaExito("Producto agregado al carrito correctamente")
    }

    return(
        <Card key={id} style={{ width: '18rem', marginTop:"10px" }}>
            <Card.Img variant="top" src={foto} alt={nombre} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Precio: <b>${precio}</b></ListGroup.Item>
                <ListGroup.Item>Estrellas: <b>{estrellas}</b></ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Boton variante={"primary"} texto={"Agregar al carrito"} funcion={mensaje}/>
            </Card.Body>
        </Card>
    )    
}
